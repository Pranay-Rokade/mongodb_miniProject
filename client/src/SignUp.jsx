import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
function SignUp() {
    const [name,setName]= useState()
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/register',{name,email,password})
        .then(result=>console.log(result))
        .catch(err=> console.log(err))
    }

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="card bg-white p-5 rounded">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="name"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
             <strong>Email</strong>
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              onChange={(e)=> setEmail(e.target.value)}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="password"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
          </form>
        <div className="text-center mt-3">
          <p className="mb-2">Already have an account?</p>
          <Link to="/login" className="btn btn-outline-dark w-100 rounded-0">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
