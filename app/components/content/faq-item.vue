<template>
  <div
    ref="faq"
    class="container faq"
  >
    <client-only>
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
        <span>{{ faqNumber }}.
          <slot
            name="title"
            mdc-unwrap="p"
          /></span>
      </div>
      <div
        class="text"
        :class="{open}"
      >
        <slot name="text" />
      </div>
    </client-only>
  </div>
</template>
<script lang="ts" setup>
const open = ref(false);

const toggle = () => {
  open.value = !open.value;
};

const faq = ref<HTMLElement>();

const faqNumber = computed(() => {
  if (import.meta.client && faq.value) {
    const children = Array.prototype.slice.call(document.querySelectorAll('.faq')) as HTMLElement[];
    return children.indexOf(faq.value) + 1;
  }
  return 0;
});
</script>
<style lang="scss" scoped>
.container {
  @apply mb-5;
}

.title {
  @apply font-bold text-lg flex items-center cursor-pointer text-left;
}

.icon {
  @apply transition-all rotate-180 mb-auto;
  &.open {
    @apply rotate-0;
  }
}

.text {
  @apply ml-9 max-h-0 overflow-hidden transition-all duration-200 text-left;

  &.open {
    @apply max-h-[1000px];
  }
}
</style>
