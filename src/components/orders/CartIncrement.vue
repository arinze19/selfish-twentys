<template>
  <div class="increment-container">
    <div class="increment" @click="decrementItem">
      <span> - </span>
    </div>
    <div class="item-count">
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
      this.$store.dispatch("ordersModule/addItemToCart", {
        id: this.id,
        decrement: false,
      });
    },
    decrementItem() {
      this.$store.dispatch("ordersModule/addItemToCart", {
        id: this.id,
        decrement: true,
      });
    },
  },
};
</script>

<style scoped>
.increment {
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  color: #cccaca;
}

.item-count {
  padding: 5px 10px;
  font-weight: bold;
}


.increment-container {
  display: flex;
  border: 2px solid #cccaca;
  width: fit-content;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .item-count,
  .increment {
  padding: 5px 8px;
 }  
}
</style>