<template>
  <div>
    <header>
      <menu-bar @toggle-nav="toggleNav" class="menu-bar"></menu-bar>
      <div class="tag-line">
        <p>The</p>
        <p>Superior</p>
        <p>Wear.</p>
      </div>


      <div class="logo">
        <router-link to="/">
          <img src="../../../assets/logo.png" alt="Selfish Twentys" />
        </router-link>
      </div>


      <nav>
        <div class="cart-icon" @click="openCart">
          <p>Cart ({{ cartItemsCount }})</p>
        </div>

        <ul>
          <li class="help">
            <router-link to="/help">Help</router-link>
          </li>
          <li>
            <p @click="logOut" v-if="isLoggedIn">Log Out </p>
            <router-link to="/auth" v-else>Login </router-link>
          </li>
          <li @click="openCart">
            <p> Cart ({{ cartItemsCount }}) </p>  
          </li>
        </ul>
      </nav>
    </header>
    <menu-list :isActive="isActive" v-if="isActive" @close-nav="closeNav"></menu-list>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleNav(status) {
      this.isActive = status;
    },
    closeNav() {
      this.isActive = false
    },
    openCart() {
      this.$emit('open-cart', true)
    }
  },
  computed: {
    cartItemsCount() {
      return this.$store.getters["ordersModule/cartItemsCount"]
    },
    isLoggedIn() {
      return this.$store.getters["authModule/isLoggedIn"]
    }
  },
};
</script>





<style scoped>
header {
  position: fixed;
  top: 0;
  height: 50px;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  z-index: 2;
  box-shadow: 5px 0 8px #d3d2d270;
}

.tag-line {
  width: 300px;
}

.menu-bar {
  display: none;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style-type: none;
  display: inline-block;
}

p {
  text-align: left;
  margin: 0;
  font-size: 12px;
}

.logo img {
  width: 50px;
  height: 25px;
}

nav a,
nav p {
  text-decoration: none;
  color: #2e2e2e;
  margin: 8px;
  padding: 16px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 14px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}

.cart-icon p {
  display: none;
  color: #2e2e2e;
}

nav a:hover,
nav p:hover {
  background-color: #f3f3f3;
}

@media (max-width: 770px) {
  .cart-icon p {
    font-size: 16px;
    padding: 0;
    margin: 0;
    display: block;
    text-transform: none;
    font-weight: normal;
  }

  .tag-line {
    display: none;
  }

  .menu-bar {
    display: inline-block;
  }

  ul {
    display: none;
  }

  .logo img {
    width: 40px;
    height: 20px;
  }

  header {
    height: 55px;
  }
}
</style>