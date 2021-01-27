export default {
    addOrderToCart({ commit }, payload) {
        commit("addOrderToCart", payload)
    },
    removeItemFromCart({ commit }, payload) {
        commit("removeFromCart", payload)
    }
}