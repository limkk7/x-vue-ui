<template>
  <button :class="{checked:value}" @click="toggle" >
    <span></span>
  </button>
</template>
<script setup lang="ts">
import { ref } from "@vue/reactivity";
const checked = ref(false)
const props = defineProps({
  value: Boolean,
})
const emit = defineEmits(['update:value'])
const toggle = () => {
  emit('update:value', !props.value)
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: calc($h - 4px);
button {
  height: $h; width: ($h * 2); border: none; background: #bfbfbf; border-radius: calc($h/2); position: relative;
  > span {
    position: absolute; top: 2px; left: 2px; height: $h2; width: $h2; background: white; border-radius: calc($h2 / 2); transition: all 250ms;
  }
  &.checked { background: #1890ff;
    > span { left: calc((100% - #{$h2}) - 2px); }
  }

  &:focus { outline: none; }
  &:active {
    > span { width: calc($h2 + 4px); }
  }
  &.checked:active {
    > span { width: calc($h2 + 4px); margin-left: -4px; }
  }
}
</style>

