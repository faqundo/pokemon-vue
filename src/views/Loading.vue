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
  name: "Loader",
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.loading-image {
  margin-top: 200px;
}

#loading {
  display: inline-block;
  vertical-align: -0.125em;
  background-color: currentColor;
  -webkit-animation: 1s linear infinite spinner-grow;
  animation: 1s linear infinite spinner-grow;
}
</style>
