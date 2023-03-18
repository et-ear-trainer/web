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
        :end-val="400"
        :duration="3"
      >
        <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
        <template #suffix>+</template>
      </count-up>
      <p>Downloads</p>
      <div class="icon">
        <base-icon
          name="download"
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
      <p>Exercises</p>
      <div class="icon">
        <base-icon
       
          name="download"
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
      <p>Achievments</p>
      <div class="icon">
        <base-icon
        
          name="download"
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
        @apply text-5xl ml-1 text-et-blue-light;
      }

      p {
        @apply my-2;
      }

      .icon {
        :deep(span) {
          @apply text-gray-400;
        }
      }
    } 
  }
</style>