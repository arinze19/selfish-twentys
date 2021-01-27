<template>
  <div class="shipping-container">
    <div class="total-price">
      <div><strong>Total:</strong></div>
      <p>${{ totalPrice }} USD</p>
    </div>
    <div class="shipping">
      <div><strong>Shipping:</strong></div>
      <p v-if="!freeShipping">${{ shippingPrice }} USD</p>
      <p v-else>FREE</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shippingPrice: 35
    }
  },
  computed: {
    totalPrice() {
      return this.$store.getters["ordersModule/totalPrice"];
    },
    freeShipping() {
      return this.$store.getters["ordersModule/totalPrice"] > 230;
    }
  },
};
</script>

<style scoped>
.total-price,
.shipping {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.shipping-container {
  width: 90%;
  margin: 0 auto;
  padding: 2px;
}
</style>