export default {
    addItemToCart(state, payload) {
        const { cartItemsList } = state
        const decrementQty      = payload.decrement
        // check if we already have the item in the cart 
        const updateItem = cartItemsList.find(item => item.id === payload.id)

        //IF we do, increment the count
        if(updateItem) {
            if(decrementQty) {
                // only decrement quantity of item if it's value is greater than 1
               return updateItem.qty = updateItem.qty === 1 ? updateItem.qty : updateItem.qty -= 1
            }
            updateItem.qty += 1
        } else {
            //else, put new product in cart
            cartItemsList.push(payload)
        }
    },
    removeFromCart(state, payload) {
        const deleteItem = state.cartItemsList.find(product => product.id === payload)
        state.cartItemsList.splice(deleteItem, 1)
    }
}