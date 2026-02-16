import { useState } from "react";
// Task 1: Simple Component with Props
// Create a functional component that displays a message passed as a prop

// Creating a MessageCard component
function MessageCard({ title, message, author }) {
  return (
    //Display the title, message, author
    //Styling it with css classes
    <div
      className="Card"
      style={{
        padding: "20px",
        width: "200px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h2 className="Card-title" style={{ color: "#0314a9" }}>
        {title}
      </h2>
      <p className="Card-message" style={{ color: "#c71376" }}>
        {message}
      </p>
      <span className="Card-author" style={{ color: "#88b412" }}>
        {author}
      </span>
    </div>
  );
}

//Task 2 : Toggle Component with State
//Use useState to toggle text or a button

// Creating a ToggleMessage Component

function ToggleMessage() {
  //using useState to track if message is visible
  const [isVisible, setIsVisible] = useState(false);

  return (
    //ToggleButton
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>

      {isVisible ? (
        // when button is clicked show visible : hidden  message
        <p>This message is now visible!</p>
      ) : (
        <p>Message is hidden</p>
      )}
    </div>
  );
}

// App Component

function App() {
  return (
    <div>
      <MessageCard
        title="This is Title-Card"
        message="Reusable React Component using Props"
        author="HassanK"
      ></MessageCard>
      <ToggleMessage />
    </div>
  );
}
export default App;

