import React, { useState } from 'react'
import Layout from '../../components/layout'
import { toast } from "react-toastify"
import axios from "axios"
import { useAuth } from '../../context/auth'
import { useNavigate,useLocation } from 'react-router-dom';
import "./../../Styles/AuthStyles.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [auth, setAuth] = useAuth()

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {   
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", { email, password })

      console.log("shreekutty");
      if (res && res.data.success) {
        toast.success(res.data && res.data.message)
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token
        })
        localStorage.setItem("auth", JSON.stringify({ user: res.data.user, token: res.data.token }))
        navigate(location.state ||"/");
      }
      else {
        console.log("Logged ")
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log("Error in login", error);
      toast.error("Something went wrong")
    }
  }

  return (
    <Layout title="Register -Ecommerce App">
      <div className="form-container">
        <h1>Login Page</h1>
        <form onSubmit={e => handleSubmit(e)}>

          <div className="mb-3">
            <input type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your Email"
              required />
          </div>

          <div className="mb-3">
            <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter your password"
              required />
          </div>

          <div className="mb-3">
          <button type="button"
            className="btn btn-primary" onClick={() => {navigate('/forgot-password')}}>
          Forgot Password
          </button>
          </div>

          <button type="submit"
            className="btn btn-primary">
            Login
          </button>

        </form>
      </div>
    </Layout>
  )
}

export default Login
