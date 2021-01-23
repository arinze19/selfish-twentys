<template>
  <li>
    <div class="reviewer-info">
      <strong>{{ name }}</strong>
      <p>{{ date }}</p>
    </div>
    <star-rating :star="star"></star-rating>
    <div class="comment">
      <strong>{{ remark }}</strong>
      <p>{{ comment }}</p>
    </div>
  </li>
</template>


<script>
import StarRating from "./StarRating.vue";

export default {
  props: ["name", "comment", "date", "star", "remark"],
  components: { StarRating },
};
</script>


<style scoped>
li {
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  border-top: 1px solid #cccccc;
  padding: 15px;
  width: 90%;
  margin: 0 auto;
}

li:not(li:last-child) {
  border-bottom: 1px solid #cccccc;
}

.comment {
  width: 30%;
}

@media(max-width: 767px) {
  li {
    display: block;
  }

  .reviewer-info p {
    margin: 5px 0;
  }

  .comment {
    width: 100%;
  }
}
</style>