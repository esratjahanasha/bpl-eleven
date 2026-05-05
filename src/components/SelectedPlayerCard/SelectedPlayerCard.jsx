import React from "react";

const SelectedPlayerCard = ({ chosedplayercard, removePlayer }) => {
  const handleremoveplayer = () => {
    removePlayer(chosedplayercard);
  };
  return (
    <div className="flex justify-between items-center border border-gray-300 mb-4 rounded-xl p-3">
      <div className="flex items-center">
        <img
          src={chosedplayercard.playerImage}
          className="w-[50px] h-[50px] rounded-xl object-cover"
          alt=""
        />
        <div className="ml-2">
          <h1 className="font-bold">{chosedplayercard.playerName}</h1>
          <p className="text-xs">{chosedplayercard.battingStyle}</p>
        </div>
      </div>
      <div onClick={handleremoveplayer}>
        <img src="https://i.ibb.co.com/6M3CbjB/Frame.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
