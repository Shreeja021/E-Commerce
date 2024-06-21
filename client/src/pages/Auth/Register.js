import React, { useState } from "react";
import Layout from "../../components/layout";
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import "../../Styles/AuthStyles.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/api/v1/auth/register`,
        { name, email, password, phone, address, answer });
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate('/login');
      }
      else {
        toast.error(res.data.message);
      }
    }
    catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };


  return (
    <Layout title="Register -Ecommerce App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">

            <input type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your Name"
              required />
          </div>

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
            <input type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your phone"
              required />
          </div>

          <div className="mb-3">
            <input type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="Enter your Address"
              required />
          </div>

          <div className="mb-3">
            <input type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputName"
              placeholder="What is your Favourite sports"
              required />
          </div>



          <button type="submit"
            className="btn btn-primary">
            Submit
          </button>

        </form>
      </div>

    </Layout>
  );
}

export default Register;

