import { createStore } from "vuex"
import productsModule  from "./modules/products/index.js"
import ordersModule    from "./modules/orders/index.js"


const store = createStore({
    modules: {
        productsModule,
        ordersModule
    }
})

export default store