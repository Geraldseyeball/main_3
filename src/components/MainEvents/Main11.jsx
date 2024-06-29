import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch } from "react-redux";
import { addLog } from "../../../redux/logSlice/logSlice";
import { setImage } from "../../../redux/stateSlice/stateSlice";

const data = {
  has: [
    "海怪的消失讓空間重歸昏暗，讓那道光芒顯得格外耀眼——鑲在牆上的人型結晶閃爍著，儘管接近會吞人的活體牆壁感覺不是什麼好主意，你們還是想盡辦法看到了那行突然出現的圖樣。",
    "它就這麼靜靜地發著冰藍色的光芒，像是從那個不久前還在和你們對話的結晶上爬出來似的，絲線般纖細的裂痕閃著光芒連接到了這行東西。注視這些歪曲的線條令人眩目，耳際持續轟鳴的低頻聲響摻入了雜訊，你回想起那些在碼頭叨叨絮絮讚頌信仰美好的教會混蛋，他們似乎會使用這種符號。",
    "[持有連缺ＯＯ因型都能懂的Ｏ學入門Ｏ南]",
    "你看著眼前的奇怪符號，總覺得這些圖案似曾相識，你想起了那本撿來的怪書，有預感裡頭會有答案。",
    "［翻找解答］",
    "你在「第三Ｏ－趣味Ｏ學」的例題中看見了一模一樣的圖示，答案是４。",
    "-",
  ],
  no: [
    "海怪的消失讓空間重歸昏暗，讓那道光芒顯得格外耀眼——鑲在牆上的人型結晶閃爍著，儘管接近會吞人的活體牆壁感覺不是什麼好主意，你們還是想盡辦法看到了那行突然出現的圖樣。",
    "它就這麼靜靜地發著冰藍色的光芒，像是從那個不久前還在和你們對話的結晶上爬出來似的，絲線般纖細的裂痕閃著光芒連接到了這行東西。注視這些歪曲的線條令人眩目，耳際持續轟鳴的低頻聲響摻入了雜訊，你回想起那些在碼頭叨叨絮絮讚頌信仰美好的教會混蛋，他們似乎會使用這種符號。",
    "-",
  ],
};

function Main11() {
  const [textState, showText] = useState(0);
  const [hintState, showHint] = useState(false);
  const [hint2State, showHint2] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState, hint2State, hintState]);

  return (
    <div className="text-box">
      <p
        className="text"
        onAnimationEnd={() => {
          showText(textState + 1);
        }}
      >
        海怪的消失讓空間重歸昏暗，讓那道光芒顯得格外耀眼——鑲在牆上的人型結晶閃爍著，儘管接近會吞人的活體牆壁感覺不是什麼好主意，你們還是想盡辦法看到了那行突然出現的圖樣。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={() => {
          showText(textState + 1);
        }}
      >
        它就這麼靜靜地發著冰藍色的光芒，像是從那個不久前還在和你們對話的結晶上爬出來似的，絲線般纖細的裂痕閃著光芒連接到了這行東西。注視這些歪曲的線條令人眩目，耳際持續轟鳴的低頻聲響摻入了雜訊，你回想起那些在碼頭叨叨絮絮讚頌信仰美好的教會混蛋，他們似乎會使用這種符號。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={() => {
          showText(textState + 1);
        }}
      >
        你們是否持有【連缺ＯＯ因型都能懂的Ｏ學入門Ｏ南】？
        <br />
        <span
          className="hint"
          onClick={() => {
            showHint(true);
          }}
        >
          ［是］
        </span>
        <span
          className="hint"
          onClick={() => {
            showHint2(true);
          }}
        >
          ［否］
        </span>
      </p>
      <p className={hint2State ? "text" : "hidden"}>噢，那真是太可惜了。</p>
      <p
        className={hintState ? "text" : "hidden"}
        onAnimationEnd={() => {
          showText(textState + 1);
        }}
      >
        你看著眼前的奇怪符號，總覺得這些圖案似曾相識，你想起了那本撿來的怪書，有預感裡頭會有答案。
      </p>
      <p className={textState > 3 ? "text" : "hidden"}>
        <span
          className="hint"
          onClick={() => {
            showText(textState + 1);
          }}
        >
          ［翻找解答］
        </span>
      </p>
      <p className={textState > 4 ? "text" : "hidden"}>
        你在「第三Ｏ－趣味Ｏ學」的例題中看見了一模一樣的圖示，答案是４。
      </p>
      <button
        className={textState > 2 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(hintState ? data.has : data.no));
          dispatch(setImage(14));
          navigate("/12");
        }}
      >
        <img src={btnImg} alt="" />
        <p>繼續前進</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}
export default Main11;
