import React, { Suspense, useState, lazy } from 'react';
// import Fibonacci from './Fibonacci';
const Fibonacci = lazy(() => import('./Fibonacci'));

const Home = () => {
  const [showFibonacci, setShowFibonacci] = useState(false)
  const showMe = () => setShowFibonacci(!showFibonacci);
  return (
  <>
    <p>I am the <strong>home</strong> component.</p>
    <button onClick={showMe}>{ showFibonacci ? 'Hide' : 'Show' }</button>
    
    {/* { showFibonacci ? <Fibonacci /> : '' } */}
    { showFibonacci ? <Suspense fallback={<div>Loading...</div>}> <Fibonacci /></Suspense> : '' }
  </>
)};

export default Home;