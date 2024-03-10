import { createContext, useContext, useEffect, useState } from "react";

const DrumContext = createContext({
  bank: "",
  soundName: "",
  isPowerOn: false,
  isTOn: false,
  volume: 0,
  handleSoundName: (name) => {},
  handlePower: () => {},
  handleTOn: () => {},
  handleVolumeChange: (vol) => {},
});

export const DrumContextProvider = ({ children }) => {
  const [bank, setBank] = useState("e");
  const [soundName, setSoundName] = useState("");
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [isTOn, setIsTOn] = useState(false);
  const [volume, setVolume] = useState(0.2);

  const handleSoundName = (name) => setSoundName(name);

  const handlePower = () => setIsPowerOn((prev) => !prev);
  const handleTOn = () => setIsTOn((prev) => !prev);
  const handleVolumeChange = (vol) => {
    setVolume(vol);
  };

  useEffect(() => {
    if (volume) {
      setSoundName(`Volume: ${(volume * 100).toFixed(0)}`);
      const timer = setTimeout(() => {
        setSoundName("");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [volume]);

  useEffect(() => {
    if (isTOn) setBank("t");
    else setBank("e");
  }, [isTOn]);

  useEffect(() => {
    if (!isPowerOn) {
      setSoundName("");
    }
  }, [isPowerOn]);

  return (
    <DrumContext.Provider
      value={{
        bank,
        soundName,
        isPowerOn,
        volume,
        isTOn,
        handleSoundName,
        handlePower,
        handleTOn,
        handleVolumeChange,
      }}
    >
      {children}
    </DrumContext.Provider>
  );
};


export function useDrumContext(){
    const {
        bank,
        soundName,
        isPowerOn,
        volume,
        isTOn,
        handleSoundName,
        handlePower,
        handleTOn,
        handleVolumeChange
    } = useContext(DrumContext);
   
    return {bank,
        soundName,
        isPowerOn,
        volume,
        isTOn,
        handleSoundName,
        handlePower,
        handleTOn,
        handleVolumeChange}
   }