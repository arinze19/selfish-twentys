<template>
  <section>
    <teleport to=".dialog">
      <base-loader :show="isLoading"></base-loader>
    </teleport>

    <div class="login">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-control">
          <label for="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            v-model.trim="loginEmail"
            :class="{ invalid: !loginEmailIsValid }"
          />
          <p v-if="!loginEmailIsValid">Enter a valid email</p>
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            v-model.trim="loginPassword"
            :class="{ invalid: !loginPasswordIsValid }"
          />
          <p v-if="!loginPasswordIsValid">
            Enter a password with at least 5 chracters
          </p>
        </div>
        <base-button cart> Sign In</base-button>
      </form>
      <p class="forgot-password">Forgot Password?</p>
    </div>

    <div class="sign-up">
      <h2>Create an account</h2>
      <p>We <strong>NEVER</strong> save credit card info</p>
      <p>
        Registering with us makes checkout easier and faster and enables us
        recommend better products based on your taste
      </p>
      <form @submit.prevent="signUp">
        <div class="form-control">
          <label for="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            v-model.trim="signUpName"
            :class="{ invalid: !signUpNameIsValid }"
          />
          <p v-if="!signUpNameIsValid">Please provide a valid name</p>
        </div>
        <div class="form-control">
          <label for="signup-email">Email</label>
          <br />
          <input
            type="text"
            id="signup-email"
            v-model.trim="signUpEmail"
            :class="{ invalid: !signUpEmailIsValid }"
          />
          <p v-if="!signUpEmailIsValid">Please provide a valid email</p>
        </div>
        <div class="form-control">
          <label for="signup-password">Password</label>
          <br />
          <input
            type="password"
            id="signup-password"
            v-model.trim="signUpPassword"
            :class="{ invalid: !signUpPasswordIsValid }"
          />
          <p v-if="!signUpPasswordIsValid">Please provide a valid password</p>
        </div>
        <base-button cart> Register </base-button>
      </form>
    </div>
    <base-alert :show="showAlert"> {{ alertMessage }}</base-alert>
  </section>
</template>



<script>
export default {
  data() {
    return {
      loginPassword: "",
      loginEmail: "",
      signUpName: "",
      signUpEmail: "",
      signUpPassword: "",
      loginPasswordIsValid: true,
      loginEmailIsValid: true,
      signUpNameIsValid: true,
      signUpPasswordIsValid: true,
      signUpEmailIsValid: true,
      isLoading: false,
      showAlert: false,
      alertMessage: null
    };
  },
  methods: {
    async login() {
      this.loginPassowrdIsValid = true;
      this.loginEmailIsValid = true;

      const loginEmail =
        this.loginEmail === "" || !this.loginEmail.includes("@");
      const loginPassword = this.loginPassword === "" || this.loginPassword < 5;
      if (loginEmail) {
        this.loginEmailIsValid = false;
        return;
      }
      if (loginPassword) {
        this.loginPasswordIsValid = false;
        return;
      }

      this.isLoading = true;
      const user = {
        email: this.loginEmail,
        password: this.loginPassword,
      };

      try {

        await this.$store.dispatch("signIn", user);
        this.isLoading = false;

        const redirectUrl = '/' + (this.$route.query['redirect'] || '')
        if(redirectUrl.length > 5) {
          this.$router.replace(redirectUrl + '/review')
        } else {
          this.$router.replace(redirectUrl)
        }
      } 
      catch(error) {

        this.showAlert    = true;
        this.alertMessage = error;
        this.isLoading = false; 

        setTimeout(() => {
          this.showAlert = false
        }, 5000)
      }
    },

    

    async signUp() {
      this.signUpNameisValid = true;
      this.signUpPasswordIsValid = true;
      this.signUpEmailIsValid = true;

      const signUpName = this.signUpName === "" || this.signUpName < 5;
      const signUpEmail =
        this.signUpEmail === "" || !this.signUpEmail.includes("@");
      const signUpPassword =
        this.signUpPassword === "" || this.signUpPassword < 5;

      if (signUpEmail) {
        this.signUpEmail = false;
        return;
      }
      if (signUpName) {
        this.signUpName = false;
        return;
      }
      if (signUpPassword) {
        this.signUpPassword = false;
        return;
      }

      this.isLoading = true;

      const newUser = {
        name: this.signUpName,
        email: this.signUpEmail,
        password: this.signUpPassword,
      };
      try {

        await this.$store.dispatch("signUp", newUser);
        this.isLoading = false;

 
        const redirectUrl = '/' + (this.$route.query['redirect'] || '')
        if(redirectUrl.length > 5) {
          this.$router.replace(redirectUrl + '/review')
        } else {
          this.$router.replace(redirectUrl)
        }
      } 
      catch(error) {

        this.showAlert    = true;
        this.alertMessage = error;
        this.isLoading = false; 

        setTimeout(() => {
          this.showAlert = false
        }, 5000)
      }
    },
  },
};
</script>




<style scoped>
section {
  background-color: #cedfe4;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 55px;
  padding-top: 200px;
}

.login,
.sign-up {
  width: 40%;
  padding: 10px;
}

.sign-up p {
  letter-spacing: 0.5px;
  line-height: 1.5;
}

.form-control p {
  text-align: center;
  color: tomato;
}

.forgot-password {
  text-align: center;
  text-decoration: underline;
}

.form-control {
  margin-top: 10px;
  margin-bottom: 10px;
}

label {
  font-size: 23px;
}

input {
  padding: 15px;
  width: 90%;
  margin-top: 10px;
  outline: none;
}

.invalid {
  border: 1px solid tomato;
}

@media (max-width: 768px) {
  .login,
  .sign-up {
    width: 100%;
    padding: 0;
  }

  input {
    width: 100%;
  }
}
</style>