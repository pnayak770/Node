import instance from "../axiosConfig";
import { useState } from "react";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
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
      const response = await instance.post("/api/user/login", finalData);
      if (response.status === 200)
        setMessage(
          response.data + ". Check your email for a confirmation link."
        );
    } catch (error) {
      console.log(error);
      setMessage(error);
    }
  }

  return (
    <>
      {message.length > 0 && (
        <p>
          <em>{message}</em>
        </p>
      )}

      <h2>Log in to your account</h2>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter your Username"
          value={data.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={data.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;