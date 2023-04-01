<template>
  <input
    v-model="value"
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
    label: 'Input'
  }
);


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
input {
  @apply w-full;
}
</style>