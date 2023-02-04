<template>
  <content-renderer v-if="data" :value="data" tag="main" />
</template>
<script lang="ts" setup>
const { locale } = useI18n();

const { data } = await useAsyncData(locale, () =>
  queryCollection('content').
  path(`/${locale.value}`).
  first()
);
</script>
