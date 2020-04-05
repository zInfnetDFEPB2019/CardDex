<template>
  <div
    v-if="pokemonData && pokemonDescription"
    class="pokemon-card nes-container is-rounded"

    :class="[ isFavorite ? 'favorito' : 'nao-favorito']"
    @click="toggleClass"
  >
    <div class="pokemon-card__image">
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`"
        :alt="pokemonData.name"
      >
    </div>
    <div class="pokemon-card__text">
      <p>Nome: {{ pokemonData.name }}</p>
      <p>No. {{ pokemonData.id }}</p>
      <p>
        Tipo: <span
          v-for="(typesOfPokemon, index) in pokemonData.types"
          :key="`type${index}`"
        >
          {{ typesOfPokemon.type.name }}
        </span>
      </p>
      <p>{{ pokemonDescription[0].flavor_text }}</p>
    </div>
    <a 
      class="nes-btn"
    >Favoritar</a>
  </div>
</template>

<script>
    export default {
      name: 'PokemonCard',
      props: {
        pokemonName: {
          type: String,
          default: ''
        },
      },
      data: function () {
        return {
          pokemonData: null,
          pokemonDescription: null,
          isFavorite: false,
        }
      },
      async created () {
        if (this.pokemonName) {
          this.pokemonData = await this.getDataSpecificPokemon(this.pokemonName)
          this.pokemonDescription = await this.getPokemonDescription(this.pokemonData)
      }
    },
      methods: {
        async getDataSpecificPokemon(name) {
          const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
          const json = await data.json()
          return json
        },
        async getPokemonDescription(pokemonData) {
          const data = await fetch(`${pokemonData.species.url}`)
          const json = await data.json()
          return json.flavor_text_entries.filter(function(element) {
            return element.language.name === 'en'
          })
        },
        toggleClass: function(){
          this.isFavorite = !this.isFavorite
        }
      }
        
    }
</script>

<style scoped>
.pokemon-card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
}

.favorito {
  background:#5496ff;
}

.nao-favorito { 
  background: white;
}
</style>