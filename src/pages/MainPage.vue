<template>
  <div v-if="$route.name === RouteNames.MainPage">
    Главная страница
  </div>
  <router-view v-else></router-view>
</template>

<script setup lang="ts">
import { RouteNames } from '../router';

</script>
