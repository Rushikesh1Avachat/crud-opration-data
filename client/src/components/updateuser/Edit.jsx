import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import "../adduser/add.css"
const Edit = () => {
  const users={
    fname:"",
    lname:"",
    email:"",

  }
const {id}=useParams()
const [user, setUser]=useState(users)
const navigate=useNavigate()
const inputChangeHandler=(e)=>{
const {name, value}=e.target;
setUser({...user , [name]:value })
console.log(user);

}
useEffect(() => {
axios.get(`http://localhost:8000/api/getone/${id}`)
.then((response)=>{
  // console.log(response);
setUser(response.data);

  }).catch(error=>console.log(error));
  
}, [id]);
const submitForm=async () => {
  e.preventDefault();
await axios.put(`http://localhost:8000/api/update/${id}`, user)
.then((response)=>{
// console.log(response);
toast.success(response?.data?.msg, {position:"top-left"})
navigate("/")
}).catch(error=>console.log(error));
}
  return (
    <div className='addUser'>
    <Link to={"/"}>Back</Link>
    <h3> UPDATE USER</h3>
    <form className='addUserForm' onSubmit={submitForm}>
      <div className="inputGroup">
        <label htmlFor="fname">First Name</label>
        <input type="text" id='fname'  value={user.fname} name='fname' onChange={inputChangeHandler} autoComplete='off' placeholder='First Name' required/>
      </div>
      <div className="inputGroup">
        <label htmlFor="lname">Last Name</label>
        <input type="text" id='lname'  value={user.lname} name='lname' onChange={inputChangeHandler}  autoComplete='off' placeholder='Last Name' required/>
      </div>
      <div className="inputGroup">
        <label htmlFor="email">Last Name</label>
        <input type="email" id='email' value={user.email}  name='email' onChange={inputChangeHandler}  autoComplete='off' placeholder='Email' required/>
      </div>
     
      <div className="inputGroup">
        <button type='submit'>UPDATE NEW USER</button>
      </div>
    </form>
  </div>
  )
}

export default Edit