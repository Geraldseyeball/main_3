import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlackState } from "../../redux/stateSlice/stateSlice";

function TypingEffect({ text }) {
  const blackState = useSelector((state) => state.state.black);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, updateIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (blackState) {
      setTimeout(
        () => {
          if (currentIndex < text.length) {
            setDisplayText(displayText + text[currentIndex]);
            updateIndex(currentIndex + 1);
          }
        },
        currentIndex < 27 ? 200 : 1000
      );
      if (currentIndex == text.length) {
        setTimeout(() => {
          dispatch(setBlackState(false));
        }, 2000);
      }
    }
  }, [currentIndex, blackState]);
  return <p>{displayText}</p>;
}

function BlackScene() {
  const blackState = useSelector((state) => state.state.black);
  return (
    <section className={blackState ? "darkness" : "hidden"}>
      <TypingEffect
        text={"物體破水而出的聲音傳進腦子，巨大的牆壁從四周猛地竄起，然後"}
      ></TypingEffect>
    </section>
  );
}

export default BlackScene;
