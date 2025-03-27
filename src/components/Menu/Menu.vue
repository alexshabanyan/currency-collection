<template>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <a-menu-item v-for="(item, index) in menuList" :key="index" @click="handleClick(item)">
      <compass-outlined />
      <span>{{ item.name }}</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { menuList, MenuListItem } from './constants';
import router from '../../router';
import { useLayoutStore } from '../../store/layout-store';

const handleClick = (item: MenuListItem) => {
  router.push({
    name: item.routeName,
  })
}
const layoutStore = useLayoutStore();

const selectedKeys = ref<string[]>(['1']);

</script>


