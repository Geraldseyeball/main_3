import { useEffect, useRef, useState } from "react";
import btnImg from "/UI/btn_sen_normal.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "再次開闊的視野讓人呼吸都暢快起來，這裡的藍色結晶比先前都要密集，如同灑落漫天的珍珠般熠熠生輝。",
  "成簇的晶體從水下一路蔓延向上，像是支撐著天地形成一個巨大的柱體，溢著淡淡的光芒，將整個空間鍍上一層柔和的螢藍。",
  "喀咖、喀咖。",
  "一道有些熟悉的聲音傳來，在空曠的空間迴盪著，穿著堅硬鎧甲的長條型怪物攀著晶柱從上方向你們張牙舞爪，甲殼上附著的大量藍色結晶讓牠們幾乎與那根頂天立地的柱子融為一體。",
  "鬼知道那些節肢動物是怎麼垂直爬在光滑結晶體上的，但顯然牠們對你們存在於此感到相當不滿，巨大的尾巴在水晶上拍出成片清脆的叮噹聲，像是某種警示，你捕捉不到那些混濁眼睛的目光。",
  "下個瞬間，帶著巨力的藍色海怪砲彈朝你們急墜而來。",
  "Ah shit, Here we go again.",
  "-",
];

function Main14({ showShrimpType }) {
  const [textState, setTextState] = useState(0);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  function showText() {
    setTextState((prev) => prev + 1);
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState]);

  return (
    <div className="text-box">
      <p className="text" onAnimationEnd={showText}>
        再次開闊的視野讓人呼吸都暢快起來，這裡的藍色結晶比先前都要密集，如同灑落漫天的珍珠般閃爍。成簇的晶體從水下一路蔓延向上，像是支撐著天地形成一個巨大的柱體，溢著淡淡的光芒，將整個空間鍍上一層柔和的螢藍。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        喀咖、喀咖。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        一道有些熟悉的聲音傳來，在空曠的空間迴盪著，穿著堅硬鎧甲的長條型怪物攀著晶柱從上方向你們張牙舞爪，甲殼上附著的大量藍色結晶讓牠們幾乎與那根頂天立地的柱子融為一體。
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        鬼知道那些節肢動物是怎麼垂直爬在光滑結晶體上的，但顯然牠們對你們存在於此感到相當不滿，巨大的尾巴在水晶上拍出成片清脆的叮噹聲，像是某種警示，你捕捉不到那些混濁眼睛的目光。
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        下個瞬間，帶著巨力的藍色海怪砲彈朝你們急墜而來。
      </p>
      <p
        className={textState > 4 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        Ah shit, Here we go again.
      </p>
      <button
        className={textState > 5 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(data));
          showShrimpType(true);
          navigate("/14_2");
        }}
      >
        <img src={btnImg} alt="" />
        <p>進入戰鬥</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}

export default Main14;
