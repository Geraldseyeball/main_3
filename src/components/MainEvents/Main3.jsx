import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnBg from "/UI/btn_sen_blood.png";
import { useDispatch } from "react-redux";
import {
  setBloodState,
  setImage,
  setMainState,
} from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "並沒有太多的思考時間，你們的船很快便被層層圍繞，你曾見過最大的鯨群也沒有這個陣仗。白色幽魂無序地飄盪，像是種無聲的控訴，那些大傢伙僵硬的姿態讓人困惑，光滑皮膚鼓脹成異常飽滿的球狀，看上去有些滑稽。",
  "某個瞬間開始你察覺到了低沉的頻率在耳際迴盪著，它似乎一直都存在，悄悄浸染了每條神經。暈眩困擾著思緒，但腦內不時的抽痛保證著你的清醒，之前嚥下的食物在胃裡翻騰，喧囂著想回到新鮮的空氣中。一個小朋友輕輕蹭向船身，如同生前它興致一來的撒嬌，不祥的預感在此刻攀升至了頂點。",
  "［……？］",
  "噗，很輕巧的一聲破裂，深紅色的煙火綻放了。",
  "碎肉、內臟、骨塊，像是精心設計的驚喜，連鎖反應似的一個接著一個，血肉組成的煙火大會開始了。爆炸的力度讓船身不住擺盪，所有能從體內掏出的東西伴隨著震耳欲聾的聲響奮力噴發，為它們唯一的觀眾演示了生命最後的燦爛，漫天的血雨朝你們落下。",
  "-",
];

function Main3({ main3BtnState }) {
  const [textState, textShow] = useState(0);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function explosion() {
    dispatch(setBloodState());
  }
  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState]);

  return (
    <div className="text-box">
      <p
        className="text"
        onAnimationEnd={() => {
          textShow(textState + 1);
        }}
      >
        並沒有太多的思考時間，你們的船很快便被層層圍繞，你曾見過最大的鯨群也沒有這個陣仗。白色幽魂無序地飄盪，像是種無聲的控訴，那些大傢伙僵硬的姿態讓人困惑，光滑皮膚鼓脹成異常飽滿的球狀，看上去有些滑稽。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={() => {
          textShow(textState + 1);
        }}
      >
        某個瞬間開始你察覺到了低沉的頻率在耳際迴盪著，它似乎一直都存在，悄悄浸染了每條神經。
        <br />
        暈眩困擾著思緒，但腦內不時的抽痛保證著你的清醒，之前嚥下的食物在胃裡翻騰，喧囂著想回到新鮮的空氣中。一個小朋友輕輕蹭向船身，如同生前它興致一來的撒嬌，不祥的預感在此刻攀升至了頂點。
      </p>
      <p className={textState > 1 ? "text hint" : "hidden"} onClick={explosion}>
        ［……？］
      </p>
      <div className={main3BtnState ? "mainbtn-group" : "hidden"}>
        <button
          className="btn"
          onClick={() => {
            dispatch(setImage(6));
            dispatch(addLog(data));
            navigate("/5l");
            dispatch(setMainState("normal"));
          }}
        >
          <img src={btnBg} alt="" />
          <p>往左</p>
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch(setImage(6));
            dispatch(addLog(data));
            navigate("/5m");
            dispatch(setMainState("normal"));
          }}
        >
          <img src={btnBg} alt="" />
          <p>往中</p>
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch(setImage(6));
            dispatch(addLog(data));
            navigate("/5r");
            dispatch(setMainState("normal"));
          }}
        >
          <img src={btnBg} alt="" />
          <p>往右</p>
        </button>
      </div>
      <div ref={ref}></div>
    </div>
  );
}
export default Main3;
