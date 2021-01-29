export default {
    isLoggedIn(state) {
        const userLoggedIn = state.idToken && state.localId
        return !!userLoggedIn
    }
}