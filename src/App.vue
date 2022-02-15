<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Navbar></Navbar>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12 d-flex justify-content-end">
        <Cart
          :amount="amount"
          @clearSelectedAmount="clearSelectedAmount"
        ></Cart>
      </div>
    </div>
    <Product @addToCart="addToCart"></Product>
  </div>
</template>

<script>
import { Navbar, Cart, Product } from './components';

export default {
  name: 'App',
  data() {
    return {
      amount: 0,
    };
  },
  components: {
    Navbar,
    Cart,
    Product,
  },
  methods: {
    addToCart(value) {
      this.amount = value.amount;
    },
    clearSelectedAmount() {
      this.amount = 0;
    },
  },
};
</script>

<style></style>
