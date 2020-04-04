<template>
  <div class="pokemon-list">
    <h2>Choose your Pokémon</h2>
    <input typy="text" v-model="search" placeholder="search pokemon"/>
    <p
      v-for="(pokemon, index) in filteredPokemons"
      :key="pokemon.url"
      class="pokemon-list-item"
    >
      {{ index + 1 + '. ' }}
      <i
        v-if="favorites.includes(pokemon.name)"
        class="nes-icon is-small heart"
      />
      <i
        v-else
        class="nes-icon is-small heart is-empty"
      />
      {{ pokemon.name }}
      <!-- <img
        :key="pokemon.url"
        :src="
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png`
        "
        alt="Pokemon`"
      > -->
      <a
        v-show="!favorites.includes(pokemon.name)"
        class="nes-btn"
        :class="{ 'is-disabled': favoriteListLength === 10 }"
        @click="setFavorites(pokemon.name)"
      >Pick me!</a>
      <button
        v-show="favorites.includes(pokemon.name)"
        class="nes-btn is-error"
        @click="setFavorites(pokemon.name)"
      >
        Remove
      </button>
    </p>
  </div>
</template>

<script>
export default {
    name: 'PokemonList',
    data(){
      return{
        search: ''
      }
    },
    props: {
        pokemonList: {
            type: Array,
            required: true,
        },
        favorites: {
            type: Array,
            required: true,
        },
    },
    computed: {
        favoriteListLength() {
            return this.favorites.length
        },
        filteredPokemons(){
          return this.pokemonList.filter((pokemon) => {
            console.log("NOIX" + pokemon)
            return pokemon.name.match(this.search);
          });
        }
    },
    methods: {
        setFavorites(name) {
            if (this.favorites.includes(name)) {
                const indexInArray = this.favorites.indexOf(name)
                this.$emit('deleteFavorite', indexInArray)
                return
            }
            if (this.favoriteListLength < 10) {
                this.$emit('addFavorite', name)
            }
        },
        playPokemonCry(pokemonId) {
            const audio = new Audio(
                `https://pokemoncries.com/cries-old/${pokemonId}.mp3`
            )
            audio.play()
        }
    },
}
</script>

<style scoped>
.pokemon-list {
    text-transform: capitalize;
}

.pokemon-list-item {
    display: flex;
    align-items: center;
}
</style>
