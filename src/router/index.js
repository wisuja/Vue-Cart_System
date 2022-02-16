import { createRouter, createWebHistory } from 'vue-router';
import { CartPage, ProductsPage, ProductDetailPage } from '../views';

const routes = [
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage,
  },
  {
    path: '/products/:id',
    name: 'ProductDetailPage',
    component: ProductDetailPage,
    props: true,
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
