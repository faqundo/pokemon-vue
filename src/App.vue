<template>
  <div id="app">
    <Welcome msg="Welcome to Pokédex" />
  </div>
</template>

<script>
/* import HelloWorld from './components/HelloWorld.vue' */
import Welcome from "./components/Welcome.vue";

export default {
  name: "App",
  components: {
    Welcome,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap');

#app {
  background: #f9f9f9;
}
body {
  margin: 0;
  background: #f9f9f9;
}
</style>
