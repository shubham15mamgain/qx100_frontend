import { axiosInstance } from "../../axiosInstance.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const createProduct = createAsyncThunk(
  "/product/create",
  async ({ name, description, price, image }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosInstance.post(
        "/product/create",
        { name, description, price, image },
        config
      );

      console.log("Product Created", data);
      toast.success("Product created successfully!"); // Show success toast
      return data;
    } catch (error) {
      // Return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchProducts = createAsyncThunk(
  "/product",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/products");
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "/product/update",
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put(`/products/${id}`, updates);
      toast.success("Product updated successfully!");
      return data;
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "/product/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axiosInstance.delete(`/product/${id}`);
      toast.success("Product deleted successfully!");
      return id;
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);
