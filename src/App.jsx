import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from "react-toastify";
function App() {
  const [chosedPlayer, setchosedPlayer] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [players, setPlayers] = useState([]);
  const [availableBalance, setavailableBalance] = useState(1000000);

  const removePlayer = (p) => {
    const filtereddata = chosedPlayer.filter(
      (cp) => cp.playerName !== p.playerName,
    );
    setchosedPlayer(filtereddata);
    setavailableBalance(availableBalance + p.price);
  };

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          {toggle
            ? "Available Players"
            : `Selected Players(${chosedPlayer.length}/6)`}
        </h1>
        <div>
          <button
            onClick={() => {
              setToggle(true);
            }}
            className={`font-bold px-4 py-3 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => {
              setToggle(false);
            }}
            className={`font-bold px-4 py-3 border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span>({chosedPlayer.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <AvailablePlayers
          players={players}
          availableBalance={availableBalance}
          setavailableBalance={setavailableBalance}
          chosedPlayer={chosedPlayer}
          setchosedPlayer={setchosedPlayer}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayers
          chosedPlayer={chosedPlayer}
          removePlayer={removePlayer}
          setToggle={setToggle}
        ></SelectedPlayers>
      )}
      <ToastContainer />
    </>
  );
}

export default App;
