import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch } from "react-redux";
import { setImage } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "你們盡可能地將船朝左航去，試圖避開這場恐怖的連環爆破，迅速的判斷讓你們遠離了災難中心。儘管如此你們還是無可避免地受到了些波及，肉塊零碎地砸落，稀爛的落地聲裡偶爾會混雜著扎實的悶響，能逼出人生理性淚水的腐臭在甲板上漫了開來。",
  "必須離開，你想著。",
  "船隻耐久值－5。請全體船員各擲一個（DICE）。",
  "什麼味道！依（DICE）數字大小決定被噴射物覆蓋的身體區域大小，1為無沾染，6為身體面積1/3，被覆蓋到的位置會散發出驚天地泣鬼神的腐臭味，並維持該數字天數才會自然消散。",
  "-",
];

function Main5l() {
  const [textState, textShow] = useState(0);
  const [diceText, showDiceText] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  function showNextText() {
    textShow(textState + 1);
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState, diceText]);

  return (
    <div className="text-box">
      <p className="text" onAnimationEnd={showNextText}>
        你們盡可能地將船朝左航去，試圖避開這場恐怖的連環爆破，迅速的判斷讓你們遠離了災難中心。儘管如此你們還是無可避免地受到了些波及，肉塊零碎地砸落，稀爛的落地聲裡偶爾會混雜著扎實的悶響，能逼出人生理性淚水的腐臭在甲板上漫了開來。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={showNextText}
      >
        必須離開，你想著。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={showNextText}
      >
        船隻耐久值－5。
        <br />
        請全體船員各擲一個
        <span
          className="hint"
          onClick={() => {
            showDiceText(true);
          }}
        >
          （DICE）。
        </span>
      </p>
      <p className={diceText ? "text" : "hidden"}>
        什麼味道！依（DICE）數字大小決定被噴射物覆蓋的身體區域大小，1為無沾染，6為身體面積1/3，被覆蓋到的位置會散發出驚天地泣鬼神的腐臭味，並維持該數字天數才會自然消散。
      </p>
      <button
        className={textState > 2 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(setImage(7));
          dispatch(addLog(data));
          navigate("/6");
        }}
      >
        <img src={btnImg} alt="" />
        <p>必須離開</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}
export default Main5l;
