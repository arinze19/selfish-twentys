import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      reviews: [
        {
          name: "Jerry",
          remark: "Great!",
          star: 4,
          comment: "Really great stuff, more than i bargained for",
          id: "r1",
          date: "04-09-21"
        },
        {
          name: "Alison",
          remark: "WONDEFUL!",
          star: 5,
          comment: "can not recommend this enough. awesome job",
          id: "r2",
          date: "09-09-21"
        },
        {
          name: "Raymond",
          remark: "Nice",
          star: 3,
          comment: "Nice stuff, didn't have my size but really great",
          id: "r3",
          date: "04-10-21"
        },
        {
          name: "Arinze",
          remark: "Good",
          star: 3,
          comment: "Really nice, in love with the merino wool already",
          id: "r4",
          date: "14-01-21"
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
