<template>
  <div class="menu" @click="toggleMenu">
    Menu
  </div>
</template>


<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["toggle-nav"],
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      this.$emit("toggle-nav", this.isOpen);
    },
  },
};
</script>


<style scoped>
.menu {
  position: relative;
}

.bar {
  width: 25px;
  height: 2px;
  background-color: black;
  margin-bottom: 2px;
  transition: all 0.3s ease-in-out;
}

.rotate-right {
  transform: rotate(-45deg);
}

.rotate-left {
  transform: rotate(45deg);
  position: absolute;
  bottom: -1px;
}

.fade {
  opacity: 0;
}
</style>