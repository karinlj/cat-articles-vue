<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Arial, Helvetica, sans-serif;
  ul {
    list-style: none;
  }
  h1 {
    font-size: 2.5rem;
  }
  margin-bottom: 10rem;
}
</style>
