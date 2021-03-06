import getters   from "./getters.js";
import mutations from "./mutations.js";
import actions   from "./actions.js";

export default {
  state() {
      return {
          idToken: null,
          localId: null
      }
  },
  getters,
  mutations,
  actions,
};