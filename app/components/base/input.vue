<template>
  <input
    v-model="modelValue"
    :type="type"
    :label="label"
  >
</template>
<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    modelValue: string
    type?: string
    label?: string
  }>(),
  {
    type: 'text',
    label: 'Input',
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const modelValue = useModel(props, 'modelValue');
</script>
<style lang="scss" scoped>
input {
  @apply w-full;
}
</style>
