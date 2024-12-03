import axios from "axios";
import { useState } from "react";

function NewUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/newUser", {
      name,
      age,
      city,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Add New User</button>
    </form>
  );
}

export default NewUser;