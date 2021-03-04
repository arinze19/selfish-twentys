<template>
  <li>
    <base-card link :imageUrl="imageUrl">
      <div class="info">
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>
        <p>${{ price }}</p>
      </div>
      <div class="container">
        <base-button @click="addToCart"> Add to Cart </base-button>
        <base-button link secondary :url="productLink">
          View Details</base-button
        >
      </div>
    </base-card>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    addToCart() {
      const cartItem = {
        name: this.name,
        image: this.imageUrl,
        id: this.id,
        price: Number(this.price),
        size:  11,
        decrement: false,
        qty: 1
      };

      this.$store.dispatch("ordersModule/addItemToCart", cartItem);
    },
  },
  computed: {
    productLink() {
      return "/products/" + this.id;
    },
  },
};
</script>


<style scoped>
h3 {
  margin: 0;
  color: #212a2f;
}

p {
  margin: 8px 0;
  font-size: 16px;
  color: #212a2f;
}

.info {
  width: 80%;
}

li {
  list-style-type: none;
  padding: 0;
  margin: 20px;
}

.container {
  display: flex;
}
</style>