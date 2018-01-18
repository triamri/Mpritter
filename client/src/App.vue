<template>
  <div id="app">
    <the-navbar></the-navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import TheNavbar from '@/components/navbar/TheNavbar'
export default {
  name: 'App',
  components: {
    TheNavbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
