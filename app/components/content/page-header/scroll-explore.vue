<template>
  <div
    class="scroll-explore"
    :class="{'scroll-explore-hidden': !arrivedState.top}"
  >
    <p> {{ $t("header.scroll-info") }} </p>
    <div class="icon">
      <base-icon name="expand_more" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useScroll } from '@vueuse/core';

const { arrivedState } = useScroll(document);
</script>
<style lang="scss" scoped>
.scroll-explore {
  @apply w-full flex flex-col items-center mb-5 transition-opacity;

  .icon {
    @apply mt-2;
    animation: bounce 1s infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(-12%);
      animation-timing-function: cubic-bezier(0.8,0,1,1);
    }
    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0,0,0.2,1);
    }
  }

  &-hidden {
    @apply opacity-0;
  }
}
</style>
