<template>
  <nuxt-link
    :to="props.link"
    target="_blank"
    class="button"
  >
    <base-icon name="feed" />
    <p>{{ $t('press.read-article') }}</p>
  </nuxt-link>
</template>
<script lang="ts" setup>
const props = defineProps<{
  link: string
}>();
</script>
<style lang="scss" scoped>
.button {
  @apply
    w-48
    flex
    gap-2
    border-[3px]
    rounded-lg
    px-4
    py-2
    my-4
    bg-white
    border-gray-300
    transition-all
  ;

  &:hover {
    @apply border-et-blue-light;
  }
}
</style>
