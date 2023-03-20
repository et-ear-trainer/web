<template>
  <div class="wrapper">
    <a
      :id="sectionAnchor"
      class="anchor"
    />
    <slot />
  </div>
</template>
<script lang="ts" setup>
  defineProps<{
    sectionAnchor: string
  }>();
</script>
<style lang="scss" scoped>
  .wrapper {
    @apply
      mx-8
      sm:mx-10
      md:mx-32
      lg:mx-64
      my-20 
      text-justify
    ;
  }
  .anchor {
    @apply block relative -top-20 invisible;
  }
</style>