export default {
    addOrderToCart(state, payload) {
        state.cartItems.push(payload)
    }
}