<template>
  <li>
    <div class="img-container">
      <img :src="image" />
    </div>
    <div class="product-info">
      <h5>{{ name }}</h5>
      <p>Size: {{ size }} </p>
    </div>
    <div class="price">
      <i class="las la-times" @click="removeItem"></i>
      <p>${{ price }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["id", "image", "name", "price", "size"],
  methods: {
    removeItem() {
      this.$store.dispatch("ordersModule/removeItemFromCart", this.id)
    }
  }
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

