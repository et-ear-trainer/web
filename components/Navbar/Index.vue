<template>
  <div
    class="navbar-wrapper"
    :class="{'navbar-top': arrivedState.top}"
  >
    <div
      class="navbar"
    >
      <div class="left">
        <img
          class="logo"
          src="~/assets/img/et-logo.png"
        >
      </div>
      <div class="right">
        <NavbarItems />
      </div>
    </div>
    <div class="navbar-border" />
  </div>
</template>
<script lang=ts setup>
  import { useScroll } from '@vueuse/core'; 
  const { arrivedState } = useScroll(window);
    
</script>
<style lang="scss" scoped>
  .navbar-wrapper {
    @apply fixed w-full h-14;
    .navbar {
      @apply 
        transition-all
        duration-300

        w-full
        h-full

        flex
        justify-between
        items-center

      bg-white;
      .left {
        .logo {
          @apply h-10 mx-3;
        }
      }

      .right {
        @apply h-full flex;

        :deep(.item) {
          @apply px-5 h-full transition-all cursor-pointer hover:bg-gray-300 flex items-center;
        }
      }
    }

    &.navbar-top {
      .navbar {
        @apply bg-black text-white;
      }
    
      .navbar-border {
        @apply opacity-0;
      }

      .item {
        @apply hover:bg-gray-700;
      }
    }

    .navbar-border {
      @apply transition-opacity duration-300 h-[2px] bg-gradient-to-r from-et-blue-light to-et-blue-dark;
      background-size: 200% 200%;
      animation: border-animation 10s ease infinite;
    }

    @keyframes border-animation {
      0% {
		    background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
</style>