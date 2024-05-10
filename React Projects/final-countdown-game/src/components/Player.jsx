import { useState, useRef } from "react";
import TimerChallenge from "./TimerChallenge";

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState("");

  function handleClick() {
    setEnterPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enterPlayerName ? enterPlayerName : "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
      <TimerChallenge title="Easy" targetTime="1" />
      <TimerChallenge title="Easy" targetTime="5" />
      <TimerChallenge title="Easy" targetTime="40" />
      <TimerChallenge title="Easy" targetTime="40" />
    </section>
  );
}
