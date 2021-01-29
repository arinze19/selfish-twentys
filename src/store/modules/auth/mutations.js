export default {
    signIn(state, payload) {
        state.idToken = payload.idToken
        state.localId = payload.localId
    }
}