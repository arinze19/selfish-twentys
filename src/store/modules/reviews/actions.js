export default {
  addReview({ commit }, payload) {
    const date = 
    new Date()
    .toLocaleDateString()
    .slice(0, 10)
    .replaceAll('/', '-');
    
    payload.id = `p${Math.floor(Math.random() * 20)}`;
    payload.date = date;

    commit("addReview", payload);
  },
};
