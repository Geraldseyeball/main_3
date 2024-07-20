import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import btnImg from "/UI/btn_sen_BW.png";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { useNavigate } from "react-router-dom";
import { addLog } from "../../../redux/logSlice/logSlice";
import {
  setCrystal,
  setItem,
  setPBronze,
  setPSliver,
  setUncrystal,
} from "../../../redux/itemSlice/itemSlice";

const data = [
  ">[4]",
  "你們決定前往最右側的通道，狹小的通道幾乎是貼著你們的船身，除了偶爾響起的碰撞聲，這段航行簡直安穩得令人困倦。像是為了方便你們入睡，船燈貼心地在同一時間全數罷工，無盡的黑暗一口吞噬了你們。",
  "就像有什麼東西在阻止光亮，不論原理為何，只要是能發光的物體都失去功用，在純然的漆黑裡，時間的流逝難以捉摸，行進的距離更無法掌握，只有船身輕巧的擺盪提醒著航行仍在持續。",
  "剎那間，一道藍光閃過，速度快得像是幻影，然後是第二道、第三道、無數道，像是漫天流星的倒影被水面捕獲。",
  "在噗通的水聲中你們看清了流光的真身，一隻隻細長的小型魚躍出水面，鱗片在接觸空氣的瞬間泛起銀藍的光芒，又在落入水中時熄滅。",
  "在這場小型流星雨的盡頭，你們看見了願望成真。",
  "一個[湛藍的寶箱]悠悠地漂了過來。",
  "每位船員獲得 -",
  "18銀50銅",
  "每艘船獲得 -",
  "未打磨的藍晶 x400 + (BZ)x4",
  "紅bz - 多功能維修套組 x3",
  "藍bz - 機械零件 x5",
  "綠bz - 藍晶 x150",
  "黑bz - [索羅爾群島仲裁者] 部件A x2",
  "-",
];

function Main13_4() {
  const [textState, setTextState] = useState(0);
  const [hintState, setHintState] = useState(false);
  const [items, setItems] = useState([]);
  const [getItem, setGetItem] = useState({
    red: 0,
    blue: 0,
    green: 0,
    black: 0,
  });
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const input = { color: "#fff", borderBottomColor: "#fff" };
  const white = { color: "#fff", opacity: "0.6" };

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState, hintState]);

  const style = { cursor: "pointer" };

  useEffect(() => {
    const totalItem = [];
    getItem.red > 0 &&
      totalItem.push([
        `多功能維修套組 x${getItem.red * 3} - `,
        "可使用總次數：1。 1回合 能使用1次，並在該回合立即恢復 船隻耐久＋150。 此為消耗性使用道具，總次數用盡後須再次購買才可使用。",
      ]);
    getItem.blue > 0 && totalItem.push([`機械零件 x${getItem.blue * 5}`, ""]);
    getItem.black > 0 &&
      totalItem.push([
        `[索羅爾群島仲裁者] 部件A x${getItem.black * 2} - `,
        "需要製作圖紙。",
      ]);
    setItems(totalItem);
  }, [getItem]);

  return (
    <div className="text-box">
      <p
        className="text"
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        你們決定前往最右側的通道，狹小的通道幾乎是貼著你們的船身，除了偶爾響起的碰撞聲，這段航行簡直安穩得令人困倦。像是為了方便你們入睡，船燈貼心地在同一時間全數罷工，無盡的黑暗一口吞噬了你們。
        <br />
        就像有什麼東西在阻止光亮，不論原理為何，只要是能發光的物體都失去功用，在純然的漆黑裡，時間的流逝難以捉摸，行進的距離更無法掌握，只有船身輕巧的擺盪提醒著航行仍在持續。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        剎那間，一道藍光閃過，速度快得像是幻影，然後是第二道、第三道、無數道，像是漫天流星的倒影被水面捕獲。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        在噗通的水聲中你們看清了流光的真身，一隻隻細長的小型魚躍出水面，鱗片在接觸空氣的瞬間泛起銀藍的光芒，又在落入水中時熄滅。
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        在這場小型流星雨的盡頭，你們看見了願望成真。
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        一個
        <span
          className="crystal"
          style={style}
          onClick={() => {
            setHintState(true);
          }}
        >
          [湛藍的寶箱]
        </span>
        悠悠地漂了過來。
      </p>
      <p className={hintState ? "text" : "hidden"}>
        每位船員獲得 - <br />
        18銀50銅
        <br />
        每艘船獲得 -<br />
        未打磨的藍晶 x400 + (BZ)x4
        <br />
        紅bz - 多功能維修套組 x3
        <br />
        藍bz - 機械零件 x5
        <br />
        綠bz - 藍晶 x150
        <br />
        黑bz - [索羅爾群島仲裁者] 部件A x2
      </p>
      <p className={hintState ? "text" : "hidden"}>
        [擲骰結果] -{" "}
        <input
          className="input-area"
          style={input}
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
          style={input}
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
          style={input}
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
          style={input}
          value={getItem.black}
          onChange={(e) => {
            setGetItem((prev) => {
              return { ...prev, black: e.target.value };
            });
          }}
        />{" "}
        黑<br />
        <span style={white}>
          ※可在底線處輸入擲骰結果，若未填寫則不會被計入自動統計的獎勵中。輸入完數字後直接繼續前進即可。
        </span>
      </p>
      <button
        className={textState > 4 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(setImage(15));
          dispatch(setMainState("normal"));
          dispatch(addLog(data));
          dispatch(setUncrystal(400));
          getItem.green > 0 && dispatch(setCrystal(getItem.green * 150));
          dispatch(setPSliver(18));
          dispatch(setPBronze(50));
          dispatch(setItem(items));
          navigate("/14");
        }}
      >
        <img src={btnImg} alt="" />
        <p>繼續前進</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}

export default Main13_4;
