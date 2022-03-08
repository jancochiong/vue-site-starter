const state = {
    showLetterModal: false,
    showInvoiceModal: false,
}

const getters = {
    getLetterModal: (state) => state.showLetterModal,
    getInvoiceModal: (state) => state.showInvoiceModal
}

const actions = {
    onClickLetterModal({commit}, payload){
        commit('onClickLetterModal', payload)
    },
    onClickInvoiceModal({commit}, payload){
        commit('onClickInvoiceModal', payload)
    }
}

const mutations = {
    onClickLetterModal: (state, payload) => {
        state.showLetterModal = payload
    },
    onClickInvoiceModal: (state, payload) => {
        state.showInvoiceModal = payload
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

// use $store.dispatch('onClickInvoiceModal', true)