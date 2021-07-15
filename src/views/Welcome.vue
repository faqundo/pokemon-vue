<template>
  <div class="welcome">
    <img alt="Welcome pikachu logo" src="../assets/welcome.png" />
    <h1 class="title">Welcome to Pokédex</h1>
    <div class="div-subtitle">
      <p class="subtitle">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
    </div>
    <router-link to="/about">
      <Button msg="Get started"/>
    </router-link>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: "Welcome",
  components: {
    Button
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
body {
  margin: 0;
  text-align: center;
  background: #f9f9f9;
  position: relative;
}
img {
  position: relative;
  width: 325px;
  height: 288px;
  margin-bottom: 54px;
}
.welcome {
  text-align: center;
}
.title {
  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  align-items: center;
  text-align: center;

  color: #353535;
  margin-bottom: 35px;
}

.subtitle {
  margin: auto;
  width: 500px;

  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;

  /* or 27px */
  text-align: center;

  color: #5e5e5e;
  margin-bottom: 30px;
}

</style>
