import React from 'react';
import Layout from '../../components/layout';
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./../../Styles/AuthStyles.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  
  const navigate = useNavigate();


  const handleSubmit = async (e) => {   
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", { email, newPassword ,answer});
    //   console.log("shreekutty");
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      }
      else {
        console.log("Logged ")
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log("Error in login", error);
      toast.error("Something went wrong")
    }
  };
  return (
    <Layout title={'Forgot Password - Ecommerce App'}>
        <div className="form-container">
        <form onSubmit={e => handleSubmit(e)}>
            <h4 className="title">RESET PASSWORD</h4>

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
            <input type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your favourite sports name"
              required />
          </div>

          <div className="mb-3">
            <input type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder="Enter your password"
              required />
          </div>


          <button type="submit"
            className="btn btn-primary">
            Reset
          </button>

        </form>
      </div>
    </Layout>
  )
}

export default ForgotPassword;
