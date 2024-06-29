import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "奇怪的大螃蟹顯然不是你們這群歷經滄桑的無根者的對手，湛藍的身軀在幾次不甘地顫抖後徹底倒下，緩緩沒入泛著冷光的體液中，一切又歸於寂靜，只有如蛆附骨的低沉頻率縈繞在耳邊，你開始有些不確定你是不是真的有聽到這道聲響。",
  "什麼都吞的巨大鯨魚顯然不介意吃一點無用的人類貨幣，要是能找到些金銀珠寶就更好了。",
];

const logData = [...data, "-"];

function Main10() {
  const battleState = useSelector((state) => state.state.battle);
  const monster = useSelector((state) => state.state.monster);
  const [textState, showText] = useState(0);
  const [hintState, showHintState] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getItem = {
    crab: (
      <>
        每艘船獲得 - <br />
        未打磨的藍晶 x400
        <br />
        堅硬蟹螯 x4
        <br />
        10銀
        <br />
        石化鯨礦 x5
        <br />
        鋸緣指虎 x2
      </>
    ),
    crabAngry: (
      <>
        每艘船獲得 - <br />
        未打磨的藍晶 x650
        <br />
        堅硬蟹螯 x4
        <br />
        10銀
        <br />
        石化鯨礦 x5
        <br />
        鋸緣指虎 x2
        <br />
        閃爍藍光的堅硬甲殼 x4
      </>
    ),
  };

  const itemData = {
    crab: [
      "[戰鬥獎勵]",
      "每艘船獲得 -",
      "未打磨的藍晶 x400",
      "堅硬蟹螯 x4",
      "10銀",
      "石化鯨礦 x5",
      "鋸緣指虎 x2",
      "-",
    ],
    crabAngry: [
      "[戰鬥獎勵]",
      "每艘船獲得 -",
      "未打磨的藍晶 x650",
      "堅硬蟹螯 x4",
      "10銀",
      "石化鯨礦 x5",
      "鋸緣指虎 x2",
      "閃爍藍光的堅硬甲殼 x4",
      "-",
    ],
  };

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState, hintState]);

  const textList = data.map((el, i) => (
    <p
      key={i}
      className={!battleState && textState >= i ? "text" : "hidden"}
      onAnimationEnd={() => {
        showText(textState + 1);
      }}
    >
      {el}
    </p>
  ));
  const btn = (
    <button
      key={data.length}
      className={textState > 2 ? "btn main-btn" : "hidden"}
      onClick={() => {
        dispatch(setImage(13));
        dispatch(addLog(logData));
        dispatch(addLog(itemData[monster]));
        navigate("/11");
      }}
    >
      <img src={btnImg} alt="" />
      <p>繼續前進</p>
    </button>
  );
  textList.push(btn);
  return (
    <div className="text-box">
      {textList}
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={() => {
          showText(textState + 1);
        }}
        onClick={() => {
          showHintState(true);
        }}
      >
        <span className="hint">[戰鬥獎勵]</span>
      </p>
      <p className={hintState ? "text" : "hidden"}>{getItem[monster]}</p>
      <div ref={ref}></div>
    </div>
  );
}
export default Main10;
