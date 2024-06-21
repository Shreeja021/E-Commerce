import React from "react";
// import Contact from "./Contact";
import Layout from "../components/layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="https://media.istockphoto.com/id/1359876068/vector/customer-service-hotline-operators-consult-customers-with-headsets-on-computers-247-global.jpg?s=612x612&w=0&k=20&c=HcrFsPakslvox6rWnOWllH-jJ32TUNrTKusZ1J0_5oc="
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to call anytime we 24*7 variable
          </p>
          <p className="mt-3">
            <BiMailSend />: www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall />: 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
