<template>
  <span
    class="material-icons-round"
    :style="{fontSize: size}"
  >{{ name }}</span>
</template>
<script lang="ts" setup>
  withDefaults(
    defineProps<{
      name: string,
      size?: 18 | 24 | 36 | 48
    }>(),
    {
      size: 18
    }
  );
</script>