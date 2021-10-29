<script setup>
import { ref } from '@vue/reactivity'
import Switch from '../lib/Switch.vue'
  const y = ref(true)
</script>
<template>
  <div>
    <Switch :value="y" @input="y = $event" />
  </div>
</template>
