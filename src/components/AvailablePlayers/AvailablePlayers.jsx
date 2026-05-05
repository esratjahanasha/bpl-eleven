import React from "react";
import Player from "../Player/Player";

const AvailablePlayers = ({
  players,
  setavailableBalance,
  availableBalance,
  chosedPlayer,
  setchosedPlayer,
}) => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 ">
      {players.map((player) => (
        <Player
          player={player}
          setavailableBalance={setavailableBalance}
          availableBalance={availableBalance}
          chosedPlayer={chosedPlayer}
          setchosedPlayer={setchosedPlayer}
        ></Player>
      ))}
    </div>
  );
};

export default AvailablePlayers;
