import getters   from './getters.js';
import mutations from './mutations.js';
import actions   from './actions.js';


export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          name: "Yeezy Sply",
          description: "Our original sneaker made with merino wool",
          imageUrl: "https://cutt.ly/TjF3uyZ",
          price: "99.99",
          id: 'p1'
        },
        {
          name: "Stan smiths",
          description: "Our low top sneaker with merino wool",
          imageUrl: "https://cutt.ly/TjF3Pm6",
          price: "77.99",
          id: 'p2'
        },
        {
          name: "Mikky sole hoodies",
          description: "Our weather ready hoody",
          imageUrl: "https://cutt.ly/jjF5fGB",
          price: "25.00",
          id: 'p3'
        },
        {
          name: "deluxe t-shirt",
          description: "Our everyday go to deluxe wear",
          imageUrl: "https://cutt.ly/gjF5XMy",
          price: "53.00",
          id: 'p4'
        },
        {
          name: "deluxe sock",
          description: "Our everyday go to sock",
          imageUrl: "https://cutt.ly/AjF6S1h",
          price: "53.00",
          id: 'p5'
        },
        {
          name: "deluxe shorts",
          description: "Our everyday go to deluxe wear",
          imageUrl: "https://cutt.ly/BjGqiWl",
          price: "53.00",
          id: 'p6'
        },
      ],
    };
  },
  getters,
  mutations,
  actions
};
