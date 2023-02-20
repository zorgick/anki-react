import { useState, useLayoutEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    console.log("=== click ===");
    // Will the both be batched?
    setCount((c) => c + 1);
    setFlag((f) => !f);
    fetchSomething().then(() => {
      console.log("=== click promise ===");
      // Will the both be batched?
      setCount((c) => c + 1);
      setFlag((f) => !f);
    });
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      <LogEvents />
    </div>
  );
}

function LogEvents(props) {
  useLayoutEffect(() => {
    console.log("Commit");
  });
  console.log("Render");
  return null;
}

function fetchSomething() {
  return new Promise((resolve) => setTimeout(resolve, 100));
}
