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
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
      <ul>
        <li
          v-for="(feature, index) in features"
          v-text="feature"
          :key="index"
        ></li>
      </ul>
      <ul class="list-style-none p-0">
        <li
          v-for="(color, index) in colors"
          :key="index"
          class="d-inline-block"
          @mouseover="updateImage(index)"
        >
          <div
            id="circle"
            :class="isColorSelected(index)"
            :style="{ background: color }"
            @click="selectColor(index)"
          ></div>
        </li>
      </ul>
      <p class="mt-3" v-if="stock > 0">Stock: {{ stock }}</p>
      <p class="mt-3" v-else>Out of stock</p>

      <input
        type="number"
        id="amount"
        v-model="amount"
        class="form-control"
        min="0"
        :max="stock"
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
export default {
  name: 'Product',
  data() {
    return {
      name: 'Socks',
      description: 'Warm and fuzzy cotton socks',
      features: ['100% Cotton', 'Bacteria free', 'Variety of Colors'],
      colors: ['blue', 'green'],
      image: 'socks_blue.jpg',
      stock: 100,
      amount: 0,
      selectedColor: '',
    };
  },
  mounted() {
    this.selectedColor = this.colors[0];
  },
  computed: {
    isOutOfStock() {
      return this.stock <= 0;
    },
  },
  methods: {
    updateImage(index) {
      this.image = 'socks_' + this.colors[index] + '.jpg';
    },
    selectColor(index) {
      this.selectedColor = this.colors[index];
    },
    isColorSelected(index) {
      return {
        active: this.selectedColor == this.colors[index],
      };
    },
    increment() {
      if (this.amount >= this.stock) return;

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

      if (this.stock <= 0) {
        alert('Out of stock.');
        return;
      }

      this.$emit('add-to-cart', {
        amount: this.amount,
      });

      this.stock -= this.amount;

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
