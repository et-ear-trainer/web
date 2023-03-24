<template>
  <base-link :to="to">
    <slot />
  </base-link>
</template>
<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router';
defineProps<{
  to: RouteLocationRaw
  target?: string
}>();
</script>