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
      />
    </base-form-control>
    <base-button
      icon="send"
      :disabled="submitDisabled"
      @click="submit"
    >
      {{ submitState }}
    </base-button>
  </div>
</template>
<script lang="ts" setup>
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators';

const { t } = useI18n();

const defaultForm = {
  subject: '',
  name: '',
  email: '',
  message: ''
};

const rules = {
  subject: { 
    required: helpers.withMessage(t('feedback.errors.required', {field: t('feedback.label-subject')}), required),
  },
  name: { 
    required: helpers.withMessage(t('feedback.errors.required', {field: t('feedback.label-name')}), required),
  },
  email: {
    required: helpers.withMessage(t('feedback.errors.required', {field: t('feedback.label-email')}), required),
    email: helpers.withMessage(t('feedback.errors.email'), email),
  },
  message: { 
    required: helpers.withMessage(t('feedback.errors.required', {field: t('feedback.label-message')}), required),
    minLength: helpers.withMessage(t('feedback.errors.min-length', {characters: 10}), minLength(10)),
    maxLength: helpers.withMessage(t('feedback.errors.max-length', {characters: 500}), maxLength(500)),
  }
};

const form = reactive(defaultForm);

const v$ = useVuelidate(rules, form);


enum FeedbackState {
  Ready,
  Sending,
  Sent
}

const feedbackState = ref(FeedbackState.Ready);

const submitState = computed(() => {
  switch(feedbackState.value) {
    case FeedbackState.Ready:
      return t('feedback.submit');
    case FeedbackState.Sending:
      return t('feedback.submitting');
    case FeedbackState.Sent:
      return t('feedback.submitted');
  }
});

const submitDisabled = computed(() => feedbackState.value !== FeedbackState.Ready);

const runtimeConfig = useRuntimeConfig();

const submit = async () => {
  if (feedbackState.value !== FeedbackState.Ready) {
    return;
  }
  
  if(!(await v$.value.$validate())) {
    return;
  }

  const formData = new FormData();
  formData.append('subject', form.subject);
  formData.append('name', form.name);
  formData.append('email', form.email);
  formData.append('message', form.message);

  feedbackState.value = FeedbackState.Sending;
  try {
    fetch(`${runtimeConfig.public.baseURL}/feedback.php`, {method: 'POST', body: formData});
  } catch(error) {
    console.log('Error while submitting feedback', error);
  } finally {
    feedbackState.value = FeedbackState.Sent;
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  @apply max-w-full md:max-w-[50%] mt-3
}
</style>