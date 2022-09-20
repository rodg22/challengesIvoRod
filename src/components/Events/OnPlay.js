import React from "react";
import { useState } from "react";
import ReactHowler from "react-howler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import pokemon from "../../assets/pokemon.mp3";

const OnPlay = () => {
    const [option, setOption] = useState(false);
    const [play, setPlay] = useState("");
    const [pause, setPause] = useState("notShowPause");


  const onPlay = () => {
    if (option) {
      setPause("sPause");
      setOption(false);
      setPause("notShowPause");
      setPlay("showPlay");
    } else {
      setPlay("notShowPlay");
      setPause("");
      setOption(true);
    }
  };

  return (
    <>
      <button
        onClick={onPlay}
        type="button"
        className="nes-btn is-success song buttonPlay"
      >
        <ReactHowler src={pokemon} playing={option} />

        <FontAwesomeIcon icon={faPlay} className={play} />

        <FontAwesomeIcon icon={faPause} className={pause} />
      </button>
    </>
  );
};

export default OnPlay;
