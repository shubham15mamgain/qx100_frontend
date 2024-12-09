import { useEffect, useState } from "react";
import AccelerationCardModal from "../../components/AccelerationCardModal/Modal";

const Home = () => {
  const[openModal,setOpenModal]=useState(true);

  useEffect(() => {
    // Open modal when the page loads
    setOpenModal(true);
  }, []);
  const close=()=>{
    setOpenModal(false)
  }


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


  const tasks = [
    {
      id: 1,
      title: "Recruitment Bonus",
      card: {
        title: "Recruitment Bonus",
        progress: {
          current: 0,
          target: 3,
          currency: "₹",
          amount: 300,
          percentage: 0
        },
        button: {
          text: "Obtain",
        }
      }
    },
    {
      id: 1,
      title: "Recruitment Bonus",
      card: {
        title: "Recruitment Bonus",
        progress: {
          current: 0,
          target: 3,
          currency: "₹",
          amount: 300,
          percentage: 0
        },
        button: {
          text: "Obtain",
        }
      }
    },
    {
      id: 1,
      title: "Recruitment Bonus",
      card: {
        title: "Recruitment Bonus",
        progress: {
          current: 0,
          target: 3,
          currency: "₹",
          amount: 300,
          percentage: 0
        },
        button: {
          text: "Obtain",
        }
      }
    }
  ];

  return (
    <div>
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/051/207/972/small/colorful-chameleon-resting-on-a-green-leaf-in-nature-photo.jpg"
        className="w-full h-96"
      />

      {/* <div className="bg-blue-300 mt-8">
        {recharges.map((recharge) => (
          <div key={recharge.id}>
            <p className="px-4 py-2 mt-4">
              {" "}
              {recharge.number} 15:30:22 Recharge Successful {recharge.recharge}
            </p>
          </div>
        ))}
      </div> */}




  
    <div className="bg-[#DBEAFE] min-h-screen p-4">
      {/* Recharge Section */}
      <div className="bg-blue-100 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-900 font-medium flex items-center">
          <span className="material-icons mr-2">volume_up</span>
          96****5374 17:08:21 Recharge ₹28200 successful
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[
            { label: "Recharge", icon: "💰" },
            { label: "Withdraw", icon: "🏧" },
            { label: "App", icon: "📦" },
            { label: "Refund", icon: "🔥🔥" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-blue-200 flex items-center justify-between p-4 rounded-lg shadow-md"
            >
              <span>{item.label}</span>
              <span className="text-blue-600 text-lg">{item.icon}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Events Reward Section */}
      <div className="mb-6">
        <h2 className="text-center text-xl text-blue-900 font-bold mb-4">
          Events Reward
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "Welcome to use Google Store to download MC work APP",
              image:
                "https://files.masterofcode.site/20241002/6ec650ee7292f980fa6f9429545f75ca.png",
            },
            {
              title: "Recommending jobs for new members",
              image:
                "https://files.masterofcode.site/20240808/8fca97f3fa208304627afb549d881a48.jpg",
            },
            {
              title: "MC Agricultural robots",
              image:
                "https://files.masterofcode.site/20240717/6501c45f3448dbc29d9771ad829b610a.jpg",
            },
            {
              title: "Excellent members share",
              image:
                "https://files.masterofcode.site/20240808/d6172b1fbb377c7411c90779ee1af014.jpg",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <p className="text-sm p-2">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Task Subsidy Section */}
      <div>
        <h1 className="text-center mb-8 text-black text-3xl font-bold">Task Subsidy</h1>
      {tasks.map((task) => (
        <div key={task.id}>
          <div className="text-center text-xl bg-blue-200 rounded-md  p-4 font-bold mb-4"  style={
            {boxShadow:" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}}>
     <p>{task.card.title}</p>

            <div className="flex justify-between text-sm text-blue-900 mb-4">
              <span>
                {task.card.progress.current}/{task.card.progress.target}
              </span>
              <span>
                {task.card.progress.currency}{task.card.progress.amount}
              </span>
              <span>{task.card.progress.percentage}%</span>
            </div>
            <button className="bg-blue-500 text-white text-sm py-2 px-4 rounded-lg w-full">
              {task.card.button.text}
            </button>
          </div>
        </div>          
      ))}
    </div>
    </div>


{
  openModal && (<AccelerationCardModal onclose={close}/>)

}



    </div>
  );
};

export default Home;
