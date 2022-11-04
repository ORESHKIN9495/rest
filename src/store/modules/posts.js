import axios from 'axios'

export default {
  namespaced: true,

  state: {
    data: [],
  },

  mutations: {
    postsData(state, data) {
      state.data = data
    },
  },

  actions: {
    async getData({ commit }, uid) {
      await axios.get(`http://localhost:8000/api/posts/${uid}`).then((response) => {
        commit('postsData', response.data)
      })
    },

    async postData({ dispatch }, data) {
      await axios.post('http://localhost:8000/api/posts', data).then((response) => {
        dispatch('getData', data.uid)
      })
    },

    async deleteData({ dispatch }, props) {
      await axios.delete(`http://localhost:8000/api/posts/${props.id}`).then((response) => {
        dispatch('getData', props.uid)
      })
    },
  },

  getters: {},
}
