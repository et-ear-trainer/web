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
    v-for="item in locales"
    :key="item.code"
    class="item"
    :class="{'language-selected': item.code === locale}"
    :to="$switchLocalePath(item.code)"
  >
    {{ $t(`lang_keys.${item.code}`) }}
  </nuxt-link>
</template>
<script lang="ts" setup>
const { locale, locales } = useI18n();
const localePath = useLocalePath();

const navbarItems = computed(() => [
  'description',
  'media',
  'faq',
  'press',
  'feedback',
  'about',
]);
</script>
<style lang="scss" scoped>
.language-selected {
  @apply font-semibold;
}
</style>
