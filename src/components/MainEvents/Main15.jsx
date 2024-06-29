import { useEffect, useRef, useState } from "react";
import mainImg15_1 from "/EP3/3-15-1.png";
import mainImg15_2 from "/EP3/3-15-2.png";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch } from "react-redux";
import { setImage } from "../../../redux/stateSlice/stateSlice";
import { useNavigate } from "react-router-dom";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = {
  hasHint: [
    "細小的窸窣聲引起了你們的注意，要不是周圍這片令人抓狂的寂靜，你肯定會錯過這麼小的騷動。",
    "更多奇怪的符號進入你們的視線，就在海怪們圍繞著的巨大晶柱上，破碎的結晶匯聚成形，正盡力發出它最耀眼的光芒，像是想要訴說什麼。",
    "這些歪七扭八的線條分開看的話似乎有點眼熟，但當它們湊在一塊時就讓人困惑。",
    "在你們和晶柱面面相覷的時候，那行符號似乎逐漸失去了控制，幾次閃爍後它黯淡下來，組成它的結晶開始鬆動，一顆顆墜入水中，最後只剩下了原本光滑的平面。",
    "你們是否持有【連缺ＯＯ因型都能懂的Ｏ學入門Ｏ南】？",
    ">[是]",
    "一回生，二回熟。你們熟練地取出那本潔白到不似這個世界造物的書籍，希望它能再次展現奇蹟。",
    "很不幸的，這串符號被放在了練習題中，不過它很體貼地給出了提示。",
    "切半、移動、三角函數，呃、最後的那個詞是什麼鬼？",
    "-",
  ],
  noHint: [
    "細小的窸窣聲引起了你們的注意，要不是周圍這片令人抓狂的寂靜，你肯定會錯過這麼小的騷動。",
    "更多奇怪的符號進入你們的視線，就在海怪們圍繞著的巨大晶柱上，破碎的結晶匯聚成形，正盡力發出它最耀眼的光芒，像是想要訴說什麼。",
    "這些歪七扭八的線條分開看的話似乎有點眼熟，但當它們湊在一塊時就讓人困惑。",
    "在你們和晶柱面面相覷的時候，那行符號似乎逐漸失去了控制，幾次閃爍後它黯淡下來，組成它的結晶開始鬆動，一顆顆墜入水中，最後只剩下了原本光滑的平面。",
    "你們是否持有【連缺ＯＯ因型都能懂的Ｏ學入門Ｏ南】？",
    ">[否]",
    "-",
  ],
};

function Main15() {
  const [textState, setTextState] = useState(0);
  const [imgState, setImageState] = useState({ img1: false, img2: false });
  const [hintState, setHintState] = useState(false);
  const [hint2State, setHint2State] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function showText() {
    setTextState((prev) => prev + 1);
  }

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState, hintState]);

  return (
    <div className="text-box">
      <img
        src={mainImg15_1}
        alt=""
        className={imgState.img1 ? "exImg_1" : "hidden"}
        onAnimationEnd={() => {
          setImageState((prev) => {
            return { ...prev, img2: true };
          });
        }}
      />
      <img
        src={mainImg15_2}
        alt=""
        className={imgState.img2 ? "exImg_2" : "hidden"}
        onAnimationEnd={showText}
      />
      <p
        className="text"
        onAnimationEnd={() => {
          setImageState((prev) => {
            return { ...prev, img1: true };
          });
        }}
      >
        細小的窸窣聲引起了你們的注意，要不是周圍這片令人抓狂的寂靜，你肯定會錯過這麼小的騷動。
        <br />
        更多奇怪的符號進入你們的視線，就在海怪們圍繞著的巨大晶柱上，破碎的結晶匯聚成形，正盡力發出它最耀眼的光芒，像是想要訴說什麼。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        這些歪七扭八的線條分開看的話似乎有點眼熟，但當它們湊在一塊時就讓人困惑。
        <br />
        在你們和晶柱面面相覷的時候，那行符號似乎逐漸失去了控制，幾次閃爍後它黯淡下來，組成它的結晶開始鬆動，一顆顆墜入水中，最後只剩下了原本光滑的平面。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        你們是否持有【連缺ＯＯ因型都能懂的Ｏ學入門Ｏ南】？
        <br />
        <span
          className="hint"
          onClick={() => {
            setHintState(true);
          }}
        >
          ［是］
        </span>
        <span className="hint">［否］</span>
      </p>
      <p className={hint2State ? "text" : "hidden"}>噢，那真是太可惜了。</p>
      <p className={hintState ? "text" : "hidden"} onAnimationEnd={showText}>
        一回生，二回熟。你們熟練地取出那本潔白到不似這個世界造物的書籍，希望它能再次展現奇蹟。
      </p>
      <p className={textState > 3 ? "text" : "hidden"}>
        <span className="hint" onClick={showText}>
          ［翻找解答］
        </span>
      </p>
      <p className={textState > 4 ? "text" : "hidden"}>
        很不幸的，這串符號被放在了練習題中，不過它很體貼地給出了提示。
        <br />
        切半、移動、三角函數，呃、最後的那個詞是什麼鬼？
      </p>
      <button
        className={textState > 2 ? "btn main-btn" : "hidden"}
        onClick={() => {
          setImageState({ img1: false, img2: false });
          dispatch(setImage(14));
          dispatch(addLog(hintState ? data.hasHint : data.noHint));
          navigate("/16");
        }}
      >
        <img src={btnImg} alt="" />
        <p>繼續前進</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}

export default Main15;
