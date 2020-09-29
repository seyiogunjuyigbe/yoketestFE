import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    symptoms: [],
    searchResults: [],
    loadingSymptoms: true,
    loadingMap: false
  },
  mutations: {
    GET_SYMPTOMS(state, data) {
      state.symptoms = data;
      state.loadingSymptoms = false
    },
    GET_SEARCH_RESULTS(state, data) {
      state.searchResults = data;
      state.loadingMap = false
    },
  },
  actions: {
    async getSymptoms({ commit, state }) {
      const url = 'https://yoketest.herokuapp.com/api/symptoms';
      state.loadingSymptoms = true
      try {
        const response = await axios.get(url);
        commit('GET_SYMPTOMS', response.data.data);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchSearchResults({ commit, state }, appData) {
      state.loadingMap = true;
      const url = `https://yoketest.herokuapp.com/api/requests`
      try {
        const response = await axios.get(url, { params: appData });
        let data = response.data.data.data
        commit("GET_SEARCH_RESULTS", data);
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
    },
    getLoadingSymptoms: (state) => {
      return state.loadingSymptoms
    },
    getLoadingMap: (state) => {
      return state.loadingMap
    }
  },
  modules: {
  },
});
