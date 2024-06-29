import { useDispatch, useSelector } from "react-redux";
import btnImg from "/UI/btn_sen_normal.png";
import { useNavigate } from "react-router-dom";
import { addLog } from "../../../redux/logSlice/logSlice";
import { useEffect, useRef, useState } from "react";

const data = [
  "這些混帳海鮮就該好好地待在餐盤裡，休想踏上食物鏈的頂端！海面上飄浮的破碎晶體就是你們勝利的煙火。",
  "習慣是恐怖的，那惱人的低頻噪音已經如同空氣一般，就只是存在著。",
  "你的眼睛適應了昏暗的環境，在那堆殘破的甲殼內，你看到了那堆閃閃發亮的好東西，還有一些你並不是想看得這麼仔細的生物組織，泛著金屬藍色光澤的暗紅爛肉包著骨質的棒狀物，透亮的球體正在四處滾動，還有那坨纏繞成團的細長絲線……龍蝦應該是不會長頭髮的，對吧？",
  "-",
];

function Main14_2() {
  const battleState = useSelector((state) => state.state.battle);
  const monster = useSelector((state) => state.state.monster);
  const [hintState, setHintState] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  useEffect(() => {
    scrollToBottom();
  }, [hintState]);

  const item = {
    shrimp: (
      <>
        每艘船獲得 -<br />
        未打磨的藍晶 x400
        <br />
        結晶化的眼球 x8
        <br />
        10銀
        <br />
        石化鯨礦 x5
        <br />
        刺脊長棍 x2
      </>
    ),
    shrimpAngry: (
      <>
        每艘船獲得 -<br />
        未打磨的藍晶 x650
        <br />
        結晶化的眼球 x8
        <br />
        10銀
        <br />
        石化鯨礦 x5
        <br />
        刺脊長棍 x2
        <br />
        閃爍藍光的堅硬甲殼 x4
      </>
    ),
  };

  const itemData = {
    shrimp: [
      "[獲得獎勵]",
      "每艘船獲得 -",
      "未打磨的藍晶 x400",
      "結晶化的眼球 x8",
      "10銀",
      "石化鯨礦 x5",
      "刺脊長棍 x2",
      "-",
    ],
    shrimpAngry: [
      "[獲得獎勵]",
      "每艘船獲得 -",
      "未打磨的藍晶 x650",
      "結晶化的眼球 x8",
      "10銀",
      "石化鯨礦 x5",
      "刺脊長棍 x2",
      "刺脊長棍 x2",
      "閃爍藍光的堅硬甲殼 x4",
      "-",
    ],
  };

  return (
    <div className="text-box">
      <p className={!battleState ? "text" : "hidden"}>
        這些混帳海鮮就該好好地待在餐盤裡，休想踏上食物鏈的頂端！海面上飄浮的破碎晶體就是你們勝利的煙火。
      </p>
      <p className={!battleState ? "text" : "hidden"}>
        習慣是恐怖的，那惱人的低頻噪音已經如同空氣一般，就只是存在著。
      </p>
      <p className={!battleState ? "text" : "hidden"}>
        你的眼睛適應了昏暗的環境，在那堆殘破的甲殼內，你看到了那堆閃閃發亮的好東西，還有一些你並不是想看得這麼仔細的生物組織，泛著金屬藍色光澤的暗紅爛肉包著骨質的棒狀物，透亮的球體正在四處滾動，還有那坨纏繞成團的細長絲線……龍蝦應該是不會長頭髮的，對吧？
      </p>
      <p
        className={!battleState ? "text" : "hidden"}
        onClick={() => {
          setHintState(true);
        }}
      >
        <span className="hint">[獲得獎勵]</span>
      </p>
      <p className={hintState ? "text" : "hidden"}>{item[monster]}</p>
      <button
        className={!battleState ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(data));
          dispatch(addLog(itemData[monster]));
          navigate("/15");
        }}
      >
        <img src={btnImg} alt="" />
        <p>繼續前進</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}
export default Main14_2;
