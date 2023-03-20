<template>
  <div
    class="stats-wrapper"
  >
    <div
      ref="startTarget"
      class="stat"
    >
      <count-up
        ref="counter1"
        :start-val="0"
        :end-val="1000"
        :duration="3"
      >
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        <template #suffix>+</template>
      </count-up>
      <p> {{ $t('stats.downloads') }} </p>
      <div class="icon">
        <base-icon
          name="download"
          :size="36"
        />
      </div>
    </div>
    <div class="stat">
      <count-up
        ref="counter2"
        :start-val="0"
        :end-val="30"
        :duration="3"
      />
      <p> {{ $t('stats.exercises') }} </p>
      <div class="icon">
        <base-icon  
          name="mic"
          :size="36"
        />
      </div>
    </div>
    <div class="stat">
      <count-up
        ref="counter3"
        :start-val="0"
        :end-val="190"
        :duration="3"
      />
      <p>{{ $t('stats.achievements') }}</p>
      <div class="icon">
        <base-icon
          name="trophy"
          :size="36"
        />
      </div>  
    </div>
  </div>
</template>
<script lang="ts" setup>
import CountUp from 'vue-countup-v3';

const startTarget = ref(null);

const targetIsVisible = useElementVisibility(startTarget);

const counter1 = ref(null);
const counter2 = ref(null);
const counter3 = ref(null);

watch(targetIsVisible, (to) => {
  if(to) {
    counter1.value.restart();
    counter2.value.restart();
    counter3.value.restart();
  }
});
</script>
<style lang="scss" scoped>
  .stats-wrapper {
    @apply w-fit my-6 flex gap-16 mx-auto px-14;
    .stat {
      @apply text-center;
      :deep(.countup-wrap) {
        @apply
          text-7xl
          text-et-blue-light
          bg-clip-text
          text-transparent
          bg-gradient-to-br
          to-et-blue-light
          from-et-blue-dark;
      }

      p {
        @apply mt-4 mb-3 text-2xl;
      }

      .icon {
        :deep(span) {
          @apply text-gray-400;
        }

        :deep(svg) {
          @apply  fill-gray-400;
        }
      }
    } 
  }
</style>