import React, { useState, useEffect } from "react";

import "./App.css";

export default function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Fill the fields");
  }, []);

  function handleShowInfo() {
    alert(`Name: ${name}, Age: ${age}, City: ${city}, State: ${state}`);
  }

  return (
    <div>
      <div class="container">
        <form>
          <input
            placeholder="Type your name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Type your age "
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            placeholder="Type your city"
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            placeholder="Type your state "
            onChange={(e) => setState(e.target.value)}
          />
        </form>
        <button onClick={handleShowInfo}>Show info</button>

        <p> You clicked {count} time(s)</p>
        <button onClick={() => setCount(count + 1)}>Click here</button>
      </div>
    </div>
  );
}
