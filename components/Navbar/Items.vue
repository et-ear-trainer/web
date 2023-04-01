<template>
  <nuxt-link
    v-for="item in navbarItems"
    :key="item"
    :to="localePath({hash: `#${item}`})"
    class="item"
  >
    {{ $t(`nav.${item}`) }}
  </nuxt-link>
  <a
    v-for="item in availableLocales"
    :key="item.code"
    class="item"
    :class="{'language-selected': item.code === locale}"
    :href="getLocaleHref(item.code)"
  >
    {{ $t(`lang_keys.${item.code}`) }}
  </a>
</template>
<script lang="ts" setup>
  import { LocaleObject, switchLocalePath } from 'vue-i18n-routing';

  const { locale, locales, setLocale } = useI18n();
  const localePath = useLocalePath();
  const switchLocalePath = useSwitchLocalePath();
  
  const availableLocales = computed(() => {
    return locales.value as LocaleObject[];
  });

  const runtimeConfig = useRuntimeConfig();
  const route = useRoute();

  const getLocaleHref = (code: string) =>  {
    return `${runtimeConfig.public.baseURL}${switchLocalePath(code)}`;
  };

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
