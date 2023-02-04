import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1).max(100),
  subject: z.string().min(1).max(500),
  email: z.string().email(),
  message: z.string().min(10).max(500),
  token: z.string(),
});

export default defineEventHandler(async event => {
  const runtimeConfig = useRuntimeConfig();

  const result = await readValidatedBody(event, body => contactSchema.safeParse(body));
  if (!result.success) {
    throw createError({
      statusCode: 400,
      message: 'Validation failed',
    });
  }

  const body = result.data;

  const turnstileResponse = await verifyTurnstileToken(body.token);
  if (!turnstileResponse.success) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Token invalid.',
    });
  }

  const formData = new FormData();
  formData.set('api_token', runtimeConfig.contact.token);
  formData.set('reply_to_email', body.email);
  formData.set('email', runtimeConfig.contact.email);
  formData.set('subject', body.subject);
  formData.set('message', `From ${body.name}:\n${body.message}`);

  try {
    await $fetch(runtimeConfig.contact.url, {
      method: 'POST',
      body: formData,
    });
  } catch {
    throw createError({
      statusCode: 400,
      statusMessage: 'Message could not be sent, please try again later.',
    });
  }

  return {};
});
