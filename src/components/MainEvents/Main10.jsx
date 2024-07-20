import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";
import { setItem, setSliver } from "../../../redux/itemSlice/itemSlice";

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
  const [item, setGetItem] = useState({
    red: 0,
    blue: 0,
    green: 0,
    black: 0,
  });
  const [items, setItems] = useState([]);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const style = { opacity: "0.6" };

  const getItem = {
    crab: (
      <>
        每艘船獲得 - <br />
        未打磨的藍晶 x400 + (BZ)x4
        <br />
        <br />
        紅bz - 堅硬蟹螯 x4
        <br />
        藍bz - 10銀
        <br />
        綠bz - 石化鯨礦 x5
        <br />
        黑bz - 鋸緣指虎 x2
      </>
    ),
    crabAngry: (
      <>
        每艘船獲得 - <br />
        未打磨的藍晶 x650 + 閃爍藍光的堅硬甲殼 x4 + (BZ)x4
        <br />
        紅bz - 堅硬蟹螯 x4
        <br />
        藍bz - 10銀
        <br />
        綠bz - 石化鯨礦 x5
        <br />
        黑bz - 鋸緣指虎 x2
        <br />
      </>
    ),
  };

  const itemData = {
    crab: [
      "[戰鬥獎勵]",
      "每艘船獲得 -",
      "未打磨的藍晶 x400 + (BZ)x4",
      "紅bz - 堅硬蟹螯 x4",
      "藍bz - 10銀",
      "綠bz - 石化鯨礦 x5",
      "黑bz - 鋸緣指虎 x2",
      "-",
    ],
    crabAngry: [
      "[戰鬥獎勵]",
      "每艘船獲得 -",
      "未打磨的藍晶 x650 + 閃爍藍光的堅硬甲殼 x4 + (BZ)x4",
      "紅bz - 堅硬蟹螯 x4",
      "藍bz - 10銀",
      "綠bz - 石化鯨礦 x5",
      "黑bz - 鋸緣指虎 x2",
      "-",
    ],
  };

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState, hintState]);

  useEffect(() => {
    let totalItem = [];
    item.red > 0 && totalItem.push([`堅硬蟹螯 x${item.red * 4}`, ""]);
    item.green > 0 && totalItem.push([`石化鯨礦 x${item.green * 5}`, ""]);
    item.black > 0 &&
      totalItem.push([
        `鋸緣指虎 x${item.black * 2} - `,
        "［武器］欄位裝備後，攻擊骰 額外＋80。下回合攻擊骰 再 額外＋20(至多疊加至＋40)。",
      ]);
    setItems(totalItem);
  }, [item]);

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
        item.blue > 0 && dispatch(setSliver(10 * item.blue));
        dispatch(setItem(items));
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
      <p className={hintState ? "text" : "hidden"}>
        [擲骰結果] -{" "}
        <input
          className="input-area"
          value={item.red}
          onChange={(e) => {
            setGetItem((prev) => {
              return { ...prev, red: e.target.value };
            });
          }}
        />{" "}
        紅
        <input
          className="input-area"
          value={item.blue}
          onChange={(e) => {
            setGetItem((prev) => {
              return { ...prev, blue: e.target.value };
            });
          }}
        />{" "}
        藍
        <input
          className="input-area"
          value={item.green}
          onChange={(e) => {
            setGetItem((prev) => {
              return { ...prev, green: e.target.value };
            });
          }}
        />{" "}
        綠
        <input
          className="input-area"
          value={item.black}
          onChange={(e) => {
            setGetItem((prev) => {
              return { ...prev, black: e.target.value };
            });
          }}
        />{" "}
        黑<br />
        <span style={style}>
          ※可在底線處輸入擲骰結果，若未填寫則不會被計入自動統計的獎勵中。輸入完數字後直接繼續前進即可。
        </span>
      </p>
      <div ref={ref}></div>
    </div>
  );
}
export default Main10;
