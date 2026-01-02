import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
 
function Login() {
    const[Name,setName]=useState();
    const[Email,setEmail]=useState();
    const[Password,setPassword]=useState();
    const nevigate=useNavigate();

    function handleNanmeChange(event){
        setName(event.target.value);
        console.log(event.target.value);
    }

    function handeleEmailChange(event){
        setEmail(event.target.value);
        console.log(event.target.value);
    }
    function handelePasswordChange(event){
        setPassword(event.target.value);
        console.log(event.target.value);
    }
    function loginbutton(event){
    event.preventDefault();
    nevigate('/home');
    
    } 
    
  

    
  return (
    <div> 

        <form>
        <h2>Login</h2>
        <label>Name</label>
        <input type='Name'placeholder='Enter Your Name' value={Name} onChange={handleNanmeChange}/>
        <label>Email</label>
        <input type='email'placeholder='Enter your Email' value={Email} onChange={handeleEmailChange}/>
        <label>Password</label>
        <input type='Password'placeholder='Enter Your Password' value={Password} onChange={handelePasswordChange}/>
        <button onClick={loginbutton}>Login</button>

        
                
            
        
        </form>
  </div>
  )
}

export default Login