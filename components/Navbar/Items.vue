<template>
  <div
    v-for="item in navbarItems"
    :key="item"
    class="item"
  >
    <NuxtLink :to="{path: '/', hash: `#${item}`}">
      {{ $t(`nav.${item}`) }}
    </NuxtLink>
  </div>
  <div
    v-for="item in availableLocales"
    :key="item.code"
    class="item"
    :class="{'language-selected': item.code === locale}"
  >
    <NuxtLink :to="switchLocalePath(item.code)">
      {{ $t(`lang_keys.${item.code}`) }}
    </NuxtLink>
  </div>
</template>
<script lang="ts" setup>
  import { LocaleObject } from 'vue-i18n-routing';

  const switchLocalePath = useSwitchLocalePath();
  const { locale, locales } = useI18n();
  
  const availableLocales = computed(() => {
    return locales.value as LocaleObject[];
  });

  const navbarItems = computed(() => [
    'description',
    'media',
    'faq',
    'press',
    'feedback',
    'about'
  ]);
</script>
<style lang="scss" scoped>
  .language-selected {
    @apply font-semibold;
  }
</style>