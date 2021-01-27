import { createRouter, createWebHistory } from 'vue-router';
import Home           from './components/pages/products/Home.vue';
import ProductsList   from './components/pages/products/ProductsList.vue';
import ProductDetails from './components/pages/products/ProductDetails.vue';
import Auth           from './components/pages/auth/Auth.vue';
import ErrorPage      from './components/pages/error/ErrorPage.vue';
import ReviewsForm    from './components/pages/reviews/Reviews.vue'


const history = createWebHistory()
const routes  = [
    { path: '/', component: Home },
    { path: '/products', component: ProductsList },
    { path: '/products/:id', component: ProductDetails, props: true },
    { path: '/auth', component: Auth },
    { path: '/review', component: ReviewsForm },
    { path: '/:notFound(.*)', component: ErrorPage },
]


const router = createRouter({
    history,
    routes
})


export default router



