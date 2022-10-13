<template>
  <div class="nav-bar-item">
    <div class="material-icons text-3xl">{{ icon }}</div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  defineProps({
    icon: {
      type: String,
      required: true,
    }
  })
</script>

<style scoped>

</style>
