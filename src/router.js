import { createRouter, createWebHistory } from "vue-router";
import Home             from "./components/pages/products/Home.vue";
import ProductsList     from "./components/pages/products/ProductsList.vue";
import ProductDetails   from "./components/pages/products/ProductDetails.vue";
import Auth             from "./components/pages/auth/Auth.vue";
import ErrorPage        from "./components/pages/error/ErrorPage.vue";
import ReviewsForm      from "./components/pages/reviews/Reviews.vue";
import Help             from "./components/pages/help/Help.vue";
import store            from "./store/index";

const history = createWebHistory();
const routes = [
  { path: "/", component: Home },
  { path: "/products", component: ProductsList },
  { path: "/products/:id", component: ProductDetails, props: true },
  { path: "/auth", component: Auth },
  {
    path: "/:id/review",
    component: ReviewsForm,
    props: true,
    meta: { requiresAuth: true },
  },
  { path: "/help", component: Help },
  { path: "/:notFound(.*)", component: ErrorPage },
];

const router = createRouter({
  history,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, _, next) => {
    if(to.meta.requiresAuth && !store.getters.isLoggedIn) {
        next('/auth')
    } else {
        next()
    }
})

export default router;
