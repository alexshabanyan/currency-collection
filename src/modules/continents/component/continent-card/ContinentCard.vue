<template>
  <a-card hoverable>
    <a-typography-title :level="4">{{ continent.name }}</a-typography-title>
  </a-card>
</template>

<script setup lang="ts">
import { ContinentInfo } from '../../../../types/continents/types';

const props = defineProps<{ continent: ContinentInfo }>();

</script>