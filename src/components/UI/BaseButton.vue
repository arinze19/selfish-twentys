<template>
  <div>
    <router-link v-if="link" :to="url">
      <button :class="{secondary: secondary}">
        <slot></slot>
      </button>
    </router-link>

    <button v-else :class="{secondary: secondary}">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    url: {
      type: String,
      required: false,
    },
    secondary: {
      type: Boolean,
      required: false,
      default: false
    }
  },
};
</script>


<style scoped>
button {
  background-color: #212a2f;
  border-radius: 2px;
  color: white;
  letter-spacing: 2px;
  cursor: pointer;
  font-size: 14px;
  padding: 18px 20px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  transition: all 0.3s ease-in-out;
  margin-right: 10px;
}

a {
  text-decoration: none;
  color: white;
}

.secondary {
  background-color: #7b858a;
  color: white;
}

@media(max-width: 768px) {
  button {
    padding: 15px 15px;
  }
}
</style>