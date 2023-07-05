import React from 'react'
import { useState } from 'react';
import axios from 'axios' ;
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export default function Login() {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e)=>{
    e.preventDefault();
    // console.log(name , email , password);
    try {
      
      const {data} =  await axios.post("https://fintracker.onrender.com/api/v1/users/login" , {
      email , password
      }  ,{
        headers : {
            "Content-Type": "application/json",
        }, 
        withCredentials: true,
    });
    toast.success(data.message);
    navigate("/");

    } catch (error) {
      toast.error(error.response.data.message);
    }

   
  }

  return (
    <>
    <div className=" mt-6">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
    
            <h2 className='text-center font-bold text-2xl'>Register</h2>
            {/* <div className="form" onSubmit={submitHandler}> */}
            <form className='flex flex-col space-y-4' onSubmit={submitHandler}>
    
        <div className='form-control'>
    
             <p>Email</p>
              <input type="text" placeholder="email" className="input input-bordered  shadow-xl focus:outline-indigo-900 "  
              value={email}  onChange={(e)=>setEmail(e.target.value)} 
              required/>
        </div>
          
           
           <div className='form-control'>
    
   

             <p>Password</p>
            <input type="password" placeholder="password" className="input input-bordered shadow-xl focus:outline-indigo-900 " 
              value={password}  onChange={(e)=>setPassword(e.target.value)} 
              required />
           </div>
           
            
              <button className="btn btn-primary">Login</button>
            
            </form>
        {/* </div> */}
          </div>
        </div>
      </div>
    </div>
        </>
  )
}
