import React, { useState, useEffect } from "react";

const SubscriptionComponent = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(0);
  const [totalAmountSent, setTotalAmountSent] = useState(0);
  const [isPaid, setIsPaid] = useState(false);

  // Simulate the payment process (For demo purposes, we assume it's done)
  const handlePayment = () => {
    // Assume payment of Rs. 1000 is done and subscribed
    setIsPaid(true);
    setSubscribed(true);
    setDaysRemaining(20);
  };

  // Set up the daily distribution logic
  useEffect(() => {
    let timer;
    if (subscribed && isPaid && daysRemaining > 0) {
      timer = setInterval(() => {
        setTotalAmountSent((prev) => prev + 100);
        setDaysRemaining((prev) => prev - 1);
      }, 24 * 60 * 60 * 1000); // 1 day in milliseconds
    }

    return () => clearInterval(timer); // Clean up timer when component unmounts
  }, [subscribed, isPaid, daysRemaining]);

  return (
    <div>
      <h1>Subscription</h1>
      {!isPaid ? (
        <button onClick={handlePayment}>Make Payment</button>
      ) : (
        <div>
          <p>Subscription Active!</p>
          <p>Days remaining: {daysRemaining}</p>
          <p>Total Sent: Rs. {totalAmountSent}</p>
        </div>
      )}
    </div>
  );
};

export default SubscriptionComponent;
