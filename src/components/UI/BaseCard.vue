<template>
  <div>
    <div class="container" v-if="imageUrl">
      <div class="hero-img">
        <img :src="imageUrl" />
      </div>
      <div class="action">
        <slot></slot>
      </div>
    </div>

    <div class="container-2" v-else>
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    imageUrl: {
      type: String,
      required: false,
    },
  },
};
</script>


<style scoped>
.container {
  width: 350px;
  height: 450px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
  padding: 0;
  display: block;
}

.container-2 {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0 auto;
  max-width: 40rem;
}

p {
  font-size: 16px;
}

img:hover {
  transform: scale(1.1);
}

.hero-img {
  width: 100%;
  height: 60%;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
}

.action {
  background-color: white;
  padding: 20px;
}

@media (max-width: 768px) {
  .container {
    width: 300px;
    height: 400px;
    margin: 10px auto;
  }
}
</style>