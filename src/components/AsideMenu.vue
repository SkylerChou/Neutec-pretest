<template>
  <ul class="p-4 fixed top-0 right-0 backdrop-opacity-60 backdrop-invert bg-black/70 w-48 min-h-dvh">
    <MenuItem :menuList="menuList" />
  </ul>
</template>

<script setup>
import MenuItem from '@/components/MenuItem.vue';

defineProps({
  menuList: { type: Array, default: () => [] },
});
</script>


