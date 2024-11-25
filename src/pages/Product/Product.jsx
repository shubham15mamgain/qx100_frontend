import { useState } from "react";

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
    {
      id: 2,
      imageUrl: "https://fps.cdnpk.net/images/home/subhome-ai.webp?w=649&h=649",
      name: "Arrive Within 6 Hours",
      price: 25000,
      daily: 2500,
      term: 20,
    },
    {
      id: 3,
      imageUrl: "https://pixlr.com/images/index/ai-image-generator-one.webp",
      name: "Arrive Within 12 Hours",
      price: 12000,
      daily: 1200,
      term: 20,
    },
    {
      id: 4,
      imageUrl:
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
      name: "Arrive Within 24 Hours",
      price: 6000,
      daily: 600,
      term: 20,
    },
    {
      id: 5,
      imageUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
      name: "Arrive Within 36 Hours",
      price: 4000,
      daily: 400,
      term: 20,
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handlePay = (product) => {
    setSelectedProduct(product);
    alert(`You selected ${product.name}. Proceed to pay $${product.price}.`);
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
