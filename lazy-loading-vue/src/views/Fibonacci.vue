<template>
  <p>
    Hello, this is the <strong>Fibonacci</strong> component. For fun I
    calculated the 42nd Fibonacci number which is: {{ fibonacci }}.
  </p>
</template>

<script>
const fibonacci = num => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};
const myFibonacci = fibonacci(42);

export default {
  name: 'Fibonacci',
  data: () => ({
    fibonacci: 0
  }),
  created() {
    this.fibonacci = myFibonacci;
  }
};
</script>
