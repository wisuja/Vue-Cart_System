import { reactive } from 'vue';

const store = reactive({
  cart: [],
  products: [
    {
      id: 1,
      name: 'Socks',
      description: 'Warm and fuzzy cotton socks',
      features: ['100% Cotton', 'Bacteria free', 'Variety of Colors'],
      colors: ['blue', 'green'],
      stock: 100,
    },
  ],
  addToCart(item) {
    let duplicateProduct = this.cart.find(
      (product) => product.name == item.name && product.color == item.color
    );

    if (duplicateProduct !== undefined) duplicateProduct.amount += item.amount;
    else {
      item.id = this.cart.length + 1;
      this.cart.push(item);
    }
  },
  removeFromCart(id) {
    let product = this.cart.find((item) => item.id == id);

    if (product === undefined) return;

    this.products.find((item) => item.name == product.name).stock += 1;

    if (product.amount > 1) product.amount -= 1;
    else this.cart = this.cart.filter((item) => item.id !== id);
  },
  decrementProductStock(id, amount) {
    this.products.find((item) => item.id == id).stock -= amount;
  },
});

export default store;
