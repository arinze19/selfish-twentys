<template>
  <section>
    <base-card>
      <h2>Review</h2>
    </base-card>
    <div class="container">
      <form>
        <div class="form-control">
          <label for="name">Name:</label><br />
          <input type="text" id="name" />
        </div>
        <div class="form-control">
          <label for="remark">One word for this product:</label><br />
          <input type="text" id="remark" />
        </div>
        <div class="form-control">
          <label for="rating">Star:</label>
          <select id="rating" name="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div class="form-control">
          <label for="comment">Comment:</label><br />
          <textarea name="comment" id="comment" cols="30" rows="10"></textarea>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>




<style scoped>
form {
  border: 1px solid black;
  padding: 15px;
  margin: 30px auto;
  max-width: 70rem;
}

.form-control {
    margin: 16px auto;
}

label {
    font-weight: bold;
    font-size: 24px;
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
    width: 80%;
    border-radius: 8px;
    border: 1px solid #a9a9a9;
    outline: none;
}

section {
  padding: 55px;
}

h2 {
  text-align: center;
}
</style>