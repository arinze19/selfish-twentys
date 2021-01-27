<template>
    <ul>
      <cart-item
        v-for="item in cartList"
        :key="item.id"
        :id="item.id"
        :image="item.image"
        :price="item.price"
        :name="item.name"
        :size="item.size"
      ></cart-item>
    </ul>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  components: { CartItem },
  computed: {
    cartList() {
      return this.$store.getters["ordersModule/cartList"];
    },
  },
};
</script>

<style scoped>
ul {
  width: 90%;
  padding: 0;
  margin: 50px auto;
}
</style>




