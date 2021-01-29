<template>
  <div class="container">
    <h1>Feedback from our customers.</h1>
    <p>
      You can add a review to this product
      <router-link :to="reviewLink">here</router-link>
    </p>
    <h4 v-if="reviewsIsEmpty">
      There are currently no reviews for this product
      <router-link :to="reviewLink">Add a review?</router-link>
    </h4>
    <ul v-else>
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
  props: ["id"],
  components: { ReviewsItem },
  methods: {
    async loadReviews(reviewId) {
      await this.$store.dispatch("reviewsModule/loadReviews", reviewId);
    },
  },

  computed: {
    reviews() {
      return this.$store.getters["reviewsModule/reviews"];
    },
    reviewsIsEmpty() {
      return this.$store.getters["reviewsModule/reviewsIsEmpty"] === 0
        ? true
        : false;
    },
    reviewLink() {
      if (!this.isLoggedIn) {
        return "/auth?redirect=" + this.id;
      } else {
        return "/" + this.id + "/review";
      }
    },
    isLoggedIn() {
      return this.$store.getters["isLoggedIn"];
    },
  },

  created() {
    this.loadReviews(this.id);
  },
};
</script>

<style scoped>
ul {
  padding: 0;
}

h1 {
  text-align: center;
  margin: 40px;
  margin-bottom: 10px;
}

h4 {
  text-align: center;
}

p {
  text-align: center;
  margin-top: 0;
  margin-bottom: 40px;
}

.container {
  padding: 55px;
}

@media (max-width: 767px) {
  .container {
    padding: 0;
  }
}
</style>