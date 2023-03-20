<template>
  <div class="container">
    <img
      v-for="(image, index) of images"
      :key="image.alt"
      :src="image.thumbnailPath"
      :alt="image.alt"
      @click="openImage(index)"
    >
  </div>
</template>
<script lang="ts" setup>
  const { images, openImage } = useImages();
</script>
<style lang="scss" scoped>
.container {
  @apply flex flex-wrap justify-between items-center;

  img {
    @apply cursor-pointer mx-auto md:mx-0;
  }
}
</style>