<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&display=swap");

* {
  box-sizing: border-box;
  font-family: "Questrial", "Helvetica", "sans-serif";
}

.static {
  position: static;
  margin-bottom: 55px;
}

h2,
h3,
h1,
h4,
h5,
h6 {
  font-family: "Montserrat", "Questrial", "Helvetica";
}

p {
  font-size: 20px;
}

body {
  margin: 0;
  padding: 0;
}
</style>
