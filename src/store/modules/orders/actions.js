export default {
    addItemToCart({ commit }, payload) {
        commit("addItemToCart", payload)  
    },
    removeItemFromCart({ commit }, payload) {
        commit("removeFromCart", payload)
    }
}




        //const cartItems  = JSON.parse(localStorage.getItem("cart"))
        //const deleteItem = cartItems.find.find(item => item.id === payload)
        //cartItems.splice(deleteItem, 1)

        //localStorage.setItem("cart", JSON.stringify(cartItems))