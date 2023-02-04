<template>
  <div class="wrapper">
    <base-form-control
      :label="$t('feedback.label-name')"
      required
      :errors="v$.name.$errors"
    >
      <base-input
        v-model="form.name"
        :label="$t('feedback.label-name')"
        @focus="activateCaptcha = true"
      />
    </base-form-control>
    <base-form-control
      :label="$t('feedback.label-subject')"
      required
      :errors="v$.subject.$errors"
    >
      <base-input
        v-model="form.subject"
        :label="$t('feedback.label-subject')"
        @focus="activateCaptcha = true"
      />
    </base-form-control>
    <base-form-control
      :label="$t('feedback.label-email')"
      required
      :errors="v$.email.$errors"
    >
      <base-input
        v-model="form.email"
        :label="$t('feedback.label-email')"
        type="email"
        @focus="activateCaptcha = true"
      />
    </base-form-control>
    <base-form-control
      :label="$t('feedback.label-message')"
      required
      :errors="v$.message.$errors"
    >
      <base-text-area
        v-model="form.message"
        :label="$t('feedback.label-message')"
        @focus="activateCaptcha = true"
      />
    </base-form-control>

    <nuxt-turnstile
      v-if="activateCaptcha"
      v-model="form.token"
      class="hidden"
      :options="{
        'error-callback': onCaptchaError
      }"
    />

    <div class="space-y-5">
      <base-button
        icon="send"
        :disabled="submitDisabled || error !== undefined"
        @click="submit"
      >
        {{ submitState }}
      </base-button>

      <p v-if="error" class="text-red-500">
        {{ $t(error) }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import {
  required, email, minLength, maxLength, helpers,
} from '@vuelidate/validators';

const { t } = useI18n();

const defaultForm = {
  subject: '',
  name: '',
  email: '',
  message: '',
  token: '',
};

const rules = {
  subject: {
    required: helpers.withMessage(t('feedback.errors.required', { field: t('feedback.label-subject') }), required),
    minLength: helpers.withMessage(t('feedback.errors.min-length', { field: t('feedback.label-subject'), characters: 1 }), minLength(1)),
    maxLength: helpers.withMessage(t('feedback.errors.max-length', { field: t('feedback.label-subject'), characters: 500 }), maxLength(500)),
  },
  name: {
    required: helpers.withMessage(t('feedback.errors.required', { field: t('feedback.label-name') }), required),
    minLength: helpers.withMessage(t('feedback.errors.min-length', { field: t('feedback.label-name'), characters: 1 }), minLength(1)),
    maxLength: helpers.withMessage(t('feedback.errors.max-length', { field: t('feedback.label-name'), characters: 100 }), maxLength(100)),
  },
  email: {
    required: helpers.withMessage(t('feedback.errors.required', { field: t('feedback.label-email') }), required),
    email: helpers.withMessage(t('feedback.errors.email'), email),
  },
  message: {
    required: helpers.withMessage(t('feedback.errors.required', { field: t('feedback.label-message') }), required),
    minLength: helpers.withMessage(t('feedback.errors.min-length', { field: t('feedback.label-message'), characters: 10 }), minLength(10)),
    maxLength: helpers.withMessage(t('feedback.errors.max-length', { field: t('feedback.label-message'), characters: 500 }), maxLength(500)),
  },
};

const form = reactive(defaultForm);

const v$ = useVuelidate(rules, form);

const feedbackState = ref<'ready' | 'sending' | 'sent'>('ready');
const error = ref<string>();
const activateCaptcha = ref(false);

const submitState = computed(() => {
  switch (feedbackState.value) {
    case 'ready': {
      return t('feedback.submit');
    }
    case 'sending': {
      return t('feedback.submitting');
    }
    case 'sent': {
      return t('feedback.submitted');
    }
  }
});

const onCaptchaError = () => {
  error.value = 'feedback.errors.captcha';
};

const submitDisabled = computed(() => feedbackState.value !== 'ready');

const submit = async () => {
  if (feedbackState.value !== 'ready') {
    return;
  }

  if (!(await v$.value.$validate())) {
    return;
  }

  feedbackState.value = 'sending';
  try {
    await $fetch('/api/contact', { method: 'POST', body: form });
    feedbackState.value = 'sent';
  } catch (e) {
    console.error('Error while submitting feedback', e);
    error.value = 'feedback.errors.generic'
    feedbackState.value = 'ready';
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  @apply max-w-full md:max-w-[50%] mt-3
}
</style>
