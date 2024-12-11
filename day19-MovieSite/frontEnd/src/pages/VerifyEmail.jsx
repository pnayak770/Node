import { Link, useNavigate } from "react-router-dom";
import instance from "../axiosConfig";
import { useState } from "react";

function VerifyEmail() {
  //fetch the token from the URL
  const URL = new URLSearchParams(window.location.search);

  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  //   console.log(URL);
  //   for (const p of URL) {
  //     console.log(p);
  //   }

  const token = URL.get("token");

  if (!token) {
    return (
      <h2>
        Missing Token. Go back to <Link to="/">Home</Link>
      </h2>
    );
  } else {
    //send token to backend for verification
    sendTokenToBackend();
  }

  async function sendTokenToBackend() {
    const response = await instance.post("/api/auth/verifyToken", {
      token: token,
    });
    console.log(response);
    if (response.status === 200)
      return navigate("/login?msg=verification_successful");

    if (response.status === 404) setMessage(response.message);
  }

  return <>{message.length > 0 ? <h3>{message}</h3> : ""}</>;
}

export default VerifyEmail;