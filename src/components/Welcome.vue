<template>
  <div class="welcome">
    <img alt="Welcome pikachu logo" src="../assets/welcome.png" />
    <h1 class="title">{{ msg }}</h1>
    <div class="div-subtitle">
      <p class="subtitle">
        The digital encyclopedia created by Professor Oak is an invaluable tool
        to Trainers in the Pokémon world.
      </p>
    </div>
    <button class="button-start">
      <div>Get started</div>
    </button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
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
  height: 54px;
  width: 500px;

  font-family: Lato;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;

  /* or 27px */
  text-align: center;

  color: #5e5e5e;
  margin-bottom: 30px;
}

.button-start {
  border: none;
  flex-direction: row;
  padding: 11px 20px;

  width: 131px;
  height: 44px;

  background: #f22539;
  border-radius: 60px;
}

.button-start > div {
  width: 91px;
  height: 22px;

  font-family: Lato;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  color: #ffffff;

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0;
}
</style>
