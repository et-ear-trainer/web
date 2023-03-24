<template>
  <div class="footer-wrapper">
    <div class="links">
      <base-link to="mailto:mail@danielschenker.ch">
        {{ $t('footer.send-email') }}
      </base-link>
      <base-link
        to="privacypolicy.html"
        target="_blank"
      >
        {{ $t('footer.privacy-policy-app') }}
      </base-link>
      <base-link
        to="https://eliaschenker.com/privacypolicy.html"
        target="_blank"
      >
        {{ $t('footer.privacy-policy-website') }}
      </base-link>
      <base-link
        to="https://eliaschenker.com/impressum.html"
        target="_blank"
      >
        {{ $t('footer.imprint') }}
      </base-link>
    </div>
    <p>&#169; Copyright {{ year }}</p>
  </div>
</template>
<script lang="ts" setup>
const year = computed(() => new Date().getFullYear());
</script>
<style lang="scss" scoped>
.footer-wrapper {
  @apply w-full text-center mb-10;

  .links {
    @apply flex mx-auto justify-center gap-5 sm:gap-10 mb-10 flex-col sm:flex-row;
  }
}
</style>