<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <transition
      name="fade"
      mode="out-in"
    >
      <image-detail v-if="isImageOpen" />
    </transition>
  </div>
</template>
<script lang="ts" setup>
  const { isImageOpen } = useImages();
</script>
