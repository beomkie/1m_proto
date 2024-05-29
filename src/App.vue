<template>
  <div id="app">
    <div class="Navbar-style">
      <navBar />
    </div>
    <div class="view-contents">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    navBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b0b0b;
  min-height: 100vh;
  background-color: #F5F5F7;
}
body {
  background-color: #F5F5F7;
}
.view-contents {
  flex: 1;
}
</style>
