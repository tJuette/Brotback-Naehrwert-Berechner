<template>
  <div>
    <NavBarItem
      v-for="item in navItems"
      :key="item.path"
      :icon="item.icon"
      @click="$router.push(item.path)"
    />
  </div>
</template>

<script setup>
 import navItems from '/src/data/view/navItems';
 import NavBarItem from '/src/components/atoms/NavBarItem';
</script>

<style scoped>

</style>
