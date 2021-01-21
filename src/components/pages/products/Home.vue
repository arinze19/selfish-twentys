<template>
  <div>
    <section class="hero"></section>
    <div class="container">
      <h2>Summer Go Getter</h2>
      <p>Get early access to our summer line looks.</p>

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

/* ul {
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #212121;
} */

h2 {
  font-size: 32px;
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

@media (max-width: 770px) {
  .hero {
    background-image: url("https://images.pexels.com/photos/3772771/pexels-photo-3772771.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  }
}
</style>