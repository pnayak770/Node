//https://node-qt2t.onrender.com
import { useState } from 'react';
import axios from 'axios';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//https://node-qt2t.onrender.com
function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const [statusMessage, setStatusMessage] = useState("");
  // const [dataSaved, setDataSaved] = useState(false);

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:8080/sendEmail", { name, email, message });
      
  //     // Check for a successful response
  //     if (response.status === 200) {
  //       // setStatusMessage("Email sent successfully!");
  //       toast.success('Email sent successfully!', {
  //         position: toast.POSITION.TOP_RIGHT
  //       })
  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //       // setDataSaved(true); // Assuming this is to reset the form after success
  //     } else {
  //       // setStatusMessage("Failed to send email. Please try again.");


  //     }

  //   } catch (error) {
  //     console.error(error);
  //     setStatusMessage("Error sending email. Please try again later.");
  //   }
  // }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("https://node-qt2t.onrender.com/sendEmail", { name, email, message });

      if (response.status === 200) {
        toast.success("Email sent successfully!"); 
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message); 
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  }


  return (
    <>
      <div className='container'>
       
        <h2>NODEMAILER</h2>
        <form onSubmit={handleSubmit} className='form'>
          <input
            type="text"
            placeholder='Enter Name'
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder='Enter Email'
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder='Enter your message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>

          <button type='submit'>Submit</button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
