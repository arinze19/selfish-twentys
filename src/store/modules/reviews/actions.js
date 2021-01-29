export default {
  async addReview({ commit }, payload) {
    const date = 
    new Date()
    .toLocaleDateString()
    .slice(0, 10)
    .replaceAll('/', '-');

    payload.date = date;

    const response = await fetch(`https://selfish-twentys-default-rtdb.firebaseio.com/reviews/${payload.id}.json`, {
      method: 'POST',
      body: JSON.stringify(payload)
    })

    if(!response.ok) {
      const error = new Error(response.message || 'An error occured...')
      throw error 
    }

    commit("addReview", payload);
  },

  async loadReviews({ commit }, payload) {
    const response     = await fetch(`https://selfish-twentys-default-rtdb.firebaseio.com/reviews/${payload}.json`)
    const responseData = await response.json()
    const reviewsList  = []

    for(let item in responseData) {
      const review = {
        id: item,
        name: responseData[item].name,
        remark: responseData[item].remark,
        star: responseData[item].star,
        comment: responseData[item].comment,
        date: responseData[item].date
      }

      reviewsList.push(review)
    }

    commit("loadReviews", reviewsList)
  }
};
