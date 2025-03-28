<template>
  <div v-if="$route.name === ContinentRouteNames.Continents">
    <a-row v-if="continents" :gutter="[24, 24]">
      <a-col :span="6" v-for="continent in continents" :key="continent.continent">
        <ContinentCard :continent="continent" @click="handleContinent(continent)" />
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
import router from '../../router';

const continents = ref<ContinentInfo[] | null>(null);

const handleContinent = (continentInfo: ContinentInfo) => {
  const { continent, routeName } = continentInfo;
  router.push({
    name: routeName,
    params: {
      continentName: continent,
    }
  })
}

onMounted(() => {
  continents.value = continentsInfo();
})
</script>

<style scoped>

</style>