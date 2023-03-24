<template>
  <div
    class="container"
  >
    <base-icon
      name="close"
      :size="36"
      class="close-icon"
      @click="closeImage"
    />
    <swiper
      :slides-per-view="1"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :keyboard="true"
      :modules="[Pagination, Navigation, Keyboard]"
      effect="slide"
      :initial-slide="currentImage"
    >
      <swiper-slide
        v-for="image of images"
        :key="image.alt"
        @click="handleContainerClick"
      >
        <img
          :src="image.fullPath"
          :alt="image.alt"
          class="select-none"
        >
      </swiper-slide>
      ...
    </swiper>
  </div>
</template>
<script lang="ts" setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Navigation, Keyboard } from 'swiper';
  import { useMagicKeys } from '@vueuse/core';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css';

  const { images, currentImage, closeImage } = useImages();

  const handleContainerClick = (event: any) => {
    if (event.target === event.currentTarget) {
      closeImage();
    }
  };

  const keys = useMagicKeys();

  whenever(keys.escape, () => {
    closeImage();
  });
</script>
<style lang="scss" scoped>
.container {
  @apply
    z-50
    fixed
    top-0
    bottom-0
    left-0
    right-0
    bg-black
    bg-opacity-90
  ;

  max-width: 100vw !important;
  max-height: 100vh !important;

  img {
    @apply h-screen mx-auto;
  }

  .close-icon {
    @apply absolute top-5 right-5 cursor-pointer z-[55] text-white;
  }
}
</style>