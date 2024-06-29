import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch } from "react-redux";
import { setImage } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "你們毫無畏懼地——也可能只是嚇傻了——迎上了這場腥風血雨，白混著暗紅的肉團大肆地砸到了甲板上，所有人無一倖免地被這些半固態的黏稠玩意兒沾上了，驚世駭俗的味道撲面而來，你這輩子從未如此後悔自己長著鼻子，你相信這個味道不是能夠簡單去除的。",
  "離這越遠越好，你想著。",
  "請全體船員各擲一個（DICE10）和一個（COIN）。",
  "你好臭！依（DICE10）數字大小決定被噴射物覆蓋的身體區域大小，1為巴掌大，10為身體面積1/2，被覆蓋到的位置會散發出驚天地泣鬼神的腐臭味，並維持該數字天數才會自然消散。",
  "Ｉ：你似乎是被骨頭碎塊砸中了，這些小東西的爆發力似乎比生前更加兇猛。自選受傷部位，本事件中所有戰鬥的偶數回合都無法行動。",
  "Ｐ：因為某個你才明白的理由，你亢奮了起來，身體出現了驚人的活動力。本事件所有戰鬥的奇數回合可以多行動一次。",
  "-",
];

function Main5m() {
  const [textState, textShow] = useState(0);
  const [diceText, showDiceText] = useState(false);
  const [coinText, showCoinText] = useState(false);
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
  }, [textState, diceText, coinText]);

  return (
    <div className="text-box">
      <p className="text" onAnimationEnd={showNextText}>
        你們毫無畏懼地——也可能只是嚇傻了——迎上了這場腥風血雨，白混著暗紅的肉團大肆地砸到了甲板上，所有人無一倖免地被這些半固態的黏稠玩意兒沾上了，驚世駭俗的味道撲面而來，你這輩子從未如此後悔自己長著鼻子，你相信這個味道不是能夠簡單去除的。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={showNextText}
      >
        離這越遠越好，你想著。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={showNextText}
      >
        請全體船員各擲一個
        <span
          className="hint"
          onClick={() => {
            showDiceText(true);
          }}
        >
          （DICE10）
        </span>
        和一個
        <span
          className="hint"
          onClick={() => {
            showCoinText(true);
          }}
        >
          （COIN）
        </span>
        。
      </p>
      <p className={diceText ? "text" : "hidden"}>
        你好臭！依（DICE10）數字大小決定被噴射物覆蓋的身體區域大小，1為巴掌大，10為身體面積1/2，被覆蓋到的位置會散發出驚天地泣鬼神的腐臭味，並維持該數字天數才會自然消散。
      </p>
      <p className={coinText ? "text" : "hidden"}>
        Ｉ：你似乎是被骨頭碎塊砸中了，這些小東西的爆發力似乎比生前更加兇猛。自選受傷部位，本事件中所有戰鬥的偶數回合都無法行動。
        <br />
        <span className="mark">
          ※ 該傷害視為負面效果，船戰擲骰也可依照隊友的狀態推派誰進行擲骰。
        </span>
        <br />
        Ｐ：因為某個你才明白的理由，你亢奮了起來，身體出現了驚人的活動力。本事件所有戰鬥的奇數回合可以多行動一次。
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
        <p>越遠越好</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}
export default Main5m;
