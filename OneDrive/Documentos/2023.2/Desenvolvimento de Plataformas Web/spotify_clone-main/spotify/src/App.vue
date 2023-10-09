<template>
  <div class="flex flex-col min-h-screen">
    <NavBar/>
    <RouterView />
    <Footer/>
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import NavBar from './components/NavBar.vue'
  import Footer from './components/Footer.vue'
</script>

<style lang="scss" scoped>

</style>
