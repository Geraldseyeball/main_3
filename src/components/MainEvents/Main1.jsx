import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch } from "react-redux";
import { setImage } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const mainData = [
  "海面風平浪靜，波紋淺淺盪起又泯滅，激不起一點浪花，蒼白的陽光被薄雲籠著模糊地灑落，哪怕曬久了也帶不來暖意。你們離附近的島嶼並不遠，可那些長著翅膀的聒噪土匪連個影子都沒有，這裡安靜得像是暴風雨的前夕，但你們知道，明天仍舊會是這樣一個無風無雨的日子，就像昨天、前天和大前天，還有一直以來的那樣。",
  "這是一片死去的海，並且不介意讓所有路過的傢伙都變成這副死氣沉沉的模樣。",
  "不論願不願意，只要還在海上混口飯吃，總是會聽到這片海域的名字鑽進耳朵，誰不知道海神洋這名字就是為了叫墨瑞瑪那混蛋管管這裡，不要讓這片死寂的海把人當小魚乾一把一把地吞了。",
];

const logData = [...mainData, "-"];

function Main1() {
  const [showText, updateText] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function btnClick() {
    dispatch(addLog(logData));
    dispatch(setImage(1));
    navigate("/2");
  }
  const ref = useRef();
  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  useEffect(() => {
    scrollToBottom();
  }, [showText]);

  const textList = mainData.map((el, i) => (
    <p
      key={i}
      className={i <= showText ? "text" : "hidden"}
      onAnimationEnd={() => {
        updateText(showText + 1);
      }}
    >
      {el}
    </p>
  ));
  const btn = (
    <button
      key={"btn"}
      className={showText === 3 ? "btn main-btn" : "hidden"}
      onClick={btnClick}
    >
      <img src={btnImg} alt="" />
      <p>繼續航行</p>
    </button>
  );
  textList.push(btn);
  return (
    <div className="text-box">
      {textList}
      <div ref={ref}></div>
    </div>
  );
}
export default Main1;
