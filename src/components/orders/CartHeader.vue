<template>
  <header>
    <div class="icons">
      <i class="las la-arrow-right" @click="closeCart"></i>
    </div>
    <p v-if="!freeShipping">
      You are ${{ freeShippingGuage }} away from free shipping!
    </p>
    <p v-else>Congrats! You get Free Shipping</p>
    <div class="progress-bar">
      <div class="value" :style="{width: freeShippingMeter}"></div>
    </div>
  </header>
</template>

<script>
export default {
  emits: ["close-cart"],
  methods: {
    closeCart() {
      this.$emit("close-cart", false);
    },
  },
  computed: {
    freeShipping() {
      return (this.$store.getters["ordersModule/totalPrice"] > 230);
    },
    freeShippingGuage() {
      return (this.$store.getters["ordersModule/freeShipping"]);
    },
    freeShippingMeter() {
        const cartValue =  this.$store.getters["ordersModule/totalPrice"]
        if(cartValue > 230) return;
        return (cartValue/230 * 100) + '%'
    }
  },
};
</script>

<style scoped>
.icons {
  padding: 20px;
  font-size: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.progress-bar {
  height: 10px;
  width: 60%;
  background-color: #cccccc;
  margin: 0 auto;
}

.value {
  height: 100%;
  background-color: #212a2f;
  transition: all 0.3s linear;
}

header p {
  font-size: 14px;
  text-align: center;
  margin-top: 0;
  letter-spacing: 0.5px;
}
</style>