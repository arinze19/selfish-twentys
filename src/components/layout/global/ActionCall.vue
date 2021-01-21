<template>
  <section>
    <div>
      <slot></slot>
    </div>

    <div :class="display">
      <slot name="call-to-action"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    display: {
      type: String,
      required: false,
    },
  },
};
</script>


<style scoped>
section {
  text-align: center;
  padding: 16px;
}

.inline {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


