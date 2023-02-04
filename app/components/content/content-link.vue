<template>
  <base-link :to="to">
    <slot />
  </base-link>
</template>
<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';
defineProps<{
  to: RouteLocationRaw
}>();
</script>
