import { createStore } from 'vuex'

import posts from './modules/posts.js'

import register from './modules/register.js'

export default createStore({
  modules: {
    posts,
    register,
  },
})
