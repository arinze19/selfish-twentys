export default {
    addOrderToCart(state, payload) {
        state.cartItemsList.push(payload)
    },
    removeFromCart(state, payload) {
        const deleteItem = state.cartItemsList.find(product => product.id === payload)
        state.cartItemsList.splice(deleteItem, 1)
    }
}