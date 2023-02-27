import { useState, useLayoutEffect, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    console.log("=== click ===");
    setCount((c) => c + 1);
    setFlag((f) => !f);
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      <LogEvents count={count}/>
    </div>
  );
}

function LogEvents(props) {

useEffect(() => {
  console.log("setup", props.count);

  return () => {
    console.log("cleanup", props.count)
  }
});
  useLayoutEffect(() => {
    console.log("Commit");
  });
  console.log("Render");
  return null;
}
