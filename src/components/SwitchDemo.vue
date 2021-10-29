<script setup>
import { ref } from '@vue/reactivity'
import Switch from '../lib/Switch.vue'
  const bool = ref(true)
</script>
<template>
  <div>
    <Switch v-model:value="bool"/>
  </div>
</template>
