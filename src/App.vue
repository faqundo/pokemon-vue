<template>
  <v-app>
    <router-link to="/">Home</router-link>
    <router-link to="/loading">Loading</router-link>
    <router-link to="/search">Search</router-link>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background: #f9f9f9;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  background: #f9f9f9;
}
</style>

