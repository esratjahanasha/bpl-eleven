import React from "react";
import SelectedPlayerCard from "../SelectedPlayerCard/SelectedPlayerCard";

const SelectedPlayers = ({ chosedPlayer, removePlayer,setToggle}) => {
  return (
    <div className="max-w-[1200px] mx-auto">
      {chosedPlayer.map((chosedplayercard) => (
        <SelectedPlayerCard
          chosedplayercard={chosedplayercard}
          removePlayer={removePlayer}
        ></SelectedPlayerCard>
      ))}
      <div className="py-4 px-2 border rounded-lg inline" onClick={()=>{setToggle(true)}}>
        <button className="py-2 px-4 bg-[#E7FE29] rounded-lg font-bold">
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
