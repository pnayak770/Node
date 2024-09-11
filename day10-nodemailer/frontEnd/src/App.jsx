import { useState } from 'react'
import axios from 'axios'


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
     <h2>NODEMAILER</h2>
     <form action="" onSubmit={handleSubmit}>

      <input type="text" placeholder='enter name' value={name} name ="name" onChange={(e)=>setName(e.target.value)}/>

      <input type="email" placeholder='enter email' value={email}  name ="email" onChange={(e)=>setEmail(e.target.value)} />

      <textarea name="" id="" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>

      <button type='submit'>Submit</button>
     </form>
    </>
  )
}

export default App
