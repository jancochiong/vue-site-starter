import Vuex from 'vuex'
import Vue from 'vue'
import global from './modules/global'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        global
    }
})