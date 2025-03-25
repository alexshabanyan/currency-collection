<template>
  <a-layout-sider v-model:collapsed="layoutStore.menuCollapsedValue" :trigger="null" collapsible>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <compass-outlined />
        <span>Карта мира</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLayoutStore } from '../../../store/layout-store';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, CompassOutlined } from '@ant-design/icons-vue';

const layoutStore = useLayoutStore();

const selectedKeys = ref<string[]>(['1']);

</script>


