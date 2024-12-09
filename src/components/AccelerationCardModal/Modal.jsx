import React, { useState } from "react";

const AccelerationCardModal = ({onclose}) => {


  const data = [
    {
      img:'https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg',
      name: "Arrive within 72 hours",
      price: "800Rs",
      withdrawalTime: "After purchasing, your withdrawal will arrive within 72 hours",
      dailyIncome: "80Rs",
      day: 20,
      totalRevenue: "1600Rs",
    },
    {
      img:'https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg',
      name: "Arrive within 48 hours",
      price: "2800Rs",
      withdrawalTime: "After purchasing, your withdrawal will arrive within 48 hours",
      dailyIncome: "280Rs",
      day: 20,
      totalRevenue: "5600Rs",
    },
    {
      img:'https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg',
      name: "Arrive within 36 hours",
      price: "5000Rs",
      withdrawalTime: "After purchasing, your withdrawal will arrive within 36 hours",
      dailyIncome: "500Rs",
      day: 20,
      totalRevenue: "10000Rs",
    },
    {
      img:'https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg',
      name: "Arrive within 24 hours",
      price: "10000Rs",
      withdrawalTime: "After purchasing, your withdrawal will arrive within 24 hours",
      dailyIncome: "1000Rs",
      day: 20,
      totalRevenue: "20000Rs",
    },
    {
      img:'https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg',
      name: "Arrive within 12 hours",
      price: "16000Rs",
      withdrawalTime: "After purchasing, your withdrawal will arrive within 12 hours",
      dailyIncome: "1600Rs",
      day: 20,
      totalRevenue: "32000Rs",
    },
    {
      img:'https://pwebassets.paytm.com/commonwebassets/paytmweb/header/images/logo.svg',
      name: "Arrive within 6 hours",
      price: "25000Rs",
      withdrawalTime: "After purchasing, your withdrawal will arrive within 6 hours",
      dailyIncome: "2500Rs",
      day: 20,
      totalRevenue: "50000Rs",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
   

        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-4xl p-4 overflow-y-auto max-h-[90%]">
            <div className="text-center text-xl font-bold mb-4">Important Message</div>

            <div className="text-center bg-blue-100 py-2 text-2xl font-semibold text-blue-900">
              Withdrawal Time Acceleration Card
            </div>
            <div className="my-4 border rounded-md overflow-hidden">
  <table className="table-auto w-full border-collapse border border-gray-300 text-center">
    <thead className="bg-yellow-200">
      <tr>
        <th className="border border-gray-300 px-4 py-2">Device Name</th>
        <th className="border border-gray-300 px-4 py-2">Price</th>
        <th className="border border-gray-300 px-4 py-2">Withdrawal Time</th>
        <th className="border border-gray-300 px-4 py-2">Daily Income</th>
        <th className="border border-gray-300 px-4 py-2">Day</th>
        <th className="border border-gray-300 px-4 py-2">Total Revenue</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index} className="hover:bg-gray-100">
          <td className="border border-gray-300 px-4 py-2">
            <div className="flex items-center space-x-2">
              <img
                src={item.img}
                alt={item.name}
                className="h-12 w-12 rounded-md object-contain"
              />
              <span className="text-sm font-medium text-gray-800">{item.name}</span>
            </div>
          </td>
          <td className="border border-gray-300 px-4 py-2">{item.price}</td>
          <td className="border border-gray-300 px-4 py-2 text-red-600">
            {item.withdrawalTime}
          </td>
          <td className="border border-gray-300 px-4 py-2">{item.dailyIncome}</td>
          <td className="border border-gray-300 px-4 py-2">{item.day}</td>
          <td className="border border-gray-300 px-4 py-2">{item.totalRevenue}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


            <div className="text-center text-white  bg-black text-1xl mb-4 px-6 py-6 rounded-md">
              Buy a Qualcomm withdrawal time acceleration card, and your withdrawal will arrive in your account faster.
            </div>


  <div className="flex flex-col gap-6 text-[#333333]">  <p> 📣Purchase the Qualcomm withdrawal time acceleration card, and your withdrawal will reach your bank account faster. 💯✅</p>



<p>👉Purchase Arrive within 24 hours, your withdrawal will reach your bank account within 24 hours🤩</p>



<p>👉Purchase Arrive within 12 hours, your withdrawal will reach your bank account within 12 hours🤩</p>



<p>👉Purchase Arrive within 6 hours, your withdrawal will reach your bank account within 6 hours🤩</p>


<p>
💪The shorter the time you purchase the withdrawal acceleration card, the faster your withdrawal will reach your bank account. 👏👏
</p>
</div>
            <div className="text-center">
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-md"
                onClick={onclose}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
          </div>
  );
};

export default AccelerationCardModal;
