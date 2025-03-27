<template>
  <a-layout-sider v-model:collapsed="layoutStore.menuCollapsedValue" :trigger="null" collapsible>
    <Menu />
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLayoutStore } from '../../../store/layout-store';
import { UserOutlined, VideoCameraOutlined, UploadOutlined, CompassOutlined } from '@ant-design/icons-vue';
import Menu from '../../Menu/Menu.vue';

const layoutStore = useLayoutStore();

const selectedKeys = ref<string[]>(['1']);

</script>


