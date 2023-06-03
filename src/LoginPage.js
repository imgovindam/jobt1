/* eslint-disable no-undef */
import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ handleLogin }) => {
  // const LoginPage = () => {
  // const [mobileNumber, setMobileNumber] = useState("");
  // const [nextpage, setNextPage] = useState(false);
  // const [otp, setOTP] = useState("");
  // handleVerifyOTP();
  // const [token, setToken] = useState("");
  const navigate = useNavigate();

  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [otpRecieved, setOTPRecieved] = useState(" ");

  const handleSendOTP = async () => {
    try {
      const response = await fetch(
        "https://storebh.bhaaraterp.com/api/send-otp/",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile_otp: otp,
            mobile_number: mobileNumber,
            type: "web",
            registration_token: "",
          }),
        }
      );
      const data = await response.json();
      // Handle the response data as needed
      console.log(data);
      // if (data.token) {
      //   navigate("/profile");
      // } else {
      // }
      setOTPRecieved(true);
      if (data.token) {
        setToken(data.token);
      }
      setNextPage(true);
    } catch (error) {
      console.error(error);
    }
  };
  const handleVerifyOTP = async () => {
    try {
      const response = await fetch(
        "https://storebh.bhaaraterp.com/api/verify-login-otp/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile_otp: otp,
            mobile_number: mobileNumber,
            type: "web",
            registration_token: "",
          }),
        }
      );
      const data = await response.json();
      // Handle the response data as needed
      navigate("/profile");
      console.log(data);
      setNextPage(true);
      isOTP = true;
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleVerifyOTP(otp, mobileNumber);
  // };

  // const handleLoginFormSubmit = (e) => {
  //   e.preventDefault();
  //   handleLogin(otp, mobileNumber);
  // };

  return (
    <div className="rt">
      <div className="Login">
        <span className="sp">
          <h3>welcome</h3>
          <h5>Enter Your mobile number to start shopping </h5>
        </span>
        <input
          className="input"
          type="number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          placeholder="Enter Mobile Number"
        />

        <div>
          <input
            className="OTP"
            type="number"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            placeholder="Verify OTP"
          />
        </div>
        <button
          className="
      button"
          onClick={handleVerifyOTP}
        >
          submit
        </button>
        <button onClick={() => handleLogin(otp, mobileNumber)} className="otp">
          {" "}
          send OTP
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
