import instance from "../axiosConfig";
import { useState } from "react";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
    phone: "",
  });
  const [message, setMessage] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formdata = new FormData(e.target);
      const finalData = Object.fromEntries(formdata.entries());
      // console.log(finalData);
      const response = await instance.post("/api/user/register", finalData);
      console.log(response);
      if (response.status === 201) setMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {message.length > 0 ? <h3>{message}</h3> : ""}
      <h2>Sign Up</h2>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={data.name}
          onChange={handleChange}
          autoFocus
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={data.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="phone"
          placeholder="Enter your Phone"
          value={data.phone}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="username"
          placeholder="Pick a Username"
          value={data.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Choose a strong password"
          value={data.password}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="cpassword"
          placeholder="Confirm password"
          value={data.cpassword}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;