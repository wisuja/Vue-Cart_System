<template>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import { Navbar } from './components';

export default {
  components: {
    Navbar,
  },
};
</script>

<style></style>
