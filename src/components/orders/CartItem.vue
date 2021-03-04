<template>
  <li>
    <div class="img-container">
      <img :src="image" />
    </div>
    <div class="product-info">
      <div>
        <h5>{{ name }}</h5>
        <p>Size: {{ size }}</p>
      </div>
      <br />
      <div>
        <cart-increment :qty="qty" :id="id"></cart-increment>
      </div>
    </div>
    <div class="price">
      <div>
        <i class="las la-times" @click="removeItem"></i>
      </div>
      <div>
        <p>${{ price }}</p>
      </div>
    </div>
  </li>
</template>

<script>
import CartIncrement from "./CartIncrement.vue";
export default {
  components: { CartIncrement },
  props: ["id", "image", "name", "price", "size", "qty"],
  methods: {
    removeItem() {
      this.$store.dispatch("ordersModule/removeItemFromCart", this.id);
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}

.price {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

i {
  font-weight: 32px;
  cursor: pointer;
}

.img-container {
  width: 120px;
  height: 120px;
  margin-right: 20px;
}

img {
  width: 100%;
  height: 100%;
}

.product-info {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-info h5 {
  margin: 0;
  font-size: 16px;
}

.product-info p {
  margin: 2px;
  font-size: 14px;
}

</style>

