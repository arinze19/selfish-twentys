<template>
  <section>
    <h2>Reviews</h2>
    <p>
      Reviews help us make improvements to our existing product(s). please leave
      a review
    </p>
    <hr />
    <div class="container">
      <div class="stuff">
        <form @submit.prevent="addReview">
          <div class="form-control">
            <label for="name">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              v-model.trim="name"
              :class="{ invalid: !nameIsValid }"
            />
            <p v-if="!nameIsValid">Please enter a name</p>
          </div>
          <div class="form-control">
            <label for="remark">One word for this product:</label>
            <br />
            <input
              type="text"
              id="remark"
              v-model.trim="remark"
              :class="{ invalid: !remarkIsValid }"
            />
            <p v-if="!remarkIsValid">Please enter a word</p>
          </div>
          <div class="form-control">
            <label for="rating">Star:</label>
            <select id="rating" name="rating" v-model.number="star">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div class="form-control">
            <label for="comment">Comment:</label>
            <br />
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              v-model.trim="comment"
              :class="{ invalid: !commentIsValid }"
            ></textarea>
            <p v-if="!commentIsValid">Please enter a comment</p>
          </div>
          <base-button cart>Submit Review</base-button>
        </form>
      </div>
    </div>
      <base-alert :show="successAlert"> <b>Review Sent</b></base-alert>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      remark: "",
      star: 1,
      comment: "",
      nameIsValid: true,
      remarkIsValid: true,
      commentIsValid: true,
      successAlert: false,
    };
  },
  methods: {
    async addReview() {
      this.nameIsValid    = true;
      this.remarkIsValid  = true;
      this.commentIsValid = true;

      if (this.name === "") {
        this.nameIsValid = false;
        return;
      }
      if (this.remark === "") {
        this.remarkIsValid = false;
        return;
      }
      if (this.comment === "") {
        this.commentIsValid = false;
        return;
      }

      const newReview = {
        name: this.name,
        remark: this.remark,
        star: this.star,
        comment: this.comment,
        id: this.$route.params.id
      };
      await this.$store.dispatch("reviewsModule/addReview", newReview);
      this.showSuccessAlert();

      this.name = "";
      this.remark = "";
      this.comment = "";
    },
    showSuccessAlert() {
      this.successAlert = true;
      setTimeout(() => {
        this.successAlert = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
form {
  padding: 15px;
  max-width: 70rem;
}

.form-control {
  margin: 16px auto;
}

.form-control p {
  color: tomato;
}

label {
  font-weight: bold;
  font-size: 19px;
}

select {
  width: 50px;
  height: 25px;
  text-align: center;
}

option {
  padding: 10px;
}

input,
textarea {
  padding: 15px;
  width: 90%;
  border: 2px solid#212a2f;
  outline: none;
}

section {
  padding: 55px;
  position: relative;
}

p,
h2 {
  text-align: center;
}

p {
  font-size: 14px;
}

hr {
  background-color: #212a2f;
  height: 2px;
  border: none;
}

.invalid {
  border-color: tomato;
}


@media (max-width: 767px) {
  input {
    padding: 10px;
  }

  section {
    padding: 55px 10px;
  }

  label {
    font-size: 16px;
  }
}
</style>