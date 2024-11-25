const Home = () => {
  const recharges = [
    {
      id: 1,
      number: "9012345678",
      recharge: "5400",
    },
    {
      id: 2,
      number: "8755400367",
      recharge: "4900",
    },
    {
      id: 3,
      number: "9789512765",
      recharge: "2300",
    },
    {
      id: 4,
      number: "7812090891",
      recharge: "5700",
    },
    {
      id: 5,
      number: "6935147592",
      recharge: "9000",
    },
  ];
  return (
    <div>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/051/207/972/small/colorful-chameleon-resting-on-a-green-leaf-in-nature-photo.jpg"
        className="w-full h-96"
      />

      <div className="bg-blue-300 mt-8">
        {recharges.map((recharge) => (
          <div key={recharge.id}>
            <p className="px-4 py-2 mt-4">
              {" "}
              {recharge.number} 15:30:22 Recharge Successful {recharge.recharge}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
