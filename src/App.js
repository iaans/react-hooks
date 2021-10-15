import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState();

  const [age, setAge] = useState();

  const [city, setCity] = useState();

  const [state, setState] = useState();

  function handleShowInfo() {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}, State: ${state}`);
  }

  return (
    <div>
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

        <p>{name}</p>
        <p>{age}</p>
        <p>{city}</p>
        <p>{state}</p>
      </form>
      <button onClick={handleShowInfo}>Show info</button>
    </div>
  );
}
