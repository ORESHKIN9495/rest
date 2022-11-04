import axios from 'axios'

import router from '../../router'

export default {
  namespaced: true,

  state: {
    regData: [],
    confirmed: false,
  },

  mutations: {
    regData(state, data) {
      state.regData = data
    },

    confirmed(state) {
      state.confirmed = true
    },
  },

  actions: {
    async postData({ commit }, data) {
      await axios.post('http://localhost:8000/api/register', data).then((response) => {
        commit('confirmed')
      })
    },

    async checkData({ commit }, data) {
      await axios.post('http://localhost:8000/api/authorize', data).then((response) => {
        if (!response.data.error) {
          commit('regData', response.data)

          router.push('/Userprofile')

          localStorage.setItem('user', JSON.stringify(response.data))
        }
      })
    },
  },

  getters: {},
}
