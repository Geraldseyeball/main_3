import { useState, useEffect } from "react";
import MobileScene from "./components/MobileScene";
import MainScene from "./components/MainScene";

function App() {
  const [windowState, changeState] = useState(true);
  useEffect(() => {
    window.addEventListener("load", () => {
      if (window.innerHeight <= 640) {
        changeState(false);
      }
    });
    window.addEventListener("resize", () => {
      if (window.innerHeight <= 640) {
        changeState(false);
      } else {
        changeState(true);
      }
    });
  }, []);
  return (
    <>
      <MobileScene></MobileScene>
      <MainScene windowState={windowState}></MainScene>
    </>
  );
}

export default App;
