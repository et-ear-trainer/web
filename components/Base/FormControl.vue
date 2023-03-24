<template>
  <div>
    <p class="label">
      <span
        v-if="required"
        class="required"
      >* </span>{{ label }}
    </p>
    <slot />
    <template v-if="errors">
      <p
        v-for="error of errors"
        :key="error.$property"
        class="error"
      >
        {{ error.$message }}
      </p>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { ErrorObject } from '@vuelidate/core';

defineProps<{
  label: string
  required?: boolean
  errors?: ErrorObject[]
}>();

</script>
<style lang="scss" scoped>
  .label {
    @apply mb-1 mt-3;
  }

  .required {
    @apply
      bg-clip-text
      text-transparent
      bg-gradient-to-br
      to-et-blue-light
      from-et-blue-dark
    ;
  }

  .error {
    @apply text-red-500 relative;
  }
</style>