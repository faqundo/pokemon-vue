
<template>
  <div>
    <span class="material-icons search">search</span>
    <input type="text" class="input" placeholder="Search" />

    <!-- ERROR
    <h1 class="title">Uh-oh!</h1>
    <div class="div-subtitle">
      <p class="subtitle">
        You look lost on your journey!
      </p>
    </div>
    <router-link to="/about">
        <Button msg="Go back home"/>
    </router-link> -->
    <div class="body-search"></div>
    <div>
      <div class="footer">
        <ButtonSearch icon="format_list_bulleted" msg="Alls" url="/Casa"/>
        <div class="space"></div>
        <ButtonSearch icon="star" msg="Favorites" url="/About" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonSearch from "@/components/ButtonSearch.vue";

export default {
  name: "Search",
  components: {
    ButtonSearch,
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
.container {
  position: relative;
  width: 1152px;
  height: 700px;

  background: #f9f9f9;
}
.search {
  position: absolute;
  font-size: 20px;
  color: #bfbfbf;
  padding: 14px;
}
.input {
  padding-left: 43px;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 570px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 600;
}
.body-search {
  position: relative;
}

.footer {
  display: flex;
  padding: 18px 0px;
  width: 100vw;
  position: absolute;
  justify-content: center;
  bottom: 0;
  background: #ffffff;
  box-shadow: 0px -5px 4px rgba(0, 0, 0, 0.05);
}
.space {
  margin: 0 25px;
}
</style>
