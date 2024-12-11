import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"; // Import Axios
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/Auth/AuthAction";

const RegisterForm = () => {
  const { loading, error, success } = useSelector((state) => state.auth);
  console.log("hkjhnkljlk",loading,error,success)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch=useDispatch()
  const onSubmit = async (data) => {
    // try {
    //   // Sending the form data to the API
    //   const response = await axios.post("http://localhost:8000/v1/auth/register", data);
      
    //   // If registration is successful, you can handle the response here
    //   console.log("Registration Successful:", response.data);
    //   alert("Registration Successful!");
    //   Navigate("/login")
    // } catch (error) {
    //   // Handle errors, e.g., show an error message
    //   console.error("Registration failed:", error);
    //   alert("Registration failed. Please try again.");

      // }
      
      dispatch(registerUser(data))


      
  };

  return (
    <div className="w-full rounded-md py-10 flex justify-center items-center bg-gray-100">
      <form
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`mt-1 block w-full px-4 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email address",
              },
            })}
            className={`mt-1 block w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`mt-1 block w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
