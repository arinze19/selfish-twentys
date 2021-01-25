<template>
  <transition name="dialog">
    <div class="container" v-if="show">
      <header>
        <i class="las la-bell"></i>
        <i class="las la-times"></i>
      </header>
      <div class="alert">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style scoped>
.container {
  width: 200px;
  height: 80px;
  right: 30px;
  bottom: 30px;
  letter-spacing: 3px;
  position: fixed;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.alert {
  background-color: white;
  text-align: center;
  color: #212a2f;
  padding: 10px;
}

header {
  color: white;
  background-color: #212a2f;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

i {
  cursor: pointer;
}

/* ======================================= transition classes ========================== */

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: translateX(-30px);
}
</style>