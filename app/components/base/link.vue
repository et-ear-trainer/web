<template>
  <nuxt-link
    :to="to"
    target="_blank"
    class="link"
  >
    <slot />
  </nuxt-link>
</template>
<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';

defineProps<{
  to: RouteLocationRaw
}>();
</script>
<style lang="scss" scoped>
.link {
  @apply underline;

  &:hover {
    @apply text-et-blue-light;
  }
}
</style>
