import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import { Avatar, Input } from "@mui/material";
import { Settings } from "@mui/icons-material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const ProfilePage = ({ token }) => {
  const [profileData, setProfileData] = useState([]);
  // console.log(profileData, setProfileData);
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetch(
          "https://storebh.bhaaraterp.com/api/my-profile/",
          {
            method: "GET",
            headers: {
              Authorization: `token ${token}`,
            },
          }
        );
        const data = await response.json();
        // Handle the response data as needed
        console.log(data);
        setProfileData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <div className="f1">
      <form className="form">
        <h3 className="profile-header">Personal Information</h3>
        <div className="pic1">
          <p>
            {profileData?.profile_picture}
            <Avatar />
          </p>
        </div>
        <div className="name">
          First Name:
          <p>
            <input type="text" />
            {profileData?.first_name}
          </p>
          <p>
            Email:
            <input type="email" name="myEmail" /> {profileData?.email}
          </p>
          <p>
            Date of Birth: <input type="date" />
            {profileData?.date_of_birth}
          </p>
        </div>

        <div className="last">
          <p>
            Last Name:
            <input type="text" /> {profileData?.last_name}
          </p>
          Gender:
          <input type="radio" name="Gender" />
          male
          <input type="radio" name="Gender" />
          female
          <input type="radio" name="Gender" />
          other
          {profileData?.gender}
        </div>
      </form>
      <section className="sec2">
        <div className="ava">
          <nav>
            <ul className="ul">
              <li>
                <Avatar /> Account Settings
              </li>
              <br />

              <li>
                <Settings /> Referral & Earn
              </li>
              <br />
              <li>
                <ShoppingBagOutlinedIcon /> Orders
              </li>
              <br />
              <li>
                <ReceiptOutlinedIcon /> Invoices
              </li>
              <br />
              <li>
                <FavoriteBorderSharpIcon /> WishList
              </li>
              <br />
              <li>
                <LocationOnOutlinedIcon /> Address
              </li>
              <br />
              <li>
                <NotificationsActiveOutlinedIcon /> Notification
              </li>
              <br />
              <li>
                <LockOutlinedIcon /> Logout
              </li>
            </ul>
          </nav>
        </div>
      </section>
      ;
    </div>
  );
};

export default ProfilePage;
