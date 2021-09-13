import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"
import auth from './modules/auth'
import system from './modules/system'
Vue.use(Vuex);
export default new Vuex.Store({
    plugins :[createPersistedState()],
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
      auth,
      system
    },
});