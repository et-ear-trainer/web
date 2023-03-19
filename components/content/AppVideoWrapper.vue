<template>
  <div class="video-wrapper">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.video-wrapper {
  @apply flex justify-between flex-wrap gap-10;
}
</style>