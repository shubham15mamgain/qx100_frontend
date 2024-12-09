import ProfileCard from "../../components/ProfileCard/ProfileCard";

const Profile = () => {
  const userProfile = {
    name: "Shubham M",
    uniqueId: "9012345678",
    totalRecharge: 5000,
    totalWithdraw: 3000,
    rechargeBalance: 2000,
    todayIncome: 250,
    totalIncome: 15000,
    teamCount: 5,
    teamIncome: 8000,
    yourIncome: 1000,
    bonusIncome: 200,
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProfileCard {...userProfile} />
    </div>
  );
};

export default Profile;
