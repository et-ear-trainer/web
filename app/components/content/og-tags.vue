<template>
  <div />
</template>
<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
}>();

const siteConfig = useSiteConfig();

useSeoMeta({
  title: props.title,
  ogTitle: props.title,
  twitterTitle: props.title,
  description: props.description,
  ogDescription: props.description,
  twitterDescription: props.description,
  twitterCard: 'summary_large_image',
  ogType: 'website',
  ogSiteName: 'ET - Ear Trainer',
  ogUrl: siteConfig.url,
  ogImage: `${siteConfig.url}/og_image.png`,
  ogImageAlt: 'ET - Ear Trainer',
});
</script>
