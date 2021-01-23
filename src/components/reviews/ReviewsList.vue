<template>
  <div class="containe">
    <h1>Feedback from our customers.</h1>
    <ul>
      <reviews-item
        v-for="review in reviews"
        :name="review.name"
        :remark="review.remark"
        :star="review.star"
        :comment="review.comment"
        :key="review.id"
        :date="review.date"
      ></reviews-item>
    </ul>
  </div>
</template>

<script>
import ReviewsItem from "./ReviewsItem.vue";

export default {
  components: { ReviewsItem },
  computed: {
    reviews() {
      return this.$store.getters["reviewsModule/reviews"];
    },
  },
};
</script>

<style scoped>
ul {
  padding: 0
}

h1 {
  text-align: center;
  margin: 40px;
}

.container {
  padding: 55px;
}
</style>