import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  persons: []
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },
  ADD_PERSON (state, person) {
    state.persons.push(person)
  }
}

const actions = {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  },
  addPerson ({commit}, person) {
    commit('ADD_PERSON', person)
  }
}

const getters = {
  persons() {
    return state.persons;
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
