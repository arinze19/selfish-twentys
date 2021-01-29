export default {
    loadReviews(state, payload) {
        state.reviews = payload
    },
    addReview(state, payload) {
        state.reviews.push(payload)
    }
}