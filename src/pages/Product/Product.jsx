import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const [products] = useState([
    {
      _id: "1", // Ensure this matches the backend's RechargePlanId
      imageUrl:
        "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
      name: "Arrive Within 3 Hours",
      price: 50000,
      daily: 5000,
      term: 20,
    },
    // Add additional products here...
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePay = async (product) => {
    setSelectedProduct(product);

    try {
      // Step 1: Create an order on the backend
      const { data } = await axios.post(
        "http://localhost:8000/recharge/create",
        {
         price: product.price // Use correct key as per backend API
        }
      );

   
      // Step 2: Prepare Razorpay options
      const options = {
        key: import.meta.env.
        VITE_APP_RAZORPAY_KEY_ID, // Use environment variable for Razorpay key
        amount: product.price * 100, // Convert to paise
        currency: "INR",
        name: "Your Company Name", // Replace with your company name
        description: product.name,
        image: "/path/to/your/logo.png", // Path to your company logo
        order_id: data.orderId, // Razorpay order ID from the backend
        handler: async (response) => {
          try {
            // Step 3: Verify the payment on the backend
            const verificationPayload = {
              ...response,
              RechargePlanId: product.id,
            };

            await axios.post(
              `http://localhost:8000/recharge/verify/${data.rechargePlanId}`,
              verificationPayload
            );

            alert("Payment verified successfully!");
            navigate("/success"); // Navigate to a success page
          } catch (error) {
            console.error("Payment verification failed:", error);
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "Anjali", // Optionally prefill customer name
          email: "anjalibartwal@gmail.com", // Optionally prefill customer email
          contact: "7906550720", // Optionally prefill customer contact
        },
        modal: {
          ondismiss: () => {
            alert("Payment window closed without completing the payment.");
          },
        },
        theme: {
          color: "#121212", // Customize the theme color
        },
      };

      // Step 4: Open Razorpay payment window
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };

  return (
    <div className="px-6 bg-gray-100 w-[70%]">
      <div className="grid grid-cols-1">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-blue-200 rounded-lg shadow-md p-4 border border-gray-200 mt-2"
          >
            <div className="flex flex-row gap-8 mt-4 mb-4">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-32 min-h-min"
              />
              <div className="w-full">
                <h2 className="text-xl text-blue-700 font-semibold mb-2">
                  {product.name}
                </h2>
                <div className="flex flex-row justify-between">
                  <h1 className="text-gray-600">Term (Days)</h1>
                  <p className="text-blue-600 mb-4">{product.term}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <h1 className="text-gray-600">Price (₹)</h1>
                  <p className="text-blue-600 mb-4">{product.price}</p>
                </div>
                <div className="flex flex-row justify-between">
                  <h1 className="text-gray-600">Daily (₹)</h1>
                  <p className="text-blue-600 mb-4">{product.daily}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => handlePay(product)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition"
            >
              Rental
            </button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="mt-6 bg-pink-300 rounded-lg shadow-md p-4 border border-gray-200 mb-20">
          <h3 className="text-xl font-bold mb-2">Selected Product</h3>
          <p className="text-gray-800">
            You have selected <strong>{selectedProduct.name}</strong> to pay ₹
            {selectedProduct.price}.
          </p>
        </div>
      )}
    </div>
  );
};

export default Product;
