<template>
  <div>
    <p>I am the <strong>home</strong> component.</p>
    <button v-on:click="showMe">{{ showFibonacci ? 'Hide' : 'Show' }}</button>

    <div v-if="showFibonacci">
      <Fibonacci />
    </div>
  </div>
</template>

<script>
import Fibonacci from './Fibonacci.vue';
export default {
  name: 'Home',
  data: () => ({
    showFibonacci: false
  }),
  methods: {
    showMe: function() {
      this.showFibonacci = !this.showFibonacci;
    }
  },
  components: {
    Fibonacci
    // Fibonacci: () => import('./Fibonacci.vue')
  }
};
</script>
