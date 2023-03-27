<template>
  <nuxt-link
    v-for="item in navbarItems"
    :key="item"
    :to="localePath({hash: `#${item}`})"
    class="item"
  >
    {{ $t(`nav.${item}`) }}
  </nuxt-link>
  <nuxt-link
    v-for="item in availableLocales"
    :key="item.code"
    class="item"
    :class="{'language-selected': item.code === locale}"
    @click="setLocale(item.code)"
  >
    {{ $t(`lang_keys.${item.code}`) }}
  </nuxt-link>
</template>
<script lang="ts" setup>
  import { LocaleObject } from 'vue-i18n-routing';

  const { locale, locales, setLocale } = useI18n();
  const localePath = useLocalePath();
  
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