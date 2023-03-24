<template>
  <input v-model="value">
</template>
<script lang="ts" setup>
const props = defineProps<{
  modelValue: string
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
input {
  @apply w-full;
}
</style>