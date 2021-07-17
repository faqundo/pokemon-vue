
<template>
  <div>
    <span class="material-icons search">search</span>
    <input
      type="text"
      class="input"
      placeholder="Search"
      v-model="inputSearch"
      @change="handleSearch"
      @keyup.enter="handleSearch"
    /><!-- @input="handleSearch()" v-on:keyup.enter="handleSearch" -->

    <div class="body-search">
      <v-list-item v-for="(item, i) in pokemonList" :key="i">
        <v-card elevation="2" tile class="card-element">
          <!-- <a @click="getPokemon(item.url)"> -->
          <v-card-text class="card-item">
            <div class="card-item-text" @click="getPokemon(item.url)">
              {{
                item.name
                  ? item.name.charAt(0).toUpperCase() + item.name.slice(1)
                  : ""
              }}
            </div>
            <div class="card-item-img">
              <img
                class="favorite"
                @click="addFavorite(item)"
                :src="getImageUrl(item)"
                alt="favorite-start"
              />
            </div>
          </v-card-text>
          <!-- </a> -->
        </v-card>
      </v-list-item>
    </div>
    <div>
      <div class="footer">
        <div class="buttons-footer">
          <div @click="getAll()">
            <ButtonSearch
              icon="format_list_bulleted"
              msg="All"
              url="/Search"
            />

          </div>
          <div @click="getFavorites()">
            <ButtonSearch icon="star" msg="Favorites"  />
          </div>
        </div>
      </div>
    </div>

    <b-modal
      v-model="modalShow"
      hide-header
      hide-footer
      centered
      modal-body-class="modal"
    >
      <!--  {{JSON.stringify(pokemonItem)}} -->
      <div class="poke-modal-header">
        <img :src="image" alt="pokemon image" class="pokemon" />
      </div>
      <div class="poke-modal-body">
        <p>
          Name:
          <span>{{
            pokemonItem.name
              ? pokemonItem.name.charAt(0).toUpperCase() +
                pokemonItem.name.slice(1)
              : ""
          }}</span>
        </p>
        <p>
          Weight: <span>{{ pokemonItem ? pokemonItem.weight : "" }}</span>
        </p>
        <p>
          Height: <span>{{ pokemonItem ? pokemonItem.height : "" }}</span>
        </p>
        <p>
          Types:
          <span v-for="(item, key) of types" :key="key">
            {{
              types
                ? item.type.name.charAt(0).toUpperCase() +
                  item.type.name.slice(1)
                : ""
            }}
            <span v-if="key != Object.keys(types).length - 1">, </span>
          </span>
        </p>
      </div>
      <textarea id="textoACopiar" rows="6" cols="40">
        Texto que queremos copiar al portapapeles!
      </textarea>
      <div class="poke-modal-footer">
        <a class="btn-share" @click="copy()">
          <span>Share to my friends</span>
        </a>
        <div class="star-container">
          <span class="material-icons star">star</span>
        </div>
      </div>
    </b-modal>
    <b-modal
      v-model="modalShowLoading"
      hide-header
      hide-footer
      centered
      modal-body-class="modal-loading"
      content-class="modal-loading"
      body-class="modal-loading"
      hide
    >
      <Loading id="loadingImg" class="modal-dialog" />
    </b-modal>
  </div>
</template>

<script>
import ButtonSearch from "@/components/ButtonSearch.vue";
import Loading from "@/components/Loading.vue";
import axios from "axios";
/* import Swal from "sweetalert2"; */


export default {
  name: "Search",
  components: {
    ButtonSearch,
    Loading,
  },
  created() {
    const thisIns = this;

    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        /* alert(JSON.stringify(response)) */
        thisIns.pokemonListOriginal = response.data.results;
        thisIns.pokemonList = response.data.results;
      })
      .catch((error) => {
        console.log("ERROR,", error);
      });

    this.isMounted = true;
  },
  mounted() {
    if (localStorage.getItem('favorites')) {
      try {
        this.favorites = JSON.parse(localStorage.getItem('favorites'));
      } catch(e) {
        localStorage.removeItem('favorites');
      }
    }
  },
  
  data() {
    return {
      pokemonList: [],
      pokemonListOriginal: [],
      model: 1,
      inputSearch: "",
      modalShow: false,
      modalShowLoading: false,
      pokemonItem: [],
      favorites: [],
      types: [],
      image: "",
      res: "",
    };
  },
  
  methods: {
    getImageUrl(item){
      if(this.favorites.includes(item)){
        return require('../assets/Active.png')
      }else {
        return require('../assets/Disabled.png')
      }
    },
    saveFavorites() {
      const parsed = JSON.stringify(this.favorites);
      localStorage.setItem('favorites', parsed);
    },
    getPokemon(url) {
      const thisIns = this;
      this.modalShowLoading = !this.modalShowLoading;
      axios
        .get(url)
        .then((response) => {
          /* alert(JSON.stringify(response.data)) */
          thisIns.pokemonItem = response.data;
          thisIns.types = thisIns.pokemonItem.types;
          thisIns.image = thisIns.pokemonItem.sprites.other.dream_world.front_default;
          setTimeout(() => {
            thisIns.modalShowLoading = !thisIns.modalShowLoading;
            thisIns.modalShow = !thisIns.modalShow;
          }, 1000);
        })
        .catch((error) => {
          console.log("ERROR,", error);
        });
    },
    addFavorite(item) {
      if(this.favorites.includes(item)){
        this.removeFavorite(this.favorites,item)
        alert(JSON.stringify(this.favorites))
      }else{
        this.favorites.push(item);
        alert(JSON.stringify(this.favorites))
        this.saveFavorites()
      }
    },
    removeFavorite(array,element) {
      let index = array.indexOf(element);
      if (index !== -1) {
        this.favorites.splice(index, 1);
        this.saveFavorites()
      }
    },
    handleSearch() {
      alert(JSON.stringify(this.inputSearch));
      this.currentTerm = 1;
      this.currentPage = 1;

      this.getData();
    },
    copy() {
      var codigoACopiar = document.getElementById("textoACopiar");
      var seleccion = document.createRange();
      seleccion.selectNodeContents(codigoACopiar);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(seleccion);
      this.res = document.execCommand("copy");
      window.getSelection().removeRange(seleccion);
    },
    getFavorites() {
      this.pokemonList = this.favorites
    },
    getAll() {
      this.pokemonList = this.pokemonListOriginal
    }
  },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");

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
  margin-bottom: 25px;
}
.body-search {
  position: relative;
  display: grid;
  justify-content: center;
}

.card-element {
  background: white;
  text-align: center;
  width: 570px;
  padding: 0;
  margin: 10px 0;
  height: 60px;
  padding: 17px 20px !important;
}
.card-element > div {
  padding: 0;
}
.card-item {
  display: flex;
  justify-content: space-between;
  padding: 0;
}

.card-item-text {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #353535;
  align-items: center;
  cursor: pointer;
}
.card-item-img {
  cursor: pointer;
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
.buttons-footer {
  justify-content: space-between;
  width: 570px;
  display: flex;
}
.modal {
  padding: 0;
}
.poke-modal-header {
  position: absolute;
  left: 0;
  top: 0;
  background-image: url("../assets/pokemonBG.png");
  height: 431px;
  width: 568px;
  overflow: hidden;
  text-align: center;
  border-radius: 5px;
}
.poke-modal-header > img {
  width: 180px;
  height: 180px;
  margin-top: 13px;
}
.poke-modal-body {
  padding: 0px;
  padding-top: 231px;
  height: 506px;
}
.poke-modal-body > p {
  line-height: 27px;
  font-weight: 700;
  font-family: Lato;
  font-style: normal;
  font-size: 18px;
  border-bottom: solid 1px;
  border-color: #e8e8e8;
  margin: 10px 20px;
  padding-bottom: 10px;
}
.poke-modal-body > p > span {
  font-weight: 500;
}
.poke-modal-footer {
  display: flex;
  justify-content: space-between;
}

.btn-share {
  position: absolute;
  height: 44px !important;
  width: 195px !important;
  left: 30px;
  bottom: 29px;
  background-color: #f22539;
  border-radius: 60px;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  cursor: pointer;
}
.btn-share > span {
  color: #ffffff;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
}
.star-container {
  background: #f5f5f5;
  position: absolute;
  width: 30px;
  height: 30px;
  right: 30px;
  bottom: 35px;
  border-radius: 100%;
  text-align: center;
}
.star {
  padding-bottom: 8px;
  font-size: 26px;
  vertical-align: -webkit-baseline-middle;
  color: #eca539;
}
</style>
