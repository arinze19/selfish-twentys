export default {
    signIn(state, payload) {
        state.idToken = payload.idToken
        state.localId = payload.localId
    },

    logOut(state) {
        state.idToken = null;
        state.localId = null
    }
}