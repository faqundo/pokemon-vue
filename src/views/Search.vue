
<template>
  <div>
    <span class="material-icons search">search</span>
    <input type="text" class="input" placeholder="Search" v-model="inputSearch"  @change="handleSearch" @keyup.enter="handleSearch"/><!-- @input="handleSearch()" v-on:keyup.enter="handleSearch" -->

    <div class="body-search">
      <v-list-item v-for="(item, i) in pokemonList" :key="i">
        <v-card elevation="2" tile class="card-element">
          <v-card-text>
            {{ item.name }}
          </v-card-text>
        </v-card>
      </v-list-item>
    </div>
    <div>
      <div class="footer">
        <a data-bs-toggle="modal" data-bs-target="#exampleModal">
          <span class="material-icons search">search</span>
          <span>test</span>
        </a>
        <ButtonSearch
          icon="format_list_bulleted"
          msg="All"
          url="/Casa"
          @click="search()"
        />
        <div class="space"></div>
        <ButtonSearch 
          icon="star" 
          msg="Favorites" 
          url="/About" 
        />
      </div>
    </div>
  <!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>

</template>

<script>
import ButtonSearch from "@/components/ButtonSearch.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Search",
  components: {
    ButtonSearch,
  },
  created() {
    const thisIns = this;

    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        /* alert(JSON.stringify(response)) */
        thisIns.pokemonList = response.data.results;
      })
      .catch((error) => {
        console.log("ERROR,", error);
      });

    this.isMounted = true;
  },

  data() {
    return {
      pokemonList: [],
      model: 1,
      inputSearch:''
    };
  },
  methods: {
    test() {
      alert(JSON.stringify(this.pokemonList));
    },
    create() {
      this.$router.push("/admin/grantee_cohort/create").catch(() => {});
    },
    edit(id) {
      this.$router.push("/admin/grantee_cohort/edit/" + id).catch(() => {});
    },
    handleSearch() {
      alert(JSON.stringify(this.inputSearch));
      this.currentTerm = 1
      this.currentPage = 1;

      this.getData();
    },
    confirmRemove(id, i) {
      Swal.fire({
        title: `Are you sure you want to delete?`,
        text: `You can´t undo this action.`,
        icon: "warning",
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        showCancelButton: true,
      }).then((result) => {
        if (result.value) {
          this.remove(id, i);
        }
      });
    },
    remove(id, i) {
      axios
        .delete(`/api/grantee_cohort/${id}`, this.granteeCohort)
        .then((res) => {
          if (res.status === 200) {
            //toastr.success('Faq saved successfully', 'Success');
            this.granteeCohorts.splice(i, 1);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
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
  padding: 20px;
}
.card-element > div {
  padding: 0;
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
