import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar-store', () => {
  const sidebarList = ref([]);

  function setSideBarList(menuList) {
    sidebarList.value = menuList;
  }

  return { sidebarList, setSideBarList };
});
