import Vue from 'vue'
import Vuex from 'vuex'

import fakeToken from './modules/fakeToken'
import loading from './modules/loading'
import error from './modules/error'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    fakeToken,
    loading,
    error
  }
})
