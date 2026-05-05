import React, { useState } from "react";
import userImg from "../../assets/userImg.png";
import flag from "../../assets/flag.png";
import { toast } from "react-toastify";

const Player = ({
  player,
  setavailableBalance,
  availableBalance,
  chosedPlayer,
  setchosedPlayer,
}) => {
  const [isSelected, setisSlected] = useState(false);
  const handleSelected = (playerData) => {
    if (availableBalance < playerData.price) {
      toast("need more coins!!");
      return;
    }
    if (chosedPlayer.length === 6) {
      toast("6 players are already selected");
      return;
    }
    setavailableBalance(availableBalance - playerData.price);
    setchosedPlayer([...chosedPlayer, playerData]);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-4">
      <figure>
        <img
          className="w-full h-[300px] object-cover"
          src={player.playerImage}
          alt="Shoes"
        />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userImg} alt="" />
          <h2 className="card-title ml-2">{player.playerName}</h2>
        </div>
        <div className="flex mt-4 justify-between border-b-1 border-gray-400 pb-2">
          <div className="flex items-center">
            <img className="w-[20px] h-[20px] mr-2" src={flag} alt="" />
            <span>India</span>
          </div>
          <button className="btn">All rounder</button>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-bold">Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-bold">{player.battingStyle}</span>
          <span>{player.bowlingStyle}</span>
        </div>

        <div className="card-actions mt-4 flex justify-between items-center">
          <p>
            <span className="font-bold">price:</span> ${player.price}
          </p>
          <button
            onClick={() => {
              setisSlected(true);
              handleSelected(player);
            }}
            disabled={isSelected}
            className="btn"
          >
            {isSelected ? "Selected" : "choose player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
