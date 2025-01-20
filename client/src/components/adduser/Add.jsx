import React, { useState } from 'react'
import "./add.css";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import toast from 'react-hot-toast';
const Add = () => {
  const users={
    fname:"",
    lname:"",
    email:"",
    password:"",
  }
  const [user, setUser]=useState(users)
  const navigate=useNavigate()
  const inputHandler=(e)=>{
const {name, value}=e.target;
setUser({...user , [name]:value })
console.log(user);

// console.log(name, value);

  }
  const submitForm= async(e)=>{
e.preventDefault();
await axios.post("http://localhost:8000/api/create", user)
.then((response)=>{
// console.log(response);
toast.success(response.data.msg, {position:"top-right"})
navigate("/")
}).catch(error=>console.log(error));

  }
  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Add new user</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="fname">First Name</label>
          <input type="text" id='fname'  name='fname' autoComplete='off' onChange={inputHandler} placeholder='First Name' required/>
        </div>
        <div className="inputGroup">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id='lname'  name='lname' autoComplete='off' onChange={inputHandler}  placeholder='Last Name' required/>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">Last Name</label>
          <input type="email" id='email'  name='email' autoComplete='off' onChange={inputHandler}  placeholder='Email' required/>
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password</label>
          <input type="password" id='password'  name='password' autoComplete='off' onChange={inputHandler}  placeholder='Password' required/>
        </div>
        <div className="inputGroup">
          <button type='submit'>ADD USER</button>
        </div>
      </form>
    </div>
  )
}

export default Add