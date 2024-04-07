<template>
  <ul class="p-4 fixed top-0 right-[-1px] bg-[#141414]/90 w-[50%] min-h-dvh">
    <MenuItem :menuList="menuList" />
  </ul>
</template>

<script setup>
import MenuItem from '@/components/MenuItem.vue';

defineProps({
  menuList: { type: Array, default: () => [] },
});
</script>


