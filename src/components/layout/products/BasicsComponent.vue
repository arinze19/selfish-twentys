<template>
  <ul class="container">
    <li v-for="basic in basics" :key="basic.title">
      <base-card :imageUrl="basic.img">
        <h3>{{ basic.title }}</h3>
        <p>{{ basic.description }}</p>
        <base-button url="/products" link> Shop Now </base-button>
      </base-card>
    </li>
  </ul>
</template>


<script>
export default {
  data() {
    return {
      basics: [
        {
          img:
            "https://images.pexels.com/photos/2228547/pexels-photo-2228547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Custom Socks",
          description: "Perfect for social gatherings",
        },
        {
          img:
            "https://images.pexels.com/photos/5329291/pexels-photo-5329291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Basics vest",
          description: "perfect for evening outings",
        },
        {
          img:
            "https://images.pexels.com/photos/5693888/pexels-photo-5693888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          title: "Bermuda Shorts",
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

