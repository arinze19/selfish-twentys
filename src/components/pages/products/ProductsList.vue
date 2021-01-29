<template>
  <div>
    <h1>Products</h1>
    <div class="input-container">
      <input
        type="text"
        placeholder="Search through our catalog"
        v-model="searchQuery"
      />
    </div>

    <section>
      <ul class="container" v-if="!searchIsEmpty">
        <product-item
          v-for="product in filteredProducts"
          :key="product.name"
          :name="product.name"
          :imageUrl="product.imageUrl[0]"
          :description="product.description"
          :price="product.price"
          :id="product.id"
        >
        </product-item>
      </ul>

      <ul class="container" v-else>
        <product-item
          v-for="product in productsList"
          :key="product.name"
          :name="product.name"
          :imageUrl="product.imageUrl[0]"
          :description="product.description"
          :price="product.price"
          :id="product.id"
        >
        </product-item>
      </ul>

      <h2 v-if="!searchIsEmpty && noResults">Your search for "{{ searchQuery }}" yielded no result</h2>
    </section>
  </div>
</template>


<script>
import ProductItem from "../../products/ProductItem.vue";

export default {
  components: { ProductItem },
  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    productsList() {
      return this.$store.getters["productsModule/products"];
    },
    searchIsEmpty() {
      return this.searchQuery.length === 0 ? true : false;
    },
    filteredProducts() {
      return this.$store.getters["productsModule/products"].filter(item => {

        const lowerCaseItem = item.name.toLowerCase()
        return lowerCaseItem.includes(this.searchQuery.toLowerCase())
      })
    },
    noResults() {
      return this.filteredProducts.length === 0 ? true : false
    }
  },
};
</script>

<style scoped>
div {
  padding: 55px;
  max-width: 1440px;
}

h2,
h1 {
  text-align: center;
  margin-top: 55px;
}

input {
  border-radius: 5px;
  padding: 30px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.26);
  width: 100%;
  border: none;
  outline: none;
  transition: all 0.3s ease-out;
}

input:focus {
  transform: scale(1.01);
}

.input-container {
  width: 90%;
  margin: 10px auto;
}

.container {
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  padding: 0;
  justify-content: center;
}

@media (max-width: 768px) {
  div {
    padding: 20px;
  }

  input {
    padding: 20px;
  }

  .input-container {
    width: 100%;
  }
}
</style>