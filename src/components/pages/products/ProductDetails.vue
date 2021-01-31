<template>
  <div>
    <section>
      <div class="product-container">
        <div class="img-container" v-for="image in productImages" :key="image">
          <img :src="image" />
        </div>
      </div>
      <div class="info-container">
        <header>
          <h1>{{ selectedProduct.name }}</h1>
          <p>${{ selectedProduct.price }}</p>
        </header>
        <main>
          <p>{{ selectedProduct.meta }}</p>
          <p class="size">Select Size:</p>
          <product-size @select-size="updateSize"></product-size>
          <br />
          <base-button cart @click="addToCart"> add to cart </base-button>
          <p>Free 30 day return</p>
        </main>
      </div>
    </section>
    <base-alert :show="successAlert">
      <strong>{{ selectedProduct.name }} has been added to your cart.</strong>
    </base-alert>
    <reviews-list :id="id"></reviews-list>
  </div>
</template>


<script>
import ProductSize from "../../products/ProductSize.vue";
import ReviewsList from "../../reviews/ReviewsList.vue";

export default {
  components: { ProductSize, ReviewsList },
  props: ["id"],
  data() {
    return {
      selectedProduct: null,
      productImages: null,
      dialogIsOpen: false,
      selectedSize: null,
      successAlert: false
    };
  },
  methods: {
    updateSize(size) {
      this.selectedSize = size;
    },
    addToCart() {
      const cartItem = {
        name: this.selectedProduct.name,
        image: this.productImages[0],
        id: this.id,
        price: Number(this.selectedProduct.price),
        size: this.selectedSize || 11
      }
      
      this.$store.dispatch("ordersModule/addItemToCart", cartItem);
      this.showSuccessAlert();
    },
    showSuccessAlert() {
      this.successAlert = true;
      setTimeout(() => {
        this.successAlert = false;
      }, 3000);
    }
  },
  created() {
    this.selectedProduct = this.$store.getters["productsModule/products"].find(
      (product) => product.id === this.id
    );
    this.productImages = this.selectedProduct.imageUrl;
  },
};
</script>

<style scoped>
:root {
  --base-color: #212a2f;
}

section {
  padding: 55px;
  display: flex;
  color: var(--base-color, #212a2f);
}

h1 {
  font-size: 32px;
  margin-bottom: 0;
}

header p {
  margin: 5px;
  border-bottom: 2px solid var(--base-color, #212a2f);
  padding-bottom: 15px;
}

.size {
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 5px;
}

main p {
  line-height: 1.5;
}

main p:last-child {
  text-align: center;
  font-size: 14px;
}

.product-container {
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  flex-shrink: 0;
}

.img-container {
  width: 400px;
  height: 400px;
  padding: 10px;
  cursor: pointer;
}

img {
  width: 100%;
  height: 100%;
}

@media (max-width: 1024px) {
  .img-container {
    width: 200px;
    height: 200px;
  }

  .product-container {
    height: min-content;
    width: 65%;
    justify-content: center;
  }
}

@media (max-width: 767px) {
  .img-container {
    width: 300px;
    height: 300px;
  }

  section {
    display: block;
    padding: 0;
  }

  .product-container {
    width: 100%;
    padding-top: 60px;
    overflow-y: hidden;
    flex-wrap: nowrap;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
  }

  .img-container {
    flex-shrink: 0;
  }

  .info-container {
    padding: 20px;
  }

  .product-container::-webkit-scrollbar {
    display: none;
  }
}
</style>

