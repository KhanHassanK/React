import { useState } from "react";

// Task 2: User Input Form
// Create a form that collects user input and displays it

function UserForm() {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  // State to store submitted data
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save submitted values
    setSubmittedData({ name, email, age });

    // Optional: clear form
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Name input */}
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />

        {/* Email input */}
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        {/* Age input */}
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />

        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>

      <br />

      {/* Display submitted data below the form */}
      {submittedData && (
        <h3>
          Hello {submittedData.name}, your email is {submittedData.email} and
          you are {submittedData.age} years old
        </h3>
      )}
    </div>
  );
}
// App Component

function App() {
  return (
    <div>
      <UserForm></UserForm>
    </div>
  );
}
export default App;
