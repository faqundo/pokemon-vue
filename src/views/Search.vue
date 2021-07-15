
<template>
  <div>
    <span class="material-icons search">search</span>
    <input type="text" class="input" placeholder="Search" />

    <div class="body-search">
        <div v-for="(item, index) in pokemonList" :key="index">
          {{ item.name }}
        </div>
      <!-- <vs-table max-items="25" pagination :data="pokemonList">
        <template slot="thead">
          <vs-th>Name</vs-th>
          <vs-th class="w-24"></vs-th>
        </template>

        <template slot-scope="{ data }">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].name">
              {{ data[indextr].name }}
            </vs-td>
            <vs-td>
              <a @click="edit(data[indextr].id)">
                <feather-icon
                  icon="EditIcon"
                  svgClasses="h-4 w-4"
                  class="mr-2"
                />
                <span></span>
              </a>
              <a @click="confirmRemove(data[indextr].id, indextr)">
                <feather-icon
                  icon="TrashIcon"
                  svgClasses="h-4 w-4"
                  class="mr-2"
                />
                <span></span>
              </a>
            </vs-td>

            <template class="expand-user" slot="expand">
              <div class="con-expand-users w-full">
                <div class="con-btns-user flex items-center justify-between">
                  <div class="con-userx flex items-center justify-start">
                    <span>Capacities</span>
                  </div>
                  <div class="flex">
                    <vs-button
                      @click="createCapacity(data[indextr].id)"
                      type="border"
                      size="small"
                      icon-pack="feather"
                      icon="icon-plus"
                      class="mr-2"
                    ></vs-button>
                  </div>
                </div>
                <vs-list class="mt-4">
                  <vs-list-item
                    :key="indexitem"
                    v-for="(item, indexitem) in data[indextr].capacities"
                    icon-pack="feather"
                    icon="icon-octagon"
                    :title="item.name"
                  >
                    <div class="flex">
                      <a @click="editCapacity(item.id)">
                        <feather-icon
                          icon="EditIcon"
                          svgClasses="h-4 w-4"
                          class="mr-2"
                        />
                        <span></span>
                      </a>
                      <a
                        @click="
                          confirmRemoveCapacity(item.id, indextr, indexitem)
                        "
                      >
                        <feather-icon
                          icon="TrashIcon"
                          svgClasses="h-4 w-4"
                          class="mr-2"
                        />
                        <span></span>
                      </a>
                    </div>
                  </vs-list-item>
                </vs-list>
              </div>
            </template>
          </vs-tr>
        </template>
      </vs-table> -->
    </div>
    <div>
      <div class="footer">
        <a @click="test()">
          <span class="material-icons search">search</span>
          <span>test</span>
        </a>
        <ButtonSearch
          icon="format_list_bulleted"
          msg="All"
          url="/Casa"
          @click="confirmRemove()"
        />
        <div class="space"></div>
        <ButtonSearch icon="star" msg="Favorites" url="/About" />
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
