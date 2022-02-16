<template>
  <div class="row">
    <div class="col-4">
      <img
        :src="require('../assets/images/' + image)"
        alt="Product"
        class="img-fluid"
      />
    </div>
    <div class="col-8">
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <ul>
        <li
          v-for="(feature, index) in product.features"
          v-text="feature"
          :key="index"
        ></li>
      </ul>
      <ul class="list-style-none p-0">
        <li
          v-for="(color, index) in product.colors"
          :key="index"
          class="d-inline-block"
        >
          <div
            id="circle"
            :class="isColorSelected(index)"
            :style="{ background: color }"
            @click="selectColor(index)"
          ></div>
        </li>
      </ul>
      <p class="mt-3" v-if="product.stock > 0">Stock: {{ product.stock }}</p>
      <p class="mt-3" v-else>Out of stock</p>

      <input
        type="number"
        id="amount"
        v-model="amount"
        class="form-control"
        min="0"
        :max="product.stock"
      />
      <div class="mt-3">
        <button
          class="btn btn-dark px-4"
          style="margin-right: 0.1rem"
          @click="increment()"
        >
          <strong>+</strong>
        </button>
        <button class="btn btn-dark px-4" @click="decrement()">
          <strong>-</strong>
        </button>
      </div>
      <button
        class="btn btn-primary mt-3"
        @click="addToCart()"
        :disabled="isOutOfStock"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
import store from '../store';
export default {
  props: ['product'],
  data() {
    return {
      amount: 0,
      selectedColor: '',
    };
  },
  beforeMount() {
    this.selectedColor = this.product.colors[0];
  },
  computed: {
    image() {
      return 'socks_' + this.selectedColor + '.jpg';
    },
    isOutOfStock() {
      return this.product.stock <= 0;
    },
  },
  methods: {
    selectColor(index) {
      this.selectedColor = this.product.colors[index];
    },
    isColorSelected(index) {
      return {
        active: this.selectedColor == this.product.colors[index],
      };
    },
    increment() {
      if (this.amount >= this.product.stock) return;

      this.amount++;
    },
    decrement() {
      if (this.amount <= 0) return;

      this.amount--;
    },
    addToCart() {
      if (this.amount <= 0) {
        alert('Amount cannot be lower than 0');
        return;
      }

      if (this.product.stock <= 0) {
        alert('Out of stock.');
        return;
      }

      let payload = [...Array(this.amount).keys()].map((item) => {
        return {
          color: this.selectedColor,
        };
      });

      store.addToCart(payload);
      store.decrementProductStock(this.product.id, this.amount);

      this.amount = 0;
    },
  },
};
</script>

<style>
#circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 0.5rem;
  cursor: pointer;
}

#circle.active {
  border: 5px solid darkgray !important;
}
</style>
