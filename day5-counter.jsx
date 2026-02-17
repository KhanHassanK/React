import { useState } from "react";
// Task 1: Counter Component
// Build a counter with increment, decrement, and reset buttons
function Counter() {
  // using useState to manage count
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Adding some CSS style */}
      <h1
        style={{
          border: "2px solid black",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        Count: {count}
      </h1>
      {/*Creating three buttons: Increment (+1), Decrement (-1), Reset (to 0) */}
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          margin: "5px",
          padding: "10px 15px",
          borderRadius: "5px",
        }}
        onClick={() => setCount(count + 1)}
      >
        +1
      </button>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          margin: "5px",
          padding: "10px 15px",
          borderRadius: "5px",
        }}
        onClick={() => setCount(count - 1)}
      >
        -1
      </button>
      <button
        style={{
          backgroundColor: "grey",
          color: "white",
          border: "none",
          margin: "5px",
          padding: "10px 15px",
          borderRadius: "5px",
        }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>

      <br />
      <br />

      {/* Bonus buttons: Add increment by 5 and decrement by 5*/}
      <button
        style={{
          backgroundColor: "green",
          color: "white",
          border: "none",
          margin: "5px",
          padding: "10px 15px",
          borderRadius: "5px",
        }}
        onClick={() => setCount(count + 5)}
      >
        +5
      </button>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          border: "none",
          margin: "5px",
          padding: "10px 15px",
          borderRadius: "5px",
        }}
        onClick={() => setCount(count - 5)}
      >
        -5
      </button>
    </div>
  );
}

// App Component

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}
export default App;

