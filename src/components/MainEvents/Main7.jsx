import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_BW.png";
import { useDispatch, useSelector } from "react-redux";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "一片漆黑。",
  "劇烈的顛簸讓你不得不抓緊任何觸手可及的東西來保持平衡，你幾乎以為船會就這麼翻覆，好在潘尼達絲似乎對你們不值錢的小命還不感興趣，你們溫馨的小船在暴風雨般的起落中堅強地衝出一條生路。一次重重地下墜後，濺起的水花如雨般淅淅瀝瀝落了下來，四周終於安靜下來。",
  "伸手不見五指的黑暗包裹著你們，淡淡的腥味騷動著鼻腔，船隻似乎正平穩地行進著，你能聽見水波盪開的聲音，此外還有個若有似無的低頻響動幽幽纏繞著，但當屏息細聽時卻很難捕捉到它。不論如何，你們似乎總算是能夠稍微喘口氣了。",
];

const logData = [...data, "-"];

function Main7() {
  const blackState = useSelector((state) => state.state.black);
  const [textState, updateState] = useState(0);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState]);

  let list = data.map((el, i) => (
    <p
      className={textState >= i && !blackState ? "text" : "hidden"}
      key={i}
      onAnimationEnd={() => {
        updateState(textState + 1);
      }}
    >
      {el}
    </p>
  ));
  let btn = (
    <button
      className={textState > 2 ? "btn main-btn" : "hidden"}
      key={data.length}
      onClick={() => {
        dispatch(setImage(9));
        dispatch(setMainState("off"));
        dispatch(addLog(logData));
        navigate("/8");
      }}
    >
      <img src={btnImg} />
      <p>繼續航行</p>
    </button>
  );
  list.push(btn);
  return (
    <div className="text-box">
      {list}
      <div ref={ref}></div>
    </div>
  );
}
export default Main7;
