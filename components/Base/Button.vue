<template>
  <nuxt-link
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
  </nuxt-link>
</template>
<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router';

defineProps<{
  icon?: string,
  to?: RouteLocationRaw
  disabled?: boolean
}>();
</script>
<style lang="scss" scoped>
.button {
  @apply
    w-fit
    h-12
    flex
    gap-2
    cursor-pointer
    my-4
  ;

  .icon {
    @apply my-auto;
  }

  &:hover {
    @apply border-et-blue-light;
  }
}
</style>