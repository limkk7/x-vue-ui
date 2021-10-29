<script>
export default {
  data() {
    const VV = new Array(100).fill(1)
    return {VV}
  }
}
</script>
<template>
  <div>
    <p v-for="(v, i) in VV" :key="i">
      Switch文档{{i}}
    </p>
  </div>
</template>
