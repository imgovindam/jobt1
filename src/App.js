import React, { useEffect, useState } from "react";
// import "./App.css";
import LoginPage from "./LoginPage";
import ProfilePage from "./ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-router-dom";

function App() {
  const [token, setToken] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // var isOTP = false;
  const handleVerifyOTP = (e) => {
    // e.preventDefault();
    // handleVerifyOTP(otp, mobileNumber);
  };

  const handleLogin = async (otp, mobileNumber) => {
    try {
      const response = await fetch(
        "https://storebh.bhaaraterp.com/api/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mobile_number: mobileNumber }),
        }
      );
      const data = await response.json();
      // Handle the response data as needed
      console.log(data);

      // setNextPage(true);
    } catch (error) {
      console.error(error);
    }
  };

  // const handleVerifyOTP = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://storebh.bhaaraterp.com/api/verify-login-otp/",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           mobile_otp: otp,
  //           mobile_number: mobileNumber,
  //           type: "web",
  //           registration_token: "",
  //         }),
  //       }
  //     );
  //     const data = await response.json();
  //     // Handle the response data as needed
  //     console.log(data);
  //     // setNextPage(true);
  //     // isOTP = true;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <div className="p1">
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                path="/"
                element={
                  <LoginPage
                    handleVerifyOTP={handleVerifyOTP}
                    token={token}
                    setToken={setToken}
                    handleLogin={handleLogin}
                  />
                }
              />
              <Route path="/profile" element={<ProfilePage token={token} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
