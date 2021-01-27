<template>
  <div>
    <the-header @open-cart="toggleCart"></the-header>
    <the-cart :show="cartIsOpen" @close-cart="toggleCart"></the-cart>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartIsOpen: false
    }
  },
  methods: {
    toggleCart(cartStatus) {
      this.cartIsOpen = cartStatus
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700;800&display=swap');

* {
  box-sizing: border-box;
  font-family: "Questrial", "Helvetica", "sans-serif";
}

h2,
h3,
h1,
h4,
h5,
h6 {
  font-family: "Poppins", "Questrial", "Helvetica";
}

body {
  margin: 0;
  padding: 0;
}
</style>
