1. useEffect allows you to perform side effects in functional components such as fetching data, directly manipulating the DOM, 
   setting timers, or subscribing to services.
2. Syntax:
   useEffect(() => {
   // Your side-effect logic here

   return () => {
    // Cleanup logic here (optional)
   };
   }, [dependencies]);  // There may be multiple dependencies. If it is empty array [] then it will run this code only once 
                        // when the component renders first time. if the component re-renders again and again then, 
                        // the effect will not run again.



// Example 1:
import React from 'react';
import { useState, useEffect  } from 'react'

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert('useEffect runs every render');
  });
  
  return (
    <>
       <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  )
}

export default App
// Explanation: Alert will show each time when count value will update/ when the component re-renders.


//Example 2:
import React from 'react';
import { useState,useEffect  } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    alert(`Count is ${count}, Step is ${step}`);
  }, [count, step]); // 👈 Multiple dependencies
  
  return (
    <>
      <h2>Count: {count}</h2>
      <h3>Step: {step}</h3>
      <button onClick={() => setCount(count + step)}>Increase Count</button>
      <button onClick={() => setStep(step + 1)}>Increase Step</button>
    </>
  )
}

export default App

//Explanation: When either of the button is clicked, useEffect alert's will show the result each time.


//Example 3:
import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Timer started");
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000); // increase count every second
    
    return () => {
      clearInterval(interval);
      console.log("Timer cleaned up");
    };
  }, []); // run only once when component mounts

  return 
    <h2>
      Timer: {count} seconds
    </h2>;
}
export default Timer;

// Explanation: When the component is removed from the screen, or before re-running this effect, cleanup function will 
// clean up the timer. It stops the timer, preventing memory leaks or unwanted behavior if the component unmounts.

