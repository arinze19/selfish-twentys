<template>
  <transition name="loader"> 
    <div class="wrapper" v-if="show">
      <div class="container">
        <div class="box one"></div>
        <div class="box two"></div>
        <div class="box three"></div>
      </div>
      <h5>Loading...</h5>
    </div>
  </transition>
</template>

<script>
export default {
    props: ['show']
}
</script>


<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h5 {
    text-align: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 400px
}

.wrapper {
  background-color: #ffffffd0;
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
}

.box {
  width: 50px;
  height: 50px;
  background-color: #cccccc;
  margin: 10px;
  align-self: center;
}

.one {
  animation: loader 2s linear 0s infinite forwards;
}

.two {
  animation: loader 2s linear 1.5s infinite forwards;
}

.three {
  animation: loader 2s linear 3s infinite forwards;
}

@keyframes loader {
  0% {
    background-color: #cccccc;
  }

  50% {
    background-color: #636363;
  }

  100% {
    background-color: #cccccc;
  }
}

/* =================================== transition styling ========================== */

.loader-enter-from,
.loader-leave-to {
    opacity: 0;
}

.loader-enter-active,
.loader-leave-active {
    transition: all 2s linear;
}

.loader-enter-to,
.loader-leave-from {
    opacity: 1
}

</style>