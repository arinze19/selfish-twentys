<template>
  <section>
    <main>
      <div class="form">
        <p>be the first to know when we have cool stuff</p>
        <form>
          <input type="text" />
        </form>
        <base-button tertiary> Sign Up</base-button>
      </div>
      <div class="footer-grid">
        <div class="footer-links">
          <h4>Help</h4>
          <ul>
            <li>1-234-5678-9000</li>
            <li>1-234-5678-9001(Text)</li>
            <li>FAQ/Contact Us</li>
            <li>Returns/Exchanges</li>
            <li>help@selfishtwentys.app</li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Company</h4>
          <ul>
            <li>Affiliate Programs</li>
            <li>Our Story</li>
            <li>Our Mission</li>
            <li>Our Materials</li>
            <li>Wholesale</li>
            <li>Press</li>
            <li>Legal</li>
            <li>Careers</li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Shop</h4>
          <ul>
            <li>Mens Apparel</li>
            <li>Womens Apparel</li>
            <li>GiftCards/Discounts</li>
            <li>Socks</li>
            <li>store locations</li>
          </ul>
        </div>
      </div>
    </main>
  </section>
</template>


<style scoped>
section {
  width: 100%;
  background-color: #212a2f;
  color: white;
}

main {
  max-width: 1440px;
  margin: 0 auto;
}

input {
  width: 300px;
  border: none;
  border-bottom: 2px solid #dcdcdc;
  padding: 15px;
  background-color: #7b858a;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1em;
  color: white;
}

input:focus {
  outline: none;
  border: 2px solid #dcdcdc;
}

.form {
  padding: 30px 55px 0;
}

.form p {
  font-size: 14px;
  margin-bottom: 5px;
}

.footer-grid {
  display: flex;
  justify-content: space-around;
  max-width: 40rem;
}

.footer-links {
  padding: 25px;
}

ul {
  padding: 0;
  margin: 0;
}

h4 {
  margin-bottom: 0;
}

li {
  list-style: none;
  padding: 10px 0;
  font-size: 13px;
  cursor: pointer;
}

@media (max-width: 767px) {
  .footer-grid {
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  .footer-links {
    padding: 10px;
  }

  .form {
    padding: 30px 30px 0;
  }

  input {
    width: 280px;
  }
}
</style>