<template>
  <div>
    <input type="text" class="input" />
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
.container {
position: relative;
width: 1152px;
height: 700px;

background: #F9F9F9;
}
.input {
  width: 570px;
  height: 50px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  border:none;
  font-size: 24px; 
  font-family: Montserrat; 
  font-weight: 500;
}
</style>
