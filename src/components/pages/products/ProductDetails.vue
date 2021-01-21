<template>
  <div class="container">
    <h2>{{ selectedProduct.name }}</h2>
    <p>${{ selectedProduct.price }}</p>
    <img
      :src="selectedProduct.imageUrl"
    />
    <p>{{ selectedProduct.description }}</p>
    <base-button> Add to Cart </base-button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedProduct: null,
    };
  },
  created() {
    this.selectedProduct = this.$store.getters["productsModule/products"].find(
      (product) => product.id === this.id
    );
  },
};
</script>


<style scoped>
h2 {
  margin-bottom: 0
}

p {
  margin-top: 5px
}

.container {
  padding: 55px;
  width: 768px;
  margin: 0 auto;
}

img {
  width: 100%;
  height: 400px;
}

@media(max-width: 767px) {
  img {
    height: 300px;
  }

  .container {
    width: auto;
  }
}
</style>