<template>
  <header class="fixed top-0 w-full flex justify-end bg-white p-2">
    <MenuBtn @click="controSideMenu" />
  </header>

  <Transition
    enter-active-class="transition-all ease duration-300"
    leave-active-class="transition-all duration-300"
    enter-from-class="translate-x-full"
    leave-to-class="translate-x-full"
  >
    <AsideMenu :menuList="menuList" v-show="isOpen" class="z-20" />
  </Transition>

  <main class="min-h-dvh" @click="closeSideMenu">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import MenuBtn from '@/components/MenuBtn.vue';
import AsideMenu from '@/components/AsideMenu.vue';
import { ref } from 'vue';
import { MenuTreeList } from '@/mock/data';

/** @const {array} 側邊欄頁面清單 */
const menuList = ref(MenuTreeList);

/** @const {boolean} 是否開啟側邊欄 */
const isOpen = ref(false);

/** @func 控制側邊欄方法 */
function controSideMenu() {
  isOpen.value = !isOpen.value;
}

/** @func 關閉側邊欄 */
function closeSideMenu() {
  isOpen.value = false;
}
</script>

<style scoped></style>
