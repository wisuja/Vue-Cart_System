import { reactive } from 'vue';

export const store = reactive({
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
  addToCart(items) {
    this.cart.push(...items);
  },
  decrementProductStock(id, amount) {
    this.products.find((item) => item.id == id).stock -= amount;
  },
});
