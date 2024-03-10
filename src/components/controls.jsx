import React from "react";
import { useDrumContext } from "../context/drum-context";
import { Switch } from "./switch";

export function Controls() {
  const {
    soundName,
    isTOn,
    handleTOn,
    isPowerOn,
    handlePower,
    handleVolumeChange,
    volume,
  } = useDrumContext();
  
  const onVolumeChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value)) return;

    const vol = value / 100;
    handleVolumeChange(vol);
  };

  return (
    <div className="flex">
      <div>
        Power
        <Switch handlePower={handlePower} isOn={isPowerOn} />
      </div>
      <div className="display">{soundName}</div>
      <input
        type="range"
        name="volume"
        disabled={!isPowerOn}
        min={0}
        value={volume * 100}
        onChange={onVolumeChange}
        max={100}
        id="volume"
      />
      <div>
        Bank
        <Switch handlePower={handleTOn} isOn={isTOn} />
      </div>
    </div>
  );
}
