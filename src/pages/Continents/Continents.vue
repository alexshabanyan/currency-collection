<template>
  <div v-if="$route.name === ContinentRouteNames.Continents">
    <a-row v-if="continents" :gutter="[24, 24]">
      <a-col :span="6" v-for="continent in continents" :key="continent.continent">
        <ContinentCard :continent="continent" />
      </a-col>
    </a-row>
  </div>
  <router-view v-else></router-view>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ContinentInfo } from '../../types/continents/types';
import { continentsInfo } from '../../constants/continents/constants';
import ContinentCard from '../../modules/continents/component/continent-card/ContinentCard.vue';
import { ContinentRouteNames } from '../../router/continents';

const continents = ref<ContinentInfo[] | null>(null);

onMounted(() => {
  continents.value = continentsInfo();
})
</script>

<style scoped>

</style>