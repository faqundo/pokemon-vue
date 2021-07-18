<template>
  <v-app>
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

