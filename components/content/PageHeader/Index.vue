<template>
  <div class="header-wrapper">
    <div class="header">
      <h1>ET - Ear Trainer</h1>
      <img
        class="logo"
        src="~/assets/img/et-logo.png"
      >
      <div class="download-buttons">
        <a
          href="https://apps.apple.com/app/et-ear-trainer/id1580200913"
          target="_blank"
        >
          <img
            src="~/assets/img/appstorebtn.png"
          >
        </a>
        <a
          href="https://apps.apple.com/app/et-ear-trainer-pro/id1617459432"
          target="_blank"
        >
          <img
            src="~/assets/img/macappstorebtn.svg"
          >
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.DesCom.ETEarTrainer"
          target="_blank"
        >
          <img
            src="~/assets/img/playstorebtn.png"
          >
        </a>
      </div>
    </div>
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
        @apply h-52 w-52;
      }

      .download-buttons {
        @apply flex gap-5;

        a {
          @apply h-14;

          img {
            @apply h-full;
          }
        }
      }
    }

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
  }
</style>