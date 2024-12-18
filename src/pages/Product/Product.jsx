import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, getProductsById } from "../../features/product/productAction";

const Product = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const{products}=useSelector((state)=>state.product)
  const { productDetails } = useSelector((state) => state.product)
  console.log(products.data)
  const [product] = useState([
    {
      _id: "1", 
      imageUrl:
        "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
      name: "Arrive Within 3 Hours",
      price: 50000,
      daily: 5000,
      term: 20,
    },
   
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePay = async (product) => {
    setSelectedProduct(product);

    try {
  
      const { data } = await axios.post("http://localhost:8000/recharge/create", {
        price: product.price, 
      });


   
      const options = {
        key: import.meta.env.VITE_APP_RAZORPAY_KEY_ID, 
        amount: product.price * 100, 
        currency: "INR",
        name: "Your Company Name", 
        description: product.name,
        image: "/path/to/your/logo.png", 
        order_id: data.order.id,
        handler: async (response) => {
          try {
           
            const verificationPayload = {
              razorpayOrderId: data.order.id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
              RechargePlanId: product._id,
            };

            await axios.post("http://localhost:8000/recharge/verify", verificationPayload);

            alert("Payment verified successfully!");
            navigate("/");
          } catch (error) {
            console.error("Payment verification failed:", error);
            alert("Payment verification failed. Please contact support.");
          }
        },
        prefill: {
          name: "Anjali", 
          email: "anjalibartwal@gmail.com", 
          contact: "7906550720", 
        },
        modal: {
          ondismiss: () => {
            alert("Payment window closed without completing the payment.");
          },
        },
        theme: {
          color: "#121212", 
        },
      };

  
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error("Payment failed:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };


useEffect(()=>{
  dispatch(fetchProducts())
},[])


useEffect(() => {
  if (products.length > 0) {
    products.forEach((product) => {
  
      if (!productDetails[product._id]) {
        dispatch(getProductsById(product._id)); 
      }
    });
  }
}, [products, productDetails, dispatch]);




  return (
    <div className="px-6 bg-gray-100 w-[70%]">
      <div className="grid grid-cols-1">
        {product.map((product) => (
          <div
            key={product._id}
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

      <div>{products?.data?.map((item)=>(
        <div className="flex flex-row gap-28   ">
       <div className=" bg-blue-200 mb-10" key={item}> {item?.name}</div>
       <div>{item?.daily}</div>
        <div>{item?.term}</div>    
        <div>{item?.price}</div>
       </div>))}</div>
    </div>
  );
};

export default Product;
