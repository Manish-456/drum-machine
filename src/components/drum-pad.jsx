import React, { useEffect, useRef, useState } from "react";
import { useDrumContext } from "../context/drum-context";

export function DrumPad({ sound }) {
  const { handleSoundName, isPowerOn, volume } = useDrumContext();
  const [style, setStyle] = useState({
    backgroundColor: "",
    x: "",
  });

  if (!sound) return null;
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current && isPowerOn) {
      audioRef.current.play();
      audioRef.current.volume = volume;
      setStyle({
        backgroundColor: "orange",
        x: "-0.1px",
      });
      handleSoundName(sound.id);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      setStyle({});
    }, 100);

    return () => clearTimeout(timer);
  }, [style]);

  function handleKeyDown(e) {
    if (
      isPowerOn &&
      e.keyCode === sound.keyCode &&
      e.key.toUpperCase() === sound.keyTrigger
    ) {
      audioRef.current.play();
      setStyle({
        backgroundColor: "orange",
        x: "-0.1px",
      });
      handleSoundName(sound.id);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isPowerOn]);

  return (
    <div
      className="drum-pad"
      style={{
        background: style?.backgroundColor,
      }}
      onClick={handlePlay}
    >
      <h2
        style={{
          marginBottom: style.x,
        }}
      >
        {sound.keyTrigger}
      </h2>
      <audio controls className="hidden" ref={audioRef}>
        <source src={sound.url} />
      </audio>
    </div>
  );
}
