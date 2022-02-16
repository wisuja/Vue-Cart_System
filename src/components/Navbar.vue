<template>
  <nav
    class="navbar navbar-expand navbar-dark bg-success d-flex justify-content-between align-items-center px-3"
  >
    <router-link to="/products" class="navbar-brand">Cart System</router-link>

    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to="/products" class="nav-link">Products</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cart" class="nav-link"
          >Cart ({{ totalCartAmount }})</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
import store from '../store';

export default {
  name: 'Navbar',
  data() {
    return {
      store,
    };
  },
  computed: {
    totalCartAmount() {
      if (store.cart.length == 0) return 0;

      return store.cart.reduce((total, current) => {
        return (total += current.amount);
      }, 0);
    },
  },
};
</script>

<style></style>
