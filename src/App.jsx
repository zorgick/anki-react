export default function App() {
  let count = 0;

  function handleClick() {
    console.log(count)
    count = count + 1;
  }

  return (
    <>
      <button onClick={handleClick}>
        Next
      </button>
      <h3>  
        Current count: {count + 1}
      </h3>
    </>
  );
}

