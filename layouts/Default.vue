<template>
  <div>
    <client-only>
      <Navbar />
    </client-only>
    <slot />
    <divider />
    <page-footer />
  </div>
</template>