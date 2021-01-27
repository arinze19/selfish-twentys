export default {
    cartItemsCount(state) {
        return state.cartItemsList.length
    },
    cartList(state) {
        return state.cartItemsList
    },
    totalPrice(state) {
        const cartPrices = state.cartItemsList.map(item => item.price)
        const total      = cartPrices.reduce((a, b) => {
            return a + b
        }, 0).toFixed(2)
        return total
    },
    freeShipping(_, getters) {
        return (230 - getters.totalPrice).toFixed(2)
    }
}