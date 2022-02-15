<template>
  <h5>Cart ({{ cart }})</h5>
</template>

<script>
export default {
  name: 'Cart',
  props: ['amount'],
  data() {
    return {
      cart: 0,
    };
  },
  updated() {
    this.cart += this.amount;

    this.$emit('clear-selected-amount');
  },
};
</script>

<style></style>
