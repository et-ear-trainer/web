<template>
  <div class="wrapper">
    <h2
      :id="sectionAnchor"
      class="anchor"
    >
      {{ sectionTitle }}
    </h2>
    <slot />
  </div>
</template>
<script lang="ts" setup>
  defineProps<{
    sectionAnchor: string
    sectionTitle:string
  }>();
</script>
<style lang="scss" scoped>
  .wrapper {
    @apply
      mx-8
      sm:mx-10
      md:mx-32
      lg:mx-40
      my-20 
      text-justify
    ;
  }

  .anchor {
    @apply mb-7;
    
    &:before {
      content: "";
      display: block;
      height: 100px;
      margin: -100px 0 0;
    }
  }
</style>