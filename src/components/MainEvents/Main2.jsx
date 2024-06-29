import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch } from "react-redux";
import { setImage } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "在成片如墨的海面上，那個白色漂浮物顯得格外突兀，半圓弧的造型上有豎紋的凹凸。一晃眼，它就像是會自體繁殖似成了兩個，然後是五個、十來個、數十個……。它們隨著浪無助地起落，像群海中的幽魂般載浮載沉，安靜地盪了過來。",
  "刺鼻的腥味竄進了鼻腔，你在碼頭聞過這樣的味道，和那些漁夫擦肩而過時，這浸在他們骨子裡的氣味便會纏上來，那是海裡的東西死去的味道。",
  "在海上度過大半時間的人不難辨認這些傢伙，這種被視作遠行吉祥物的鯨魚們偶爾會跟上船隻雀躍肆意地伴遊，不少人將這視作海洋的祝福，認為牠們的陪伴能讓船員在無盡的汪洋中不失去方向。那些吹著哨子的傢伙是這麼說的，若能看到這些黑色砲彈躍起時腹部的那抹白，就代表這趟旅途會一帆風順。",
  "能一次看到這麼多白腹，你們還真是運氣好到嚇人，對吧？",
  "-",
];

function Main2() {
  const [hint1State, showHint1] = useState(false);
  const [hint2State, showHint2] = useState(false);
  const [btnState, showBtn] = useState(false);
  const ref = useRef();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  useEffect(() => {
    scrollToBottom();
  }, [hint1State, hint2State]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  function btnClick() {
    dispatch(addLog(data));
    dispatch(setImage(4));
    navigate("/3");
  }
  return (
    <div className="text-box">
      <p className="text">
        在成片如墨的海面上，那個白色漂浮物顯得格外突兀，半圓弧的造型上有豎紋的凹凸。一晃眼，它就像是會自體繁殖似成了兩個，然後是五個、十來個、數十個……。它們隨著浪無助地起落，像群海中的
        <span
          className="hint"
          onClick={() => {
            showHint1(true);
            dispatch(setImage(2));
          }}
        >
          幽魂
        </span>
        般載浮載沉，安靜地盪了過來。
      </p>
      <p className={hint1State ? "text" : "hidden"}>
        刺鼻的腥味竄進了鼻腔，你在碼頭聞過這樣的味道，和那些漁夫擦肩而過時，這浸在他們骨子裡的氣味便會纏上來，那是
        <span
          className="hint"
          onClick={() => {
            showHint2(true);
            dispatch(setImage(3));
          }}
        >
          海裡的東西
        </span>
        死去的味道。
      </p>
      <p
        className={hint2State ? "text" : "hidden"}
        onAnimationEnd={() => {
          showBtn(true);
        }}
      >
        在海上度過大半時間的人不難辨認這些傢伙，這種被視作遠行吉祥物的鯨魚們偶爾會跟上船隻雀躍肆意地伴遊，不少人將這視作海洋的祝福，認為牠們的陪伴能讓船員在無盡的汪洋中不失去方向。
        <br />
        那些吹著哨子的傢伙是這麼說的，若能看到這些黑色砲彈躍起時腹部的那抹白，就代表這趟旅途會一帆風順。
        <br />
        <br />
        能一次看到這麼多白腹，你們還真是運氣好到嚇人，對吧？
      </p>
      <button
        className={btnState ? "btn main-btn" : "hidden"}
        onClick={btnClick}
      >
        <img src={btnImg} alt="" />
        <p>他們來了</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}
export default Main2;
