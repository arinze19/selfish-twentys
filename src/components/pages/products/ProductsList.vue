<template>
  <div>
    <base-card>
      <h2>Products</h2>
    </base-card>

    <section>
      <ul class="container">
        <product-item
          v-for="product in productsList"
          :key="product.name"
          :name="product.name"
          :imageUrl="product.imageUrl"
          :description="product.description"
          :price="product.price"
          :id="product.id"
        >
        </product-item>
      </ul>
    </section>
  </div>
</template>


<script>
import ProductItem from "../../products/ProductItem.vue";

export default {
  components: { ProductItem },
  data() {
    return {

    };
  },
  computed: {
    productsList() {
      return this.$store.getters['productsModule/products']
    }
  }
};
</script>

<style scoped>
div {
  padding: 55px;
}

h2 {
  text-align: center;
}

.container {
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  padding: 0;
  justify-content: center;
}

@media(max-width: 768px) {

div {
  padding: 20px;
}
}
</style>