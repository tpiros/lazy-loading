import React from 'react';

const fibonacci = num => {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

const fib = fibonacci(42);

const Fibonacci = () => (
  <>
    <p>Hello, this is the <strong>Fibonacci</strong> component. For fun I calculated the 42nd Fibonacci number which is: { fib }.</p>
  </>
);

export default Fibonacci;
