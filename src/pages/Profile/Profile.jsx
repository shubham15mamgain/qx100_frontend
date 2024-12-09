import axios from "axios";
import React, { useEffect } from "react";

import ProfileCard from "../../components/ProfileCard/ProfileCard";

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+123-456-7890",
    address: "123 Main Street, City, Country",
    profilePicture: "https://via.placeholder.com/150", // Replace with actual profile picture URL
    bio: "Passionate software developer with expertise in modern web technologies. Always eager to learn and create impactful solutions.",
  };

  const logout = async () => {
    try {
      const res = await axios.post("http://localhost:8000/v1/auth/logout", {
        withCredentials: true, 
      });
      console.log("res", res.data);
    } catch (error) {}
  };
  const fetchProfile = async () => {
    try {
      const res = await axios.get("http://localhost:8000/v1/auth/profile", {
        withCredentials: true, // Ensures cookies are sent with the request
      });
      console.log("Profile response:", res.data); // Log the response data
    } catch (error) {
      // Ensure to check for response data in the error (if available)
      console.error("Error fetching profile:", error.response?.data || error.message);
    }}
  
    useEffect(()=>{
      fetchProfile()
    },[])
  
  const userProfile = {
    name: "Shubham M",
    uniqueId: "9012345678",
    totalRecharge: 5000,
    totalWithdraw: 3000,
    rechargeBalance: 2000,
    todayIncome: 250,
    totalIncome: 15000,
    teamCount: 5,
    teamIncome: 8000,
    yourIncome: 1000,
    bonusIncome: 200,
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col gap-6 justify-center items-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white text-center">
          <img
            src={user.profilePicture}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-md"
          />
          <h1 className="mt-4 text-2xl font-bold">{user.name}</h1>
          <p className="text-sm text-gray-200 mt-2">{user.bio}</p>
        </div>

        {/* User Details */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-gray-700 text-sm font-semibold uppercase">
                Email
              </h2>
              <p className="text-gray-900">{user.email}</p>
            </div>
            <div>
              <h2 className="text-gray-700 text-sm font-semibold uppercase">
                Phone
              </h2>
              <p className="text-gray-900">{user.phone}</p>
            </div>
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-gray-700 text-sm font-semibold uppercase">
                Address
              </h2>
              <p className="text-gray-900">{user.address}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex justify-center space-x-4">
            <button className="px-4 py-2 bg-indigo-500 text-white font-medium rounded-lg shadow-md hover:bg-indigo-600">
              Edit Profile
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg shadow-md hover:bg-red-600"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <ProfileCard {...userProfile}/>
    </div>
  );
};

export default ProfilePage;
