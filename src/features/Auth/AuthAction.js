import { axiosInstance } from "../../axiosInstance.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "/auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.post(
        "/auth/register",
        { name, email, password },
        config
      );

      console.log("Register Data", data);
      toast.success("Mail is sent to your email!");
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "/auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.post(
        "/auth/login",
        { email, password },
        config
      );

      console.log("login data", data);
      localStorage.setItem("qx_login", true);

      return data;
    } catch (error) {
      console.log("Error", error);
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        toast.error(error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

/**-----------------------------------------Action for sending logout request to backedn-----------------------------------------*/
export const userLogout = createAsyncThunk(
  "/auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axiosInstance.post(`/auth/logout`, {}, config); // No need to capture `data`
      return "Logout successful"; // Optional success message
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "/auth/profile",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send GET request to fetch user profile
      const { data } = await axiosInstance.get(`/auth/profile`, config);

      return data; // Return the user profile data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
