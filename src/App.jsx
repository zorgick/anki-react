import { useState } from "react";

function UserCount() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState("John");

  function handleClick() {
    setCount(count + 1);
    setUser(count % 2 ? "John" : "Janet");
  }

  function handleUserClick() {
    setUser(user == "John" ? "Janet" : "John");
  }

  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <button onClick={handleUserClick}>
        Next user
      </button>
      <h3>  
        {count} {user}
      </h3>
    </>
  );
}

export default function App() {
  return (
    <>
      <UserCount />
      <UserCount />
    </>
  );
}
