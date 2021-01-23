<template>
  <div>
    <button v-if="cart" class="cart">
      <slot></slot>
    </button>

    <router-link v-else-if="link" :to="url">
      <button :class="{ secondary: secondary }">
        <slot></slot>
      </button>
    </router-link>

    <button v-else :class="{ tertiary: tertiary }">
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
      default: false,
    },
    cart: {
      type: Boolean,
      required: false,
      default: false,
    },
    tertiary: {
      type: Boolean,
      required: false,
      default: false,
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
  background-color: white;
  color: #212a2f;
  border: 1px solid #212a2f;
}

.cart {
  width: 90%;
  background-color: #212a2f;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: white;
  text-align: center;
  transition: all 0.1s linear;
}

.cart:hover {
  background-color: white;
  border: 2px solid #212a2f;
  color: #212a2f;
}

.tertiary {
  background-color: #444d52;
  border-radius: 5px;
}

@media (max-width: 768px) {
  button {
    padding: 15px 15px;
  }
}
</style>