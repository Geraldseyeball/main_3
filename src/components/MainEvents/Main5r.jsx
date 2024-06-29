import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch } from "react-redux";
import { setImage } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "你們抓緊時間讓船拐向右側，不想置身在這場驚悚煙火大會之中。雖然避開爆炸的中心，但這些小王八蛋沒有打算放過你們，一個開得比一個盛大，像是索命般追著船尾而來。屍塊隨著引力墜落，在甲板和你們身上砸開小小的血花，一股令人窒息的腥臭撲面而來。",
  "得離開這裡，你想著。",
  "請擲一個（DRAW）。請全體船員各擲一個（DICE）。",
  "吉：墨瑞瑪保佑！你們高超的航行技巧在滿海面的未爆彈中殺出了一條生路，就算看上去有些狼狽，終歸是沒有人員受傷。<br/>兇：該死的墨瑞瑪！你能感覺有幾次爆炸就貼著船側，船身在沖擊下左右搖擺，搖搖晃晃的是著逃離這場災難。船隻耐久值－10。",
  "離遠一點！依（DICE）數字大小決定被噴射物覆蓋的身體區域大小，1為無沾染，6為身體面積1/3，被覆蓋到的位置會散發出驚天地泣鬼神的腐臭味，並維持該數字天數才會自然消散。",
  "-",
];

function Main5r() {
  const [textState, textShow] = useState(0);
  const [drawText, showDrawText] = useState(false);
  const [diceText, showDiceText] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  function showNextText() {
    textShow(textState + 1);
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState, drawText, diceText]);

  return (
    <div className="text-box">
      <p className="text" onAnimationEnd={showNextText}>
        你們抓緊時間讓船拐向右側，不想置身在這場驚悚煙火大會之中。雖然避開爆炸的中心，但這些小王八蛋沒有打算放過你們，一個開得比一個盛大，像是索命般追著船尾而來。屍塊隨著引力墜落，在甲板和你們身上砸開小小的血花，一股令人窒息的腥臭撲面而來。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={showNextText}
      >
        得離開這裡，你想著。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={showNextText}
      >
        請擲一個
        <span
          className="hint"
          onClick={() => {
            showDrawText(true);
          }}
        >
          （DRAW）
        </span>
        。
        <br />
        請全體船員各擲一個
        <span
          className="hint"
          onClick={() => {
            showDiceText(true);
          }}
        >
          （DICE）
        </span>
        。
      </p>
      <p className={drawText ? "text" : "hidden"}>
        吉：墨瑞瑪保佑！你們高超的航行技巧在滿海面的未爆彈中殺出了一條生路，就算看上去有些狼狽，終歸是沒有人員受傷。
        <br />
        兇：該死的墨瑞瑪！你能感覺有幾次爆炸就貼著船側，船身在沖擊下左右搖擺，搖搖晃晃的是著逃離這場災難。船隻耐久值－10。
      </p>
      <p className={diceText ? "text" : "hidden"}>
        離遠一點！依（DICE）數字大小決定被噴射物覆蓋的身體區域大小，1為無沾染，6為身體面積1/3，被覆蓋到的位置會散發出驚天地泣鬼神的腐臭味，並維持該數字天數才會自然消散。
      </p>
      <button
        className={textState > 2 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(setImage(7));
          dispatch(addLog(data));
          navigate("/6");
        }}
      >
        <img src={btnImg} alt="" />
        <p>離開這裡</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}
export default Main5r;
