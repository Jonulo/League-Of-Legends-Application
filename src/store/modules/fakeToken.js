import * as fakeToken from '@/api/fake'

export default {
  namespaced: true,
  state: {
    fake: null
  },
  mutations: {
    SET_ACCESS_TOKEN (state, payload) {
      state.fake = payload
    }
  },
  actions: {
    funcionLocal ({ commit }) {
      commit('loading/SET_LOADING', true, { root: true })

      fakeToken.getToken()
        .then(response => {
          commit('SET_ACCESS_TOKEN', response)
        })
        .catch(err => {
          commit('SET_ACCESS_TOKEN', null)
          console.log('Error en el store: ', err)
        })
        .finally(() => {
          commit('loading/SET_LOADING', false, { root: true })
          console.log('Finally done')
        })
    }
  }
}
