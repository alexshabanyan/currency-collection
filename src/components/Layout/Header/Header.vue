<template>
    <a-layout-header style="background: #fff; padding: 0">
      <menu-unfold-outlined
        v-if="layoutStore.menuCollapsed"
        class="trigger"
        @click="changeMenuCollapsed"
      />
      <menu-fold-outlined v-else class="trigger" @click="changeMenuCollapsed" />
    </a-layout-header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { useLayoutStore } from '../../../store/layout-store';

const layoutStore = useLayoutStore();

const changeMenuCollapsed = () => {
  layoutStore.setMenuCollapsed(!layoutStore.menuCollapsedValue);
}

</script>


