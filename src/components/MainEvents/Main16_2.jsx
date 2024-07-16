import { useEffect, useRef, useState } from "react";
import btnImg from "/UI/btn_sen_BW.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";
import {
  setCrystal,
  setItem,
  setPBronze,
  setPSliver,
  setUncrystal,
} from "../../../redux/itemSlice/itemSlice";

const data = [
  ">[Ｚ]",
  "你們決定前往左二的通道，黑暗奪去你們視野的同時帶來一道隱約的歌聲，你聽過這個旋律，聽說當陸地未分裂時母親們就在唱著，讓孩子遠離危險與不幸安然入睡，這是甜蜜而溫柔的搖籃曲，不應該滿溢悲傷。",
  "海上的歌聲一向不是什麼好兆頭，但你們無法回頭，只能任由那心碎的女人悠悠地吟唱，一個散發幽藍光芒的洞口出現在轉角，你們的船隻輕巧地停下。",
  "洞穴裡沒有半個人影，只有成片的花朵無風搖曳著，冰晶般剔透的花瓣散發著微弱的光芒，在血肉組成的地面上隨著歌曲的旋律輕輕擺動，你們在花田的最深處看到了那個[古樸的箱子]。",
  "在踏入花群時你們擦撞到枝葉發出細小的摩擦聲，歌聲嘎然而止，窸窸窣窣的聲音成倍的放大，混雜著腳步聲，一如你們所製造出的聲響。",
  "你們在洞穴的深處回望時才注意到那個角度刁鑽的小洞，有株落單的花朵佇立在那。",
  "若要靠近，請擲一個（COIN）。",
  "Ｐ－有人踢到了東西，它一路朝著小洞滾去，撞上肉壁後停下，你們走近後發現那是一個被藍色結晶包覆的懷表，「喀。」那花說。",
  "Ｉ／特殊骰－你們湊近了那個洞口，為你們獻唱一路的那個聲音響起，「我永遠愛你，諾亞。」那花說。",
  "-",
  "[古樸的箱子]",
  "每位船員獲得 -",
  "18銀50銅",
  "每艘船獲得 -",
  "未打磨的藍晶 x400",
  "多功能維修套組 x3",
  "機械零件 x5",
  "藍晶 x150",
  "[索羅爾群島仲裁者] 部件B x2",
];
const item = [
  [
    "多功能維修套組 x3 - ",
    "1回合 能使用1次，並在該回合立即恢復 船隻耐久＋150。",
  ],
  ["機械零件 x5", ""],
  ["[索羅爾群島仲裁者] 部件B x2 - ", "需要製作圖紙。"],
  ["-", ""],
];

function Main16_2() {
  const [textState, setTextState] = useState(0);
  const [hintState, setHintState] = useState(false);
  const [itemState, setItemState] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const style = { "font-style": "oblique", cursor: "pointer" };

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  function showText() {
    setTextState((prev) => prev + 1);
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState, hintState]);

  return (
    <div className="text-box">
      <p className="text" onAnimationEnd={showText}>
        你們決定前往左二的通道，黑暗奪去你們視野的同時帶來一道隱約的歌聲，你聽過這個旋律，聽說當陸地未分裂時母親們就在唱著，讓孩子遠離危險與不幸安然入睡，這是甜蜜而溫柔的搖籃曲，不應該滿溢悲傷。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        海上的歌聲一向不是什麼好兆頭，但你們無法回頭，只能任由那心碎的女人悠悠地吟唱，一個散發幽藍光芒的洞口出現在轉角，你們的船隻輕巧地停下。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        <span className="shine">
          洞穴裡沒有半個人影，只有成片的花朵無風搖曳著，冰晶般剔透的花瓣散發著微弱的光芒，在血肉組成的地面上隨著歌曲的旋律輕輕擺動，你們在花田的最深處看到了那個
          <span
            className="shine"
            style={style}
            onClick={() => {
              setItemState(true);
            }}
          >
            [古樸的箱子]
          </span>
          。
        </span>
      </p>
      <p className={itemState ? "text" : "hidden"}>
        每位船員獲得 - <br />
        未打磨的藍晶 x400
        <br />
        每艘船獲得 -<br />
        18銀50銅
        <br />
        多功能維修套組 x3
        <br />
        機械零件 x5
        <br />
        藍晶 x150
        <br />
        [索羅爾群島仲裁者] 部件B x2
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        <span className="shine">
          在踏入花群時你們擦撞到枝葉發出細小的摩擦聲，歌聲嘎然而止，窸窸窣窣的聲音成倍的放大，混雜著腳步聲，一如你們所製造出的聲響。
        </span>
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        <span className="shine">
          你們在洞穴的深處回望時才注意到那個角度刁鑽的小洞，有株落單的花朵佇立在那。
        </span>
      </p>
      <p
        className={textState > 4 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        若要靠近，請擲一個
        <span
          className="hint-white"
          onClick={() => {
            setHintState(true);
          }}
        >
          （COIN）
        </span>
        。
      </p>
      <p className={hintState ? "text" : "hidden"}>
        Ｐ－有人踢到了東西，它一路朝著小洞滾去，撞上肉壁後停下，你們走近後發現那是一個被藍色結晶包覆的懷表，「喀。」那花說。
        <br />
        Ｉ／特殊骰－你們湊近了那個洞口，為你們獻唱一路的那個聲音響起，「我永遠愛你，諾亞。」那花說。
      </p>
      <button
        className={textState > 5 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(data));
          dispatch(setImage(16));
          dispatch(setMainState("normal"));
          dispatch(setPSliver(18));
          dispatch(setPBronze(50));
          dispatch(setUncrystal(400));
          dispatch(setCrystal(150));
          dispatch(setItem(item));
          navigate("/17");
        }}
      >
        <img src={btnImg} alt="" />
        <p>繼續前進</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}

export default Main16_2;
