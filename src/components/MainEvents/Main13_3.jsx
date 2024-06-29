import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import btnImg from "/UI/btn_sen_BW.png";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { useNavigate } from "react-router-dom";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  ">[3]",
  "你們決定前往右二的通道，潮濕的空氣撲面而來，冰冷的液體偶爾從頭頂滴落，砸落甲板清脆的迸裂，劃破死寂的黑暗。",
  "它們掉落得並不密集，但每次落到肌膚上總能激起成片的雞皮疙瘩，在這令人神經緊繃的地方真是該死地惱人。",
  "請擲一個（COIN）。",
  "Ｐ - 液體落下的聲音空洞地迴響。",
  "Ｉ - 一道沉重的悶響落在甲板左側，一本小冊子被包覆在有些黏稠的淡藍色透明液體中。",
  "特殊骰 - 你們得到艾沫的垂愛，獲得所有通道內的資訊。",
  "[小冊子]",
  "滑膩的液體基本上毀了這本冊子的可閱讀性，紙張被糊作一團，再謹慎的翻閱都很難維持頁面的完整，更別論那徹底暈開的墨水了。",
  "在一番努力後你們只能辨認出幾個被反覆提到的詞彙，「藍光石」、「控制」、「生長」、「測量」、「亮度」、「諾亞」，除此之外還有一堆數字。",
  "你們看見遠方出現了藍色的微光閃動，流動的水聲隨著前進不斷增大，光亮的景色被洞口一層薄薄的水幕隔開，在前方輕輕晃動著，看上去有些不真實，像是引誘飛蛾的火光。",
  "嘩啦的巨響不絕於耳，你不認為那層薄幕能夠如此聲勢浩大，帶著腥味的風撲在臉上，你明白船隻正在逐漸提速，水霧打在皮膚上帶來綿密的刺痛，聲音撞擊著心臟，你們衝破了水幕，迎接滿眼的藍色星空，然後——",
  "重重墜落。",
  "船隻耐久值－10。",
  "-",
];
const dataFalse = [
  ">[3]",
  "你們決定前往右二的通道，潮濕的空氣撲面而來，冰冷的液體偶爾從頭頂滴落，砸落甲板清脆地迸裂，劃破死寂的黑暗。",
  "它們掉落得並不密集，但每次落到肌膚上總能激起成片的雞皮疙瘩，在這令人神經緊繃的地方真是該死地惱人。",
  "請擲一個（COIN）。",
  "Ｐ - 液體落下的聲音空洞地迴響。",
  "Ｉ - 一道沉重的悶響落在甲板左側，一本小冊子被包覆在有些黏稠的淡藍色透明液體中。",
  "特殊骰 - 你們得到艾沫的垂愛，獲得所有通道內的資訊。",
  "你們看見遠方出現了藍色的微光閃動，流動的水聲隨著前進不斷增大，光亮的景色被洞口一層薄薄的水幕隔開，在前方輕輕晃動著，看上去有些不真實，像是引誘飛蛾的火光。",
  "嘩啦的巨響不絕於耳，你不認為那層薄幕能夠如此聲勢浩大，帶著腥味的風撲在臉上，你明白船隻正在逐漸提速，水霧打在皮膚上帶來綿密的刺痛，聲音撞擊著心臟，你們衝破了水幕，迎接滿眼的藍色星空，然後——",
  "重重墜落。",
  "船隻耐久值－10。",
  "-",
];

function Main13_3() {
  const [textState, setTextState] = useState(0);
  const [hintState, setHint] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  const style = {
    opacity: 0.7,
  };

  useEffect(() => {
    scrollToBottom();
  }, [textState]);

  return (
    <div className="text-box">
      <p
        className="text"
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        你們決定前往右二的通道，潮濕的空氣撲面而來，冰冷的液體偶爾從頭頂滴落，砸落甲板清脆地迸裂，劃破死寂的黑暗。它們掉落得並不密集，但每次落到肌膚上總能激起成片的雞皮疙瘩，在這令人神經緊繃的地方真是該死地惱人。
      </p>
      <p className={textState > 0 ? "text" : "hidden"}>
        請擲一個
        <span
          className="hint-white"
          onClick={() => {
            setTextState(2);
          }}
        >
          （COIN）
        </span>
        。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        Ｐ - 液體落下的聲音空洞地迴響。
        <br />Ｉ - 一道沉重的悶響落在甲板左側，一本
        <span
          className="hint-white"
          onClick={() => {
            setHint(true);
          }}
        >
          小冊子
        </span>
        被包覆在有些黏稠的淡藍色透明液體中。
        <br />
        特殊骰 - 你們得到艾沫的垂愛，獲得所有通道內的資訊。
      </p>
      <p className={hintState ? "text" : "hidden"} style={style}>
        滑膩的液體基本上毀了這本冊子的可閱讀性，紙張被糊作一團，再謹慎的翻閱都很難維持頁面的完整，更別論那徹底暈開的墨水了。
        <br />
        在一番努力後你們只能辨認出幾個被反覆提到的詞彙，「藍光石」、「控制」、「生長」、「測量」、「亮度」、「諾亞」，除此之外還有一堆數字。
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        你們看見遠方出現了藍色的微光閃動，流動的水聲隨著前進不斷增大，光亮的景色被洞口一層薄薄的水幕隔開，在前方輕輕晃動著，看上去有些不真實，像是引誘飛蛾的火光。
        <br />
        嘩啦的巨響不絕於耳，你不認為那層薄幕能夠如此聲勢浩大，帶著腥味的風撲在臉上，你明白船隻正在逐漸提速，水霧打在皮膚上帶來綿密的刺痛，聲音撞擊著心臟，你們衝破了水幕，迎接滿眼的藍色星空，然後——
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        重重墜落。
      </p>
      <p
        className={textState > 4 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        船隻耐久值－10。
      </p>
      <button
        className={textState > 5 ? "btn main-btn" : "hidden"}
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

export default Main13_3;
