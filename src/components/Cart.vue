<template>
  <h5>Cart ({{ store.cart.length }})</h5>
</template>

<script>
import { store } from '../store';
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style></style>
