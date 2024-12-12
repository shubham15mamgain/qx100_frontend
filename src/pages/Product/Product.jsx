import { useState } from "react";
import axios from "axios"; // To make API calls

const Product = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      imageUrl:
        "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
      name: "Arrive Within 3 Hours",
      price: 50000,
      daily: 5000,
      term: 20,
    },
    // Additional products...
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePay = async (product) => {
    setSelectedProduct(product);
  
    try {
      // Create an order on the backend
      const { data } = await axios.post("http://localhost:8000/recharge/create", {
        amount: product.price,
        id: product.id,
      });
  
      console.log("Backend Response:", data);
  
      if (!data?.orderId) {
        throw new Error("Order ID is missing in the response.");
      }
  
      // Open Razorpay Checkout
      const options = {
        key: "YOUR_KEY_ID", // Replace with Razorpay key_id
        amount: product.price * 100,
        currency: "INR",
        name: "Your Company",
        description: product.name,
        order_id: data.orderId, // Use the orderId from the response
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "1234567890",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.open();
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
              <img src={product.imageUrl} className="w-32 min-h-min" />
              <div className="w-full">
                <h2 className="text-xl text-blue-700 font-semibold mb-2">
                  {product.name}
                </h2>

                <div className="flex flex-row justify-between">
                  <h1 className="text-gray-600"> Term ( Days ) </h1>
                  <p className="text-blue-600 mb-4">{product.term}</p>
                </div>

                <div className="flex flex-row justify-between">
                  <h1 className="text-gray-600"> Price ( ₹ )</h1>
                  <p className="  text-blue-600 mb-4">{product.price}</p>
                </div>

                <div className="flex flex-row justify-between">
                  <h1 className="text-gray-600"> Daily ( ₹ )</h1>
                  <p className="  text-blue-600 mb-4">{product.daily}</p>
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
