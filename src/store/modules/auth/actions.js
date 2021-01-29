export default {
    // ==================== sign up action
  async signUp({ commit }, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAwh7KzKYu4_RxJ6Twz40TrubLdK6hLvtg",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const error = new Error(response.message || "something went wrong");
      throw error;
    }

    const responseData = await response.json();

    const authCredentials = {
      idToken: responseData.idToken,
      localId: responseData.localId,
    };

    commit("signIn", authCredentials);
  },



  // ================== sign in action

  async signIn({ commit }, payload) {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAwh7KzKYu4_RxJ6Twz40TrubLdK6hLvtg",
      {
        method: "POST",
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
      const error = new Error(response.message || "something went wrong");
      throw error;
    }

    const responseData = await response.json();

    const authCredentials = {
      idToken: responseData.idToken,
      localId: responseData.localId,
    };

    commit("signIn", authCredentials);
  },
};
