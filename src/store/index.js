import { createStore } from "vuex";
import productsModule  from "./modules/products/index.js";
import ordersModule    from "./modules/orders/index.js";
import reviewsModule   from "./modules/reviews/index.js";
import authModule      from "./modules/auth/index.js"

const store = createStore({
  modules: {
    productsModule,
    ordersModule,
    reviewsModule,
    authModule
  },
});

export default store;
