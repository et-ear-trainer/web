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

  const { arrivedState } = useScroll(window);
</script>