import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    symptoms: [],
    searchResults: [],
  },
  mutations: {
    GET_SYMPTOMS(state, data) {
      state.symptoms = data;
    },
    GET_SEARCH_RESULTS(state, data) {
      state.searchResults
    },
  },
  actions: {
    async getSymptoms({ commit }) {
      const url = 'https://yoketest.herokuapp.com/api/symptoms';

      try {
        const response = await axios.get(url);
        console.log(response.data.data);
        commit('GET_SYMPTOMS', response.data.data);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchSearchResults({ commit }, appData) {
      console.log({ appData })
      const url = `https://yoketest.herokuapp.com/api/requests`
      try {
        const response = await axios.get(url, { params: appData });
        let data = response.data.data
        commit("GET_SEARCH_RESULTS", data);
        console.log({ response })
      } catch (err) {
        console.log({ err })
      }
    }
  },
  getters: {
    getSymptoms: (state) => {
      return state.symptoms;
    },
    getSearchResults: (state) => {
      return state.searchResults
    }
  },
  modules: {
  },
});
