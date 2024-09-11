import { useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const [dataSaved,setDataSaved]=useState(false);

  async function handleSubmit(e){
    e.preventDefault();
    try{

      const response = await axios.post("https://node-qt2t.onrender.com/sendEmail",{name,email,message});
   
      if(response.status==="success"&&response.statusText==="success"){
       setDataSaved(!dataSaved);
       alert("email sent");
      }
    }catch(error){
      console.log(error);
    }
   
   
   
  }

 

  return (
    <>
    <div className='container'>

     <h2>NODEMAILER</h2>
     <form action="" onSubmit={handleSubmit} className='form'>

      <input type="text" placeholder='Enter Name' value={name} name ="name" onChange={(e)=>setName(e.target.value)}/>

      <input type="email" placeholder='Enter Email' value={email}  name ="email" onChange={(e)=>setEmail(e.target.value)} />

      <textarea name="" id="" placeholder='Enter your message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>

      <button type='submit'>Submit</button>
     </form>
    </div>
    </>
  )
}

export default App
