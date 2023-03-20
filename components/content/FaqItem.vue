<template>
  <div class="container">
    <div
      class="title"
      @click="toggle"
    >
      <base-icon
        name="expand_more"
        :size="36"
        class="icon"
        :class="{open}"
      />
      <slot name="title" />
    </div>
    <div
      class="text"
      :class="{open}"
    >
      <slot name="text" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  const open = ref(false);

  const toggle = () => {
    open.value = !open.value;
  };

</script>
<style lang="scss" scoped>
.container {
  @apply mb-5;
}

.title {
  @apply font-bold text-lg flex items-center cursor-pointer;
}

.icon {
  @apply transition-all;
  &.open {
    @apply rotate-180;
  }
}

.text {
  @apply ml-9 max-h-0 overflow-hidden transition-all duration-200;
  
  &.open {
    @apply max-h-[1000px];
  }
}
</style>