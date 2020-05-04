import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SET_AUTHENTICATED: 'SET_AUTHENTICATED',
  SET_USER: 'SET_USER'
}

const state = {
  isAuthen: false,
  user: {},
}
const getters = {
  isAuthen: (state) => {
    state.isAuthen
  },
  user: (state) => {
    state.user
  },
}

const mutations = {
  [types.SET_AUTHENTICATED](state, isAuthen) {
    // console.log('mutations setAuthen')
    if(isAuthen) {
      state.isAuthen = isAuthen
    } 
    if(!isAuthen) {
      state.isAuthen = false
    }
  },

  [types.SET_USER](state, user) {
    // console.log('mutations  setUser',state, user)

    if(user) {
      state.user = user
    }
    if(!user) {
      state.user = ''
    }
  }
}

const actions = {
  setAuthen: ({commit}, isAuthen) => {
    // console.log('actions setAuthen', commit, isAuthen)
    commit(types.SET_AUTHENTICATED, isAuthen)
  },
  setUser: ({commit}, user) => {
    //  console.log('acitons setUser', commit)
    commit(types.SET_USER, user)
  },
}

const modules = {

}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules,
})