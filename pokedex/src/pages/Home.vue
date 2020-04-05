<template>
  <div class="select-pokemon-page">
    <img src="./../assets/logo-pixel.gif" alt="pokémon" />
    <h1>Home page</h1>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <div class="box">
              <div class="card" style="width: 18rem; border: none;">
                <summary-favorites
                  :pokemon-list="statePokemonDataList"
                  :favorites="stateFavoritePokemonList"
                  @addFavorite="addFavorite"
                  @eraseFavoritePokemonList="eraseFavoritePokemonList"
                />
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6" >
            <div class="box" >
              <div class="scrolltable">
                <div class="card" style="width: 18rem; border: none;">
                  <pokemon-list
                    :pokemon-list="statePokemonDataList"
                    :favorites="stateFavoritePokemonList"
                    @deleteFavorite="deleteFavorite"
                    @addFavorite="addFavorite"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PokemonList from "../components/PokemonList";
import SummaryFavorites from "../components/SummaryFavorites";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    PokemonList,
    SummaryFavorites
  },
  computed: {
    ...mapState(["statePokemonDataList", "stateFavoritePokemonList"])
  },
  async created() {
    const pokemonData = await this.getPokemonData();
    this.setPokemonData(pokemonData);
  },
  methods: {
    async getPokemonData() {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=807");
      const json = await data.json();
      return json.results;
    },
    ...mapActions([
      "setPokemonData",
      "addFavorite",
      "deleteFavorite",
      "eraseFavoritePokemonList"
    ])
  }
};
</script>
<style scoped>
.select-pokemon-page {
  text-align: center;
  text-transform: uppercase;
  padding: 20px 0;
}
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  margin: 20px 0;
  padding: 10px;
  width: 100%;
  min-height: 200px;
  border: 2px #ccc solid;
  color: rgb(0, 0, 0);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.scrolltable{
  height: 653px;
  overflow: scroll;
}
.myteam {
  font-weight: bold;
  padding-top: 30px;
}
</style>