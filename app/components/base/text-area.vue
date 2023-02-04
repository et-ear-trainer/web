<template>
  <textarea
    v-model="modelValue"
    :label="label"
  />
</template>
<script lang="ts" setup>
const props = defineProps<{
  modelValue: string
  label?: string
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const modelValue = useModel(props, 'modelValue');
</script>
<style lang="scss" scoped>
textarea {
  @apply resize-none border-2 border-gray-300 w-full;
}
</style>
