import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        height: {},
        weight: {},
        abilities: {},
        type: {},
        name: {}
    },
    mutations: {
        SET_HEIGHT: (state, height) =>{
            state.height = height
        },
        SET_WEIGHT: (state, weight) =>{
            state.weight = weight
        },
        SET_ABILITIES: (state, abilities) =>{
            state.abilities = abilities
        },
        SET_TYPE: (state, type) =>{
            state.type = type
        },
        SET_NAME: (state, name) =>{
            state.name = name
        }
    },
    actions: {
        CALL_POKEMON: async ({ commit }) => {
            await axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
                commit('SET_HEIGHT', response.data.height)
                commit('SET_WEIGHT', response.data.weight)
                commit('SET_ABILITIES', response.data.abilities)
                commit('SET_TYPE', response.data.type)
                commit('SET_NAME', response.data.name)
            })
        }
    },
    getters: {
        height: state => state.height,
        weight: state => state.weight,
        abilities: state => state.abilities,
        type: state => state.type,
        name: state => state.name
    }
})