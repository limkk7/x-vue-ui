<script setup>
import Topnav from '../components/Topnav.vue'
</script>

<template>
  <div>
    <Topnav />
    <div class="banner">
      <h1>X-Ui</h1>
      <p class="actions">
        <a href="https://github.com/versionlin7/x-vue-ui">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: calc($h/2);
      padding: 0 8px;
    }
  }
}
</style>
