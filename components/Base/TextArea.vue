<template>
  <textarea
    v-model="value"
    :label="label"
  />
</template>
<script lang="ts" setup>
const props = defineProps<{
  modelValue: string,
  label?: string
}>();


const emit = defineEmits([
  'update:modelValue'
]);

const value = computed({
  get: () =>  {
    return props.modelValue;
  },
  set: (value: string) => {
    emit('update:modelValue', value);
  }
});
</script>
<style lang="scss" scoped>
textarea {
  @apply resize-none border-2 border-gray-300 w-full;
}
</style>