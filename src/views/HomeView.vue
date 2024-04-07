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
</template>

<script setup>
import Ball from '@/components/Ball.vue';
</script>


<style scoped>
</style>