export default {
  async loadProducts({ commit }) {
    const response     = await fetch("https://selfish-twentys-default-rtdb.firebaseio.com/products.json");
    const responseData = await response.json();
    const productsList = [];

    if (!response.ok) {
      const error = new Error(response.message || "An error occured...");
      throw error;
    }

    for (let item in responseData) {
      const product = {
        id: item,
        name: responseData[item].name,
        description: responseData[item].description,
        meta: responseData[item].meta,
        imageUrl: responseData[item].imageUrl,
        price: responseData[item].price,
      };

      productsList.push(product);
    }

    commit("loadProducts", productsList);
  },
};
