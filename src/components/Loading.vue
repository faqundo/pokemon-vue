<template>
  <div class="welcome">
    <img
      id="loading"
      alt="Welcome pikachu logo"
      class="text-light loading-image"
      src="../assets/Loader.png"
    />
  </div>
</template>

<script>
export default {
  name: "Loading",
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

#loading {
  border-radius: 100%;
  display: inline-block;
  vertical-align: -0.125em;
  background-color: currentColor;
  -webkit-animation: 1s linear infinite spinner-grow;
  animation: 1s linear infinite spinner-grow;
  opacity: 0.5
}
</style>
