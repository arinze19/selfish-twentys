<template>
  <li>
    <base-card link :imageUrl="imageUrl">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
      <p>${{ price }}</p>
      <div class="container">
        <base-button> Add to Cart </base-button>
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
  margin: 10px;
  font-size: 14px;
  color: #212a2f;
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