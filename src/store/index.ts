import Vue from 'vue'
import Vuex from 'vuex'
import Toast from '@/models/Toast'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toast: {
      list: [] as Toast[],
    },
  },
  mutations: {
    showToast(state, toast: Toast) {
      state.toast.list.push(toast)
    },
    hideToast(state, toast: Toast) {
      const index = state.toast.list.findIndex(t => t === toast)
      if (index >= 0) {
        window.clearTimeout(toast.timeoutId)
        window.clearTimeout(toast.updateStateTimeoutId)
        state.toast.list.splice(index, 1)
      }
    },
  },
  actions: {
    showToast({ commit }, toast: Toast) {
      const updateStateTimeoutId = setTimeout(() => {
        toast && toast.setState('opened')
      }, 100)
      toast.setUpdateStateTimeoutId(updateStateTimeoutId)
      commit('showToast', toast)
    },
    hideToast({ commit }, toast: Toast) {
      toast.setState('closing')
      setTimeout(() => {
        commit('hideToast', toast)
      }, 100)
    },
  },
  modules: {},
})
