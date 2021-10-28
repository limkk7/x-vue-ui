<script lang="ts" setup>
import { ref, provide } from 'vue'
const menuVisible = ref(true)
provide('menuVisible', menuVisible)
</script>

<template>
  <router-view />
</template>


