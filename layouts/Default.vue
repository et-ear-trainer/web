<template>
  <div>
    <Html
      :lang="head.htmlAttrs.lang"
      :dir="head.htmlAttrs.dir"
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
          <Navbar />
        </client-only>
        <slot />
        <divider />
        <page-footer />
      </Body>
    </Html>
  </div>
</template>
<script lang="ts" setup>
  const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
  });
</script>