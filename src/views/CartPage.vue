<template>
  <div class="container mt-3">
    <div class="row" v-if="store.cart.length <= 0">
      <div class="col-12">
        <p class="text-center">No Products</p>
      </div>
    </div>
    <div class="row" v-else v-for="product in store.cart" :key="product.id">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h3>
              <strong>{{ product.name }}</strong>
            </h3>
            <p>
              Color: <span class="text-capitalize">{{ product.color }}</span>
            </p>
            <div class="d-flex align-items-center" style="gap: 0.75rem">
              <p class="mb-0">Amount: {{ product.amount }}</p>
              <button
                class="btn btn-dark btn-sm px-3"
                @click="store.removeFromCart(product.id)"
              >
                <strong>-</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
