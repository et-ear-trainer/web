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
          alt="ET - Ear Trainer Logo"
          @click="scrollToTop()"
        >
      </div>
      <div
        class="right"
        :class="{ }"
      >
        <NavbarItems />
        <div
          class="mobile-menu-toggle"
          @click="menuOpen = !menuOpen"
        >
          <base-icon
            name="menu"
            :size="28"
          />
        </div>
      </div>
    </div>
    <div
      class="mobile-menu"
      :class="{'open': menuOpen, 'arrived-top': arrivedState.top}"
      @click="menuOpen = false"
    >
      <NavbarItems />
    </div>
    <div class="navbar-border" />
  </div>
</template>
<script lang=ts setup>
  import { useScroll } from '@vueuse/core';
  const { arrivedState } = useScroll(window);

  const menuOpen = ref(false);

  const scrollToTop = () => {
    if (process.client) {
      window.scrollTo(0, 0);
    }
  };
</script>
<style lang="scss" scoped>
  .navbar-wrapper {
    @apply fixed w-full z-40;

    .mobile-menu {
      @apply
        md:hidden
        flex
        flex-col
        transition-all
        bg-white
        max-h-0
        overflow-hidden
        border-b-2
        border-transparent;

      &.open {
        @apply max-h-[1000px];

        &.arrived-top {
          @apply  border-white;
        }
      }

      &.arrived-top {
        @apply bg-black text-white;
      }

      :deep(.item) {
        @apply
          h-14
          ml-3
          flex
          items-center
          cursor-pointer;
      }
    }

    .navbar {
      @apply 
        h-14
        transition-all
        duration-300

        w-full

        flex
        justify-between
        items-center

      bg-white;


      .left {
        .logo {
          @apply h-10 mx-3 cursor-pointer;
        }
      }

      .right {
        @apply h-full flex;

        :deep(.item) {
          @apply
            hidden

            px-5
            h-full

            transition-all
            cursor-pointer
            hover:bg-gray-300

            md:flex
            items-center;
        }

        .mobile-menu-toggle {
          @apply
            md:hidden

            h-full
            mr-2
            w-9

            flex
            items-center
            justify-center
            select-none

            cursor-pointer;
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