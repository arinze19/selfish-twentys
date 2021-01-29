<template>
  <div :class="{ backdrop: isActive }">
    <ul>
      <li @click="closeNav">
        <router-link to="/products"> Men</router-link>
      </li>
      <li @click="closeNav">
        <router-link to="/products"> Women</router-link>
      </li>
      <li @click="closeNav">
        <router-link to="/pages/our-material"> Our Material</router-link>
      </li>
      <li @click="closeNav">
        <p @click="logout" v-if="isLoggedIn">Log Out</p>
        <router-link to="/auth" v-else>Login </router-link>
      </li>
      <li @click="closeNav">
        <router-link to="/help"> Help</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  emits: ["close-nav"],
  props: {
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    closeNav() {
      this.$emit("close-nav", false);
    },
    logout() {
      this.$store.dispatch("logOut")
      this.$router.replace('/')
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["isLoggedIn"]
    }
  }
};
</script>


<style scoped>
.backdrop {
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: white;
  transition: all 0.5s ease-in-out;
  position: fixed;
}

ul {
  margin: 50px 0 0 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

li {
  list-style-type: none;
  border-bottom: 1px solid #212a2f;
  font-size: 23px;
  padding-bottom: 30px;
  padding-left: 21px;
  padding-top: 30px;
  text-transform: uppercase;
  font-weight: 700;
}

li:nth-child(4),
li:last-child {
  font-weight: 400;
  text-transform: none;
}

a,
p {
  text-decoration: none;
  color: #2e2e2e;
  margin: 0;
}
</style>