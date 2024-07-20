import { useDispatch, useSelector } from "react-redux";
import btnImg from "/UI/btn_sen_normal.png";
import { useNavigate } from "react-router-dom";
import { addLog } from "../../../redux/logSlice/logSlice";
import { useEffect, useRef, useState } from "react";
import { setItem, setSliver } from "../../../redux/itemSlice/itemSlice";

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
  const [getItem, setGetItem] = useState({
    red: 0,
    blue: 0,
    green: 0,
    black: 0,
  });
  const [items, setItems] = useState([]);
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
        未打磨的藍晶 x400 + (BZ)x4
        <br />
        <br />
        紅bz - 結晶化的眼球 x8
        <br />
        藍bz - 10銀
        <br />
        綠bz - 石化鯨礦 x5
        <br />
        黑bz - 刺脊長棍 x2
      </>
    ),
    shrimpAngry: (
      <>
        每艘船獲得 -<br />
        未打磨的藍晶 x650 + 閃爍藍光的堅硬甲殼 x4 + (BZ)x4
        <br />
        <br />
        紅bz - 結晶化的眼球 x8
        <br />
        藍bz - 10銀
        <br />
        綠bz - 石化鯨礦 x5
        <br />
        黑bz - 刺脊長棍 x2
      </>
    ),
  };

  const itemData = {
    shrimp: [
      "[獲得獎勵]",
      "每艘船獲得 -",
      "未打磨的藍晶 x400 + (BZ)x4",
      "紅bz - 結晶化的眼球 x8",
      "藍bz - 10銀",
      "綠bz - 石化鯨礦 x5",
      "黑bz - 刺脊長棍 x2",
      "-",
    ],
    shrimpAngry: [
      "[獲得獎勵]",
      "每艘船獲得 -",
      "未打磨的藍晶 x650 + 閃爍藍光的堅硬甲殼 x4 + (BZ)x4",
      "紅bz - 結晶化的眼球 x8",
      "藍bz - 10銀",
      "綠bz - 石化鯨礦 x5",
      "黑bz - 刺脊長棍 x2",
      "-",
    ],
  };
  const style = { opacity: "0.6" };

  useEffect(() => {
    let totalItem = [];
    getItem.red > 0 && totalItem.push([`結晶化的眼球 x${getItem.red * 8}`, ""]);
    getItem.green > 0 && totalItem.push([`石化鯨礦 x${getItem.green * 5}`, ""]);
    getItem.black > 0 &&
      totalItem.push([
        `刺脊長棍 x${getItem.black * 2} - `,
        "［武器］欄位裝備後，攻擊骰 額外＋70。下回合攻擊骰 再 額外＋30(至多疊加至＋60)。",
      ]);
    setItems(totalItem);
  }, [getItem]);

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
      <p className={hintState ? "text" : "hidden"}>
        [擲骰結果] -{" "}
        <input
          className="input-area"
          value={getItem.red}
          onChange={(e) => {
            setGetItem((prev) => {
              return { ...prev, red: e.target.value };
            });
          }}
        />{" "}
        紅
        <input
          className="input-area"
          value={getItem.blue}
          onChange={(e) => {
            setGetItem((prev) => {
              return { ...prev, blue: e.target.value };
            });
          }}
        />{" "}
        藍
        <input
          className="input-area"
          value={getItem.green}
          onChange={(e) => {
            setGetItem((prev) => {
              return { ...prev, green: e.target.value };
            });
          }}
        />{" "}
        綠
        <input
          className="input-area"
          value={getItem.black}
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
      <button
        className={!battleState ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(data));
          dispatch(addLog(itemData[monster]));
          getItem.blue > 0 && dispatch(setSliver(getItem.blue * 10));
          dispatch(setItem(items));
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
