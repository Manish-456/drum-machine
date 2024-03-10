import React from "react";
import { DrumPad } from "./components/drum-pad";
import { e, t } from "./constants/sounds";
import "./App.css";
import { Controls } from "./components/controls";
import { useDrumContext } from "./context/drum-context";

export default function App() {
  const { bank } = useDrumContext();
  const sounds = bank === "e" ? e : t;

  return (
    <div id="drum-machine">
      <div id="drum-keys">
        {sounds.map((sound) => (
          <DrumPad sound={sound} key={sound.id} />
        ))}
      </div>
      <Controls />
    </div>
  );
}
