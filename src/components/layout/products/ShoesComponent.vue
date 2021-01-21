<template>
  <ul class="container">
    <li v-for="shoe in shoes" :key="shoe.title">
      <base-card :imageUrl="shoe.img">
        <h3>{{ shoe.title }}</h3>
        <p>{{ shoe.description }}</p>
        <base-button url="/products" link> Shop Now </base-button>
      </base-card>
    </li>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      shoes: [
        {
          img:
            "https://images.unsplash.com/photo-1548801133-da353ebb1d97?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHNob2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
          title: "Yeezy Sply",
          description: "Perfect for social gatherings",
        },
        {
          img:
            "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          title: "Leather Shoes",
          description: "perfect for evening outings",
        },
        {
          img:
            "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
          title: "Converse Sneakers",
          description: "perfect for the summer weather",
        },
      ],
    };
  },
};
</script>


<style scoped>
li {
  list-style-type: none;
  padding: 20px;
  margin: 0px;
}

.container {
  margin: 20px auto;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

p {
  font-size: 14px;
}

@media (max-width: 768px) {
  li {
    padding: 8px;
  }
  
  .container {
    overflow-y: hidden;
    justify-content: flex-start;
    flex-shrink: 0;
    flex-wrap: nowrap;
    overflow-x: auto;
    width: 100%;
    -webkit-overflow-scrolling: touch;
  }
  .container::-webkit-scrollbar {
    display: none;
  }
}
</style>

