import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    symptoms: [],
  },
  mutations: {
    GET_SYMPTOMS(state, data) {
      state.symptoms = data;
    },
  },
  actions: {
    async getSymptoms({ commit }) {
      const url = 'https://yoketest.herokuapp.com/api/symptoms';

      try {
        const response = await axios.get(url);
        commit('GET_SYMPTOMS', response.data.data.data);
      } catch (err) {
        console.log(err);
      }
    },
    async fetchSearchResults({ commit }, appData) {
      console.log({ appData })
      const url = `https://yoketest.herokuapp.com/api/requests`
      try {
        const response = await axios.get(url, { params: appData })
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
  },
  modules: {
  },
});
