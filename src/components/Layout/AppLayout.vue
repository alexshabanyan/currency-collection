<template>
  <a-layout>
    <Sider />
    <a-layout>
      <Header />
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Sider from './Sider/Sider.vue';
import Header from './Header/Header.vue';

const collapsed = ref<boolean>(false);
  const selectedKeys = ref<string[]>(['1']);

</script>


