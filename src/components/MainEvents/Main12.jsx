import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch } from "react-redux";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "不見天日的平穩航行讓人很難判斷時間的流逝，如果不是眼前出現的分叉路，你一度以為船並沒有在前進。",
  "廣闊的空間被分成四條不同的道路，小心一點的話勉強能讓你們的船隻通過，黑黝黝的洞口像未知生物張開的大嘴，正耐心等待獵物進入，你們注意到洞口內側有微小的藍光閃爍。",
  "-",
];

function Main12() {
  const [textState, showText] = useState(0);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          showText(textState + 1);
        }}
      >
        不見天日的平穩航行讓人很難判斷時間的流逝，如果不是眼前出現的分叉路，你一度以為船並沒有在前進。廣闊的空間被分成四條不同的道路，小心一點的話勉強能讓你們的船隻通過，黑黝黝的洞口像未知生物張開的大嘴，正耐心等待獵物進入，你們注意到洞口內側有微小的藍光閃爍。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={() => {
          showText(textState + 1);
        }}
      >
        該往哪走？
      </p>
      <div className={textState > 1 ? "mainbtn-group cave" : "hidden"}>
        <button
          className="btn"
          onClick={() => {
            dispatch(setImage(8));
            dispatch(setMainState("dark"));
            dispatch(addLog(data));
            navigate("/13_1");
          }}
        >
          <img src={btnImg} alt="" />
          <p>1</p>
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch(setImage(8));
            dispatch(setMainState("dark"));
            dispatch(addLog(data));
            navigate("/13_2");
          }}
        >
          <img src={btnImg} alt="" />
          <p>2</p>
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch(setImage(8));
            dispatch(setMainState("dark"));
            dispatch(addLog(data));
            navigate("/13_3");
          }}
        >
          <img src={btnImg} alt="" />
          <p>3</p>
        </button>
        <button
          className="btn"
          onClick={() => {
            dispatch(setImage(8));
            dispatch(setMainState("dark"));
            dispatch(addLog(data));
            navigate("/13_4");
          }}
        >
          <img src={btnImg} alt="" />
          <p>4</p>
        </button>
      </div>
      <div ref={ref}></div>
    </div>
  );
}

export default Main12;
