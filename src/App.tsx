import "./App.css";
import WithLag from "./WithLag";
import WithoutLag from "./WithoutLag";

function App() {
  return (
    <div className="App">
      <div>
        <h4>Scrolling with lag</h4>
        <WithLag />
      </div>
      <div>
        <h4>Scrolling without lag</h4>
        <WithoutLag />
      </div>
    </div>
  );
}

export default App;
