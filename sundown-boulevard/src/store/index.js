import { createStore } from 'vuex'

export default createStore({
  state: {
    user: []
  },
  mutations: {
    setUser: (state, user) => { state.user = user }
  },
  getters: {
    getUser: (state) => (state.user)
  },
  actions: {
    async fetchUser ({ commit }, userObject) {
      commit('setUser', userObject)
    }
  }
})
