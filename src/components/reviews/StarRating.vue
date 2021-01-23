<template>
  <div class="container">
    <i class="las la-star" v-for="star in fullStars" :key="star"></i>
    <i class="lar la-star" v-for="star in emptyStars" :key="star"></i>
  </div>
</template>

<script>
export default {
  props: ["star"],
  data() {
    return {
      fullStars: [],
      emptyStars: [],
    };
  },
  methods: {
    createStars(rating, starArray) {
      for (let i = 0; i < rating; i++) {
        starArray.push(`star-${i}`);
      }
    },
  },
  computed: {
    emptyRating() {
      return 5 - this.rating;
    },
    rating() {
      return this.star;
    },
  },
  created() {
    this.createStars(this.rating, this.fullStars);
    this.createStars(this.emptyRating, this.emptyStars);
  },
};
</script>


<style scoped>
@media(max-width: 768px) {
  .container {
    padding-bottom: 10px;
  }
}
</style>
