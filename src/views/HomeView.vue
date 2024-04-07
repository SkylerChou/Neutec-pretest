<template>
  <div class="min-h-dvh flex justify-center items-center">
    <div class="container grid grid-rows-3 grid-cols-3 gap-4 p-4 overflow-hidden">
      <div class="relative item h-[100px] border-2 border-black bg-radial-gradient before:content-[''] before:">
        <Ball class="z-10 absolute top-0 left-0 bottom-0 right-0 m-auto animate-[slideInLeft_1s_infinite]" />
      </div>
      <div class="item h-[100px] border-2 border-black bg-radial-gradient"></div>
      <div
        class="item h-[100px] border-2 border-black bg-radial-gradient relative before:content-[''] before:absolute before:w-full before:h-full before:bg-white before:bg-opacity-30 before:animate-[blink_1s_infinite]"
      >
        <Ball class="z-10 absolute top-0 left-0 bottom-0 right-0 m-auto animate-[slideInLeft_1s_infinite]" />
      </div>
      <div class="relative item h-[100px] border-2 border-black bg-radial-gradient"></div>
      <div
        class="item h-[100px] border-2 border-black bg-radial-gradient relative before:content-[''] before:absolute before:w-full before:h-full before:bg-white before:bg-opacity-30 before:animate-[blink_1s_infinite]"
      ></div>
      <div class="item h-[100px] border-2 border-black bg-radial-gradient"></div>
      <div class="relative item h-[100px] border-2 border-black bg-radial-gradient">
        <Ball class="z-10 absolute top-0 left-0 bottom-0 right-0 m-auto animate-[slideInLeft_1s_infinite]" />
      </div>
      <div class="item h-[100px] border-2 border-black bg-radial-gradient"></div>
      <div
        class="item h-[100px] border-2 border-black bg-radial-gradient relative before:content-[''] before:absolute before:w-full before:h-full before:bg-white before:bg-opacity-30 before:animate-[blink_1s_infinite]"
      >
        <Ball class="z-10 absolute top-0 left-0 bottom-0 right-0 m-auto animate-[slideInLeft_1s_infinite]" />
      </div>
    </div>
  </div>

  <div
    :style="{ transform: 'translate(' + xPos + 'px, ' + yPos + 'px)' }"
    class="w-[30px] h-[30px] bg-[#A5F12B] rounded-full animated-element"
  >
    <!-- 內容在這裡 -->
  </div>
  <div @click="moveElement(100, 200)">Move</div>
</template>

<script setup>
import Ball from '@/components/Ball.vue';
</script>

<script>
export default {
  data() {
    return {
      xPos: 0, // 初始X座標
      yPos: 0, // 初始Y座標
      animationDuration: '1s', // 動畫持續時間
    };
  },
  methods: {
    moveElement(x, y) {
      this.xPos = x;
      this.yPos = y;
    },
  },
  mounted() {
    // 在此你可以添加初始動畫或其他初始化邏輯
  },
};
</script>

<style scoped>
.animated-element {
  transition: transform 1s ease; /* 定義動畫過渡效果 */
}
</style>