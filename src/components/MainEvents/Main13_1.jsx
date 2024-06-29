import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_BW.png";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  ">[1]",
  "你們決定前往最左側的通道，船隻堪堪擦過稍嫌狹窄的入口，純粹的黑暗隨著深入纏上了你們，你注意到船上的照明設備在這似乎難以起到作用，如同被抑制般僅能照亮不到一米的距離。",
  "請擲一個（COIN）。",
  "Ｐ - 你聽不見，這裡實在是太黑了。",
  "Ｉ - 你們在漆黑的甲板上發現了一張殘破的紙片，不知道是何時飄上來的，紙的觸感相當粗糙，有著被反覆浸濕過的痕跡，你只能依稀辨別出以下段落。",
  "特殊骰 - 艾沫愛撫著你們的頭顱，獲得所有通道內的資訊。",
  "[殘破的紙片]",
  "「……船長一定是▇了，這行不通的，如果諾亞能夠被▇▇，那不就代表▇▇也會被▇▇嗎？我得想辦法離▇▇裡！",
  "（一串被粗暴劃去的句子）",
  "（兩個被反覆塗抹的字）",
  "▇不知道，還有哪裡▇▇呢？我們註定▇▇▇▇？」",
  "你們聽見奇怪而巨大的咕嚕聲，像是三天只啃同一條魚乾的人肚子發出的抱怨。黑暗朝你們湧來，刺耳的摩擦聲讓人有不好的聯想，藍光幽幽地在遠處亮起，那是通道的盡頭。",
  "船隻耐久值－10。",
  "-",
];
const dataFalse = [
  "你們決定前往最左側的通道，船隻堪堪擦過稍嫌狹窄的入口，純粹的黑暗隨著深入纏上了你們，你注意到船上的照明設備在這似乎難以起到作用，如同被抑制般僅能照亮不到一米的距離。",
  "請擲一個（COIN）。",
  "Ｐ - 你聽不見，這裡實在是太黑了。",
  "Ｉ - 你們在漆黑的甲板上發現了一張殘破的紙片，不知道是何時飄上來的，紙的觸感相當粗糙，有著被反覆浸濕過的痕跡，你只能依稀辨別出以下段落。",
  "特殊骰 - 艾沫愛撫著你們的頭顱，獲得所有通道內的資訊。",
  "你們聽見奇怪而巨大的咕嚕聲，像是三天只啃同一條魚乾的人肚子發出的抱怨。黑暗朝你們湧來，刺耳的摩擦聲讓人有不好的聯想，藍光幽幽地在遠處亮起，那是通道的盡頭。",
  "船隻耐久值－10。",
  "-",
];

function Main13_1() {
  const [textState, setTextState] = useState(0);
  const [hintState, setHintState] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  const style = {
    opacity: 0.7,
  };

  useEffect(() => {
    scrollToBottom();
  }, [textState, hintState]);

  return (
    <div className="text-box">
      <p
        className="text"
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        你們決定前往最左側的通道，船隻堪堪擦過稍嫌狹窄的入口，純粹的黑暗隨著深入纏上了你們，你注意到船上的照明設備在這似乎難以起到作用，如同被抑制般僅能照亮不到一米的距離。
      </p>
      <p className={textState > 0 ? "text" : "hidden"}>
        請擲一個
        <span
          className="hint-white"
          onClick={() => {
            setTextState(2);
          }}
        >
          （COIN）。
        </span>
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        Ｐ - 你聽不見，這裡實在是太黑了。 <br />Ｉ -
        你們在漆黑的甲板上發現了一張
        <span
          className="hint-white"
          onClick={() => {
            setHintState(true);
          }}
        >
          殘破的紙片
        </span>
        ，不知道是何時飄上來的，紙的觸感相當粗糙，有著被反覆浸濕過的痕跡，你只能依稀辨別出以下段落。
        <br />
        特殊骰 - 艾沫愛撫著你們的頭顱，獲得所有通道內的資訊。
      </p>
      <p className={hintState ? "text" : "hidden"} style={style}>
        「……船長一定是▇了，這行不通的，如果諾亞能夠被▇▇，那不就代表▇▇也會被▇▇嗎？我得想辦法離▇▇裡！
        <br />
        （一串被粗暴劃去的句子） （兩個被反覆塗抹的字）
        <br />
        ▇不知道，還有哪裡▇▇呢？我們註定▇▇▇▇？」
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        你們聽見奇怪而巨大的咕嚕聲，像是三天只啃同一條魚乾的人肚子發出的抱怨。
        <br />
        黑暗朝你們湧來，刺耳的摩擦聲讓人有不好的聯想，藍光幽幽地在遠處亮起，那是通道的盡頭。
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        船隻耐久值－10。
      </p>
      <button
        className={textState > 4 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(setImage(15));
          dispatch(setMainState("normal"));
          dispatch(addLog(hintState ? data : dataFalse));
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

export default Main13_1;
