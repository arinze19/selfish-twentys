<template>
  <div class="increment-container">
    <div class="increment" @click="decrementItem">
      <span> - </span>
    </div>
    <div class="itemCount">
      {{ qty }}
    </div>
    <div class="increment" @click="incrementItem">
      <span> + </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["qty", "id"],
  methods: {
    incrementItem() {
      this.$store.dispatch("ordersModule/addItemToCart", { id: this.id, decrement: false });
    },
    decrementItem() {
      this.$store.dispatch("ordersModule/addItemToCart", {id: this.id, decrement: true });
    },
  },
};
</script>

<style scoped>
.increment {
  width: 30px;
  height: 30px;
  background-color: #212a2f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.itemCount {
  background-color: #f3f3f3;
  padding: 3px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.increment-container {
  display: flex;
}
</style>