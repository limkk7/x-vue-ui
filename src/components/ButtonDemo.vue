<script lang="ts" setup>
  const X = new Array(100).fill(1)
</script>
<template>
  <div>
    <p v-for="(v, i) in X" :key="i">
      Button文档{{i}}
    </p>
  </div>
</template>
