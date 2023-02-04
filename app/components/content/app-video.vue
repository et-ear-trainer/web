<template>
  <iframe
    width="560"
    height="315"
    :src="url"
    title="YouTube video Player"
    frameborder="0"
    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
    allowfullscreen
  />
</template>
<script lang="ts" setup>
defineProps<{
  url: string
}>();
</script>
