<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
const routerList = ref([
  {
    name: 'MOVIE',
    path: '/movie',
  },
  {
    name: 'DRAMA',
    path: '/drama',
  },
]);
</script>

<template>
  <header id="Header">
    <RouterLink to="/" class="main">HOME</RouterLink>
    <nav class="navigation">
      <RouterLink
        :to="items.path"
        :key="index"
        v-for="(items, index) in routerList"
      >
        {{ items.name }}
      </RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
#Header {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  box-sizing: border-box;
  .main {
    font-size: 24px;
    font-weight: 600;
  }
}
</style>
