<template>
  <base-button
    :to="to"
  >
    <slot />
  </base-button>
</template>
<script lang="ts" setup>
import { RouteLocationRaw } from 'vue-router';

defineProps<{
  to: RouteLocationRaw
}>();
</script>