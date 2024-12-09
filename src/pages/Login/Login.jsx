import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"; // Import Axios
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (localStorage.getItem("ismtnusrlgd")) localStorage.clear();
  }, []);
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/v1/auth/login",
        data,{
          withCredentials: true, // Ensures cookies are sent and received
        }
      );

      console.log("Login Successful:", response.data);



      alert("Login Successful");
    } catch (error) {
      // Handle login error
      setErrorMessage(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
    localStorage.setItem("ismtnusrlgd", true);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-400">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {errorMessage && (
          <p className="text-red-500 text-center">{errorMessage}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`w-full px-4 py-2 mt-1 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200 focus:outline-none`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className={`w-full px-4 py-2 mt-1 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring focus:ring-blue-200 focus:outline-none`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Login
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link
            to="/register"
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
