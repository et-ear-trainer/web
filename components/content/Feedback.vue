<template>
  <div class="wrapper">
    <base-form-control
      :label="$t('feedback.label-name')"
      required
      :errors="v$.name.$errors"
    >
      <base-input v-model="form.name" />
    </base-form-control>
    <base-form-control
      :label="$t('feedback.label-subject')"
      required
      :errors="v$.subject.$errors"
    >
      <base-input v-model="form.subject" />
    </base-form-control>
    <base-form-control
      :label="$t('feedback.label-email')"
      required
      :errors="v$.email.$errors"
    >
      <base-input v-model="form.email" />
    </base-form-control>
    <base-form-control
      :label="$t('feedback.label-message')"
      required
      :errors="v$.message.$errors"
    >
      <base-text-area v-model="form.message" />
    </base-form-control>
    <base-button
      icon="send"
      @click="submit"
    >
      {{ $t('feedback.submit') }}
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

const submit = async () => {
  await v$.value.$validate();

  const formData = new FormData();
  formData.append('subject', form.subject);
  formData.append('name', form.name);
  formData.append('email', form.email);
  formData.append('message', form.message);

  fetch('/feedback.php', {method: 'POST', body: formData});
};
</script>
<style lang="scss" scoped>
.wrapper {
  @apply max-w-full md:max-w-[50%] mt-3
}
</style>