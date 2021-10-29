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
const emit = defineEmits(['input'])

const toggle = () => {
  emit('input', !props.value)
}
</script>

<style lang="scss" scoped>
  $h: 22px;
  $h2: calc($h - 4px);
  button{
    height: $h;
    width: calc($h*2);
    border: none;
    background: grey;
    border-radius: calc($h/2);
    position: relative;
  }
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background:white;
    border-radius: calc($h2 / 2);
    transition: left 250ms;
  } 
  button.checked > span{
    left: calc((100% - #{$h2}) - 2px);
  }
  button.checked{
    background: green;
  }
  button:focus{
    outline:none;
  }
</style>

