<template>
  <ContentDoc :path="docPath" />
</template>
<script lang="ts" setup>
  const { locale } = useI18n();
  const docPath = computed(() => `${locale.value}`);
</script>