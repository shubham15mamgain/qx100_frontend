/* eslint-disable react/prop-types */
import React from "react";

const ProfileCard = ({
  name,
  uniqueId,
  totalRecharge,
  totalWithdraw,
  rechargeBalance,
  todayIncome,
  totalIncome,
  teamCount,
  teamIncome,
  yourIncome,
  bonusIncome,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 border border-gray-200">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-gray-600 text-sm">ID: {uniqueId}</p>
      </div>

      {/* Financial Information */}
      <div className="space-y-4 mb-6">
        <div className="flex flex-row gap-6">
          <div className="flex justify-between">
            <span className="font-medium">Total Recharge:</span>
            <span>₹{totalRecharge}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Total Withdraw:</span>
            <span>₹{totalWithdraw}</span>
          </div>
        </div>

        <div className="flex justify-between">
          <span className="font-medium">Recharge Balance:</span>
          <span>₹{rechargeBalance}</span>
        </div>

        <div className="flex flex-row gap-6">
          <div className="flex justify-between">
            <span className="font-medium">Today Income:</span>
            <span>₹{todayIncome}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Total Income:</span>
            <span>₹{totalIncome}</span>
          </div>
        </div>
      </div>

      {/* Your Team Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Your Team</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">Team Members:</span>
            <span>{teamCount}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Team Income:</span>
            <span>₹{teamIncome}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Your Income:</span>
            <span>₹{yourIncome}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Bonus Income:</span>
            <span>₹{bonusIncome}</span>
          </div>
        </div>
      </div>

      {/* Note Section */}
      <div className="mt-6 text-center text-sm text-gray-600 border-t border-gray-200 pt-4">
        <p className="italic">1 Referral = ₹100 daily for lifetime</p>
      </div>
    </div>
  );
};

export default ProfileCard;
