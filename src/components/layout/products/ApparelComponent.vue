<template>
  <ul class="container">
    <li v-for="apparel in apparels" :key="apparel.title">
      <base-card :imageUrl="apparel.img">
        <h3>{{ apparel.title }}</h3>
        <p>{{ apparel.description }}</p>
        <base-button url="/products" link> Shop Now </base-button>
      </base-card>
    </li>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      apparels: [
        {
          img:
            "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Supreme T-shirts",
          description: "Perfect for social gatherings",
        },
        {
          img:
            "https://images.pexels.com/photos/5553712/pexels-photo-5553712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Deluxe hoodies",
          description: "perfect for evening outings",
        },
        {
          img:
            "https://images.pexels.com/photos/3765547/pexels-photo-3765547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Mikky Sweater",
          description: "perfect for the winter weather",
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

h3 {
  margin-bottom: 0;
}

p {
  margin-top: 5px;
  font-size: 14px;
}

@media (max-width: 768px) {
  li {
    padding: 8px;
  }

  ul {
    padding: 10px;
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

