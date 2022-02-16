<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-4" v-for="product in store.products" :key="product.id">
        <div class="card">
          <div class="card-header">
            <h5 class="font-weight-bold">{{ product.name }}</h5>
          </div>
          <div class="card-body">
            {{ product.description }}
          </div>
          <div class="card-footer">
            <router-link
              :to="{
                name: 'ProductDetailPage',
                params: {
                  id: product.id,
                },
              }"
              >See Details</router-link
            >
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
