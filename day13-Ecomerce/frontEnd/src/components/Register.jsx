import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "",
  });
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8080/api/user/register",
      { ...user }
    );
    if (response.data.message === "success" || response.status === 201)
      setRegistrationStatus(true);
    else setRegistrationStatus(false);
  };

  return (
    <>
      {registrationStatus !== null ? (
        <h3>
          You can <Link to="/login">login</Link> now
        </h3>
      ) : registrationStatus === false ? (
        <h3>There was some problem. Try back later</h3>
      ) : (
        ""
      )}
      <form action="" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="First Name"
          name="fname"
          value={user.fname}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          name="lname"
          value={user.lname}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        <select name="" id="" value={user.role} onChange={handleChange}>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;