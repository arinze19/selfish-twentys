import { createRouter, createWebHistory } from 'vue-router';
import Home           from './components/pages/products/Home.vue';
import ProductsList   from './components/pages/products/ProductsList.vue';
import ProductDetails from './components/pages/products/ProductDetails.vue';
import Auth           from './components/pages/auth/Auth.vue';
import Cart           from './components/pages/orders/Cart.vue';
import Search         from './components/pages/products/Search.vue';
import ErrorPage      from './components/pages/error/ErrorPage.vue';


const history = createWebHistory()
const routes  = [
    { path: '/', component: Home },
    { path: '/products', component: ProductsList },
    { path: '/products/:id', component: ProductDetails, props: true },
    { path: '/auth', component: Auth },
    { path: '/cart', component: Cart },
    { path: '/search', component: Search },
    { path: '/:notFound(.*)', component: ErrorPage }
]


const router = createRouter({
    history,
    routes
})


export default router



