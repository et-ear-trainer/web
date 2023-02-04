<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
  <Html
    :lang="head.htmlAttrs?.lang"
    :dir="head.htmlAttrs?.dir"
  >
    <Head>
      <template
        v-for="link in head.link"
        :key="link.id"
      >
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <template
        v-for="meta in head.meta"
        :key="meta.id"
      >
        <Meta
          :id="meta.id"
          :property="meta.property"
          :content="meta.content"
        />
      </template>
    </Head>
    <Body>
      <client-only>
        <navbar />
      </client-only>
      <slot />
      <divider />
      <page-footer />
    </Body>
  </Html>
</template>
<script lang="ts" setup>
const head = useLocaleHead({
  key: 'id',
});

onBeforeMount(() => {
  const hash = globalThis.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ block: 'start' });
      }, 1000);
    }
  }
});
</script>
