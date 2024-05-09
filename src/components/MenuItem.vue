<template>
  <!-- 先渲染父層，有子層的話繼續往下遞迴渲染子層，直到沒有子層 -->
  <li v-for="item in menuList" :key="item.key" :class="item.isExpand ? 'text-yellow-300 bg-gray-500' : 'text-white'">
    <button class="text-lg" type="button" @click="toggleMenu(item.key)">
      {{ item.text }}
    </button>
    <ul v-if="item.children" v-show="item.isExpand" class="list-none pl-4">
      <MenuItem :menuList="item.children" />
    </ul>
  </li>
</template>

<script setup>
import MenuItem from '@/components/MenuItem.vue';

const props = defineProps({
  menuList: { type: Object, default: () => {} },
});

/**
 * html 已經遞迴渲染，只需要專注處理元件是否展開
 * @func 展開方法
 * @param {string} 每個節點的唯一值 (key)
 * */
function toggleMenu(key) {
  localStorage.setItem('sidebarKey', key);
  props.menuList.forEach((childNode) => {
    if (childNode.key == key) {
      childNode.isExpand = true;
    } else {
      childNode.isExpand = false;
    }
  });
}
</script>

