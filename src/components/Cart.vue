<template>
  <button class="btn btn-light border" type="button">
    <h5>Cart ({{ store.cart.length }})</h5>
  </button>
</template>

<script>
import store from '../store';
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style></style>
