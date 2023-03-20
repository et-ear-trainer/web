<template>
  <div class="header-wrapper">
    <div class="header">
      <h1>ET - Ear Trainer</h1>
      <img
        class="logo"
        src="~/assets/img/et-logo.png"
        alt="ET - Ear Trainer Logo"
      >
      <div class="download-buttons">
        <a
          href="https://apps.apple.com/app/et-ear-trainer/id1580200913"
          target="_blank"
        >
          <img
            src="~/assets/img/appstorebtn.png"
            alt="IOS Appstore Download Button"
          >
        </a>
        <a
          href="https://apps.apple.com/app/et-ear-trainer-pro/id1617459432"
          target="_blank"
        >
          <img
            src="~/assets/img/macappstorebtn.svg"
            alt="Mac Appstore Download Button"
          >
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.DesCom.ETEarTrainer"
          target="_blank"
        >
          <img
            src="~/assets/img/playstorebtn.png"
            alt="Playstore Download Button"
          >
        </a>
      </div>
    </div>
    <h3 class="new-info">
      {{ $t('header.new-info') }}
    </h3>
    <ClientOnly>
      <scroll-explore />
    </ClientOnly>
  </div>
</template>
<style lang="scss" scoped>
  .header-wrapper {
    @apply h-screen text-white bg-black flex flex-col justify-center;
    
    .header {
      @apply flex flex-col items-center justify-center gap-16 flex-grow;

      .logo {
        @apply h-36 w-36 sm:h-52 sm:w-52;
      }

      .download-buttons {
        @apply flex gap-5 flex-col sm:flex-row items-center;

        a {
          @apply h-14;

          img {
            @apply h-full;
          }
        }
      }
    }
    
    .new-info {
      @apply w-full absolute text-center bottom-32;
    }
  }
</style>