<template>
  <div class="wrapper">
    <section class="hero"></section>
    <div class="container">
      <h2>Be Natural, Save The Planet</h2>
      <p>Get early access to our summer wears made from natural products</p>

      <div class="inline">
        <base-button link url="/products">Shop Men</base-button>
        <base-button link url="/products">Shop Women</base-button>
      </div>
    </div>
    <carousel-menu></carousel-menu>
  </div>
</template>


<script>
import CarouselMenu from "../../layout/products/CarouselMenu.vue";

export default {
  components: { CarouselMenu },
};
</script>


<style scoped>

.hero {
  background: url("https://images.pexels.com/photos/4462781/pexels-photo-4462781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    no-repeat center center fixed;
  background-size: cover;
  height: 70vh;
  width: 100%;
  position: relative;
}

h2 {
  font-size: 45px;
  font-weight: 800;
  margin: 35px 0 0 0;
}

p {
  margin: 20px;
  font-size: 20px;
}

.container {
  text-align: center;
  padding: 16px;
}

.inline {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {

  h2 {
    font-size: 32px;
    margin: 10px 30px;
  }

  p {
    margin: 3px 30px 20px 30px;
  }

  .hero {
    background-image: url("https://images.pexels.com/photos/3772771/pexels-photo-3772771.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  }
}
</style>