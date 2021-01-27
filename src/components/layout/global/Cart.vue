<template>
  <transition name="cart">
    <section v-if="show">
      <div class="background"></div>

      <div class="container">
        <div class="main-container">
          
          <cart-header @close-cart="$emit('close-cart', false)"></cart-header>
          <div v-if="cartIsEmpty" class="cart-empty">
            <p>
              Your cart is empty.
              <router-link to="/products">visit products?</router-link>
            </p>
          </div>
          <div v-else>
            <cart-list></cart-list>
            <shipping-info></shipping-info>
            <div class="btn-container">
              <base-button cart> Checkout </base-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
import CartList     from "../../orders/CartList.vue";
import ShippingInfo from "../../orders/ShippingInfo.vue";
import CartHeader   from '../../orders/CartHeader.vue'

export default {
  components: { CartList, ShippingInfo, CartHeader },
  props: {
    show: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    cartIsEmpty() {
      return this.$store.getters["ordersModule/cartItemsCount"] === 0
        ? true
        : false;
    },
  },
};
</script>


<style scoped>
.background {
  background-color: #000000b1;
  width: 100%;
  height: 100%;
}

section {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  z-index: 99;
}

.container {
  width: 40%;
  height: 100vh;
  position: fixed;
  background-color: white;
  margin-right: 10px;
  overflow-y: auto;
}

.main-container {
  width: 100%;
  overflow-y: auto;
  position: relative;
}

.btn-container {
  width: 80%;
  margin: 0 auto;
}

.cart-empty {
  margin: 30px auto;
  width: 70%;
}

/* ========================= transition classes =========================*/
.cart-enter-from,
.cart-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.cart-enter-active {
  transition: all 0.3s linear;
}

.cart-leave-active {
  transition: all 0.3s linear;
}

.cart-enter-to,
.cart-leave-from {
  opacity: 1;
  transform: translateX(-30px);
}

@media(max-width: 767px) {
  .container {
    width: 100%;
    margin-right: 0;
  }
}
</style>