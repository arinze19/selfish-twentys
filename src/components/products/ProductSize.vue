<template>
  <div class="container">
    <button
      class="size"
      v-for="size in sizes"
      :key="size"
      @click="selectSize(size)"
      :class="{ active: selectedSize === size }"
    >
      {{ size }}
    </button>
  </div>
</template>

<script>
export default {
  emits: ["select-size"],
  data() {
    return {
      sizes: [11, 12, 16, 18, 20, 25, 29, 32],
      selectedSize: null,
    };
  },
  methods: {
    selectSize(size) {
      if(this.selectedSize === size) {
        this.selectedSize = null
        return
      }
      this.selectedSize = size;
      this.$emit("select-size", this.selectedSize);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.size {
  padding: 15px;
  margin: 3px;
  border: 1px solid #212a2f;
  color: #212a2f;
  width: 45px;
  height: 45px;
  text-align: center;
  background-color: white;
  transition: all 0.1s linear;
  cursor: pointer;
  outline: none;
}

.size:hover:not(.active) {
  background-color: #212a2f2c;
}

.active {
  background-color: #212a2f;
  color: white;
}
</style>