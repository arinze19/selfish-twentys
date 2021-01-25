import getters   from "./getters.js";
import mutations from "./mutations.js";
import actions   from "./actions.js";
 
export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          name: "Yeezy Sply",
          description: "Our original sneaker",
          meta:
            "the yeezy sply is the latest addition to our collection, designed to keep the weather out and keep your feet warm and cozy inside",
          imageUrl: [
            "https://cutt.ly/TjF3uyZ",
            "https://cutt.ly/FjHaJMe",
            "https://cutt.ly/AjHaVv4",
            "https://cutt.ly/xjHa0sF",
          ],
          price: "99.99",
          id: "p1",
        },
        {
          name: "Stan smiths",
          description: "Our low top merino sneaker",
          meta:
            "the stan smiths are specifically designed to keep your feet comfy with double layered wool coating in it's interior and a solid exterior made from natural products",
          imageUrl: [
            "https://cutt.ly/TjF3Pm6",
            "https://cutt.ly/CjHpFhq",
            "https://cutt.ly/AjHpZux",
            "https://cutt.ly/5jHpV56",
          ],
          price: "77.99",
          id: "p2",
        },
        {
          name: "Mikky sole hoodies",
          description: "Our weather ready hoody",
          meta:
            "carefully crafted hoodies made from the finest linen from saudi arabia. resistant to violent weather and perfect for casual outings",
          imageUrl: [
            "https://cutt.ly/vjHgUe0",
            "https://cutt.ly/sjHgQdn",
            "https://cutt.ly/cjHgJz6",
            "https://cutt.ly/IjHg9PX",
          ],
          price: "25.00",
          id: "p3",
        },
        {
          name: "Deluxe jean jacket",
          description: "Our premium deluxe wear",
          meta:
            "crafted directly from southampton, england, the deluxe jean jacket is a first of its kind in the market. keeping you stylish and fresh all day long",
          imageUrl: [
            "https://cutt.ly/7jHhU80",
            "https://cutt.ly/mjHhGay",
            "https://cutt.ly/IjHhX2G",
            "https://cutt.ly/gjHlLn2",
          ],
          price: "53.00",
          id: "p4",
        },
        {
          name: "Deluxe sock",
          description: "Our everyday go to wear",
          meta:
            "the deluxe socks is specifically tailored to fit your feets with delicate extra touchings to add a bit of style into the mix",
          imageUrl: [
            "https://cutt.ly/YjHlNLn",
            "https://cutt.ly/bjHjvJW",
            "https://cutt.ly/AjF6S1h",
            "https://cutt.ly/fjHjQko"
          ],
          price: "12.00",
          id: "p5",
        },
        {
          name: "Deluxe shorts",
          description: "Our everyday go to deluxe sock",
          meta:
            "the deluxe shorts are the very first and best of it's kind, prepared to keep you looking stylish and elegant anywhere you step in",
          imageUrl: [
            "https://cutt.ly/3jHjVpC",
            "https://cutt.ly/5jHjGtA",
            "https://cutt.ly/ajHjLTb",
            "https://cutt.ly/3jHjVpC",
          ],
          price: "53.00",
          id: "p6",
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};
