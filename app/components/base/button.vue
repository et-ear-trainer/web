<template>
  <component
    :is="element"
    :to="to"
    target="_blank"
    class="button"
    :disabled="disabled"
  >
    <base-icon
      v-if="icon"
      :name="icon"
      class="icon"
    />
    <slot />
  </component>
</template>
<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';
import { NuxtLinkLocale } from '#components';

const props = defineProps<{
  icon?: string
  to?: RouteLocationRaw
  disabled?: boolean
}>();

const element = computed(() => (props.to ? NuxtLinkLocale : 'button'));
</script>
<style lang="scss" scoped>
.button {
  @apply
    w-fit
    h-12
    flex
    items-center
    gap-2
    cursor-pointer
    my-4
    hover:border-et-blue-light
  ;

  &:disabled {
    @apply opacity-75 hover:border-gray-300;
  }

  .icon {
    @apply my-auto;
  }
}
</style>
