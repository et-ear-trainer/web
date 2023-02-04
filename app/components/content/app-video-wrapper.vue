<template>
  <div class="video-wrapper">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.video-wrapper {
  @apply flex flex-wrap gap-10 lg:w-[75%];
}
</style>
