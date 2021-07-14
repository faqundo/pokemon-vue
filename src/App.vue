<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/Loading">Loading</router-link> |
      <router-link to="/Search">Search</router-link> |
    </div>
    <router-view/>
  </div>
</template>

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
/* 
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
