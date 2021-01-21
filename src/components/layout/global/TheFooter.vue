<template>
  <section>
    <div>
      <h2>Stay in Touch</h2>
      <p>be the first to know when we have cool stuff</p>
        <form>
          <input type="text" />
        </form>
        <base-button secondary> Sign Up</base-button>
    </div>
  </section>
</template>


<style scoped>
section {
  width: 100%;
  height: 50vh;
  background-color: #212a2f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  width: 300px;
  border: none;
  border-bottom: 2px solid #dcdcdc;
  padding: 10px;
  background-color: #7b858a;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1em;
}

input:focus {
  outline: none;
  border: 2px solid #dcdcdc;
}

@media(max-width: 768px) {
  p {
    font-size: 14px;
  }

  
}

</style>