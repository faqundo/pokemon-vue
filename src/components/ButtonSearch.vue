<template>
  <div>
    <router-link :to="{ path: url }">
      <button class="button-start">
        <span class="material-icons">{{ icon ? icon : "" }}</span>
        <div class="footer-btn">{{ msg }}</div>
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ButtonSearch",
  props: {
    msg: String,
    url: String,
    icon: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

a {
  text-decoration: none;
}
.button-start {
  cursor: pointer;
  border: none;
  flex-direction: row;
  padding: 11px 20px;
  background: #f22539;
  border-radius: 60px;
  display: flex;
  width: 275px;
  justify-content: center;
}

.button-start:hover {
  background-color: #e60b21;
}

.button-start > div {
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
.material-icons {
  font-size: 22px;
  padding: 0 6px;
}

</style>


