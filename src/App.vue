<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 px-0">
        <Navbar></Navbar>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12 d-flex justify-content-end">
        <Cart></Cart>
      </div>
    </div>
    <div v-for="(product, index) in store.products" :key="index">
      <Product :product="product"></Product>
    </div>
  </div>
</template>

<script>
import { store } from './store';
import { Navbar, Cart, Product } from './components';

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    Navbar,
    Cart,
    Product,
  },
};
</script>

<style></style>
