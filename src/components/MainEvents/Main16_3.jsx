import { useEffect, useRef, useState } from "react";
import btnImg from "/UI/btn_sen_BW.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = {
  has: [
    ">[℈]",
    "你們決定前往右二的通道，嘿、黑暗，你的老朋友，它前來和你對話，沉默震耳欲聾。",
    "航行的速度逐漸慢下來，通道似乎變得更加狹窄了，肉壁正緊貼著船側，感謝那些濕滑體液的幫助，你們勉強還在前進，但愈發艱辛。",
    "請擲一個（COIN）。",
    "Ｐ - 肉團彼此擠壓帶著濕潤的水聲，奇妙的咕啾聲不太適合闔家觀賞。",
    "Ｉ - 一次蠕動讓船劇烈的震盪，破裂聲使你們心頭一緊，幸好被擠壓碾碎的並不是你們的船，幾塊木板殘骸掉落在甲板上，上方有雕刻過的痕跡。",
    "特殊骰 - 艾沫牽起了你們的手，獲得所有通道內的資訊。",
    "[木板殘骸]",
    "你們肯定沒有全部的碎片，東缺一塊西缺一角的圖畫有些滑稽，你覺得這塊木板可能來自某個大型家具。",
    "流暢的線條像是古老的壁畫圖騰，無數人型朝向中心成跪拜的姿勢，排列成一個漩渦的圖形，中心是一隻巨大的鯨魚。",
    "上下左右的空間都在減少，緩慢但確實，那些血肉像有意識般地變化著形狀包覆住你們，所有的反抗對肉壁來說似乎不痛不癢，最後你們被徹底吞沒。",
    "連一根指頭都無法動彈，溫暖柔軟的肉團壓迫著每一吋肌膚，你只能在他蠕動的間隙爭取一口氧氣，黑暗放大了聲音，你聽見黏稠的體液滑過又拉出細絲。",
    "在無數次規律性地收縮擠壓後，你們一點一點從通道中緩慢地被擠出。",
    "船隻耐久值－20。",
    "-",
  ],
  no: [
    ">[℈]",
    "你們決定前往右二的通道，嘿、黑暗，你的老朋友，它前來和你對話，沉默震耳欲聾。",
    "航行的速度逐漸慢下來，通道似乎變得更加狹窄了，肉壁正緊貼著船側，感謝那些濕滑體液的幫助，你們勉強還在前進，但愈發艱辛。",
    "請擲一個（COIN）。",
    "Ｐ - 肉團彼此擠壓帶著濕潤的水聲，奇妙的咕啾聲不太適合闔家觀賞。",
    "Ｉ - 一次蠕動讓船劇烈的震盪，破裂聲使你們心頭一緊，幸好被擠壓碾碎的並不是你們的船，幾塊木板殘骸掉落在甲板上，上方有雕刻過的痕跡。",
    "特殊骰 - 艾沫牽起了你們的手，獲得所有通道內的資訊。",
    "上下左右的空間都在減少，緩慢但確實，那些血肉像有意識般地變化著形狀包覆住你們，所有的反抗對肉壁來說似乎不痛不癢，最後你們被徹底吞沒。",
    "連一根指頭都無法動彈，溫暖柔軟的肉團壓迫著每一吋肌膚，你只能在他蠕動的間隙爭取一口氧氣，黑暗放大了聲音，你聽見黏稠的體液滑過又拉出細絲。",
    "在無數次規律性地收縮擠壓後，你們一點一點從通道中緩慢地被擠出。",
    "船隻耐久值－20。",
    "-",
  ],
};

function Main16_3() {
  const [textState, setTextState] = useState(0);
  const [hintState, setHintState] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  function showText() {
    setTextState((prev) => prev + 1);
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState]);

  const style = {
    opacity: 0.7,
  };

  return (
    <div className="text-box">
      <p className="text" onAnimationEnd={showText}>
        你們決定前往右二的通道，嘿、黑暗，你的老朋友，它前來和你對話，沉默震耳欲聾。
        <br />
        航行的速度逐漸慢下來，通道似乎變得更加狹窄了，肉壁正緊貼著船側，感謝那些濕滑體液的幫助，你們勉強還在前進，但愈發艱辛。
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
        onAnimationEnd={showText}
      >
        Ｐ - 肉團彼此擠壓帶著濕潤的水聲，奇妙的咕啾聲不太適合闔家觀賞。
        <br />Ｉ -
        一次蠕動讓船劇烈的震盪，破裂聲使你們心頭一緊，幸好被擠壓碾碎的並不是你們的船，幾塊
        <span
          className="hint-white"
          onClick={() => {
            setHintState(true);
          }}
        >
          木板殘骸
        </span>
        掉落在甲板上，上方有雕刻過的痕跡。
        <br />
        特殊骰 - 艾沫牽起了你們的手，獲得所有通道內的資訊。
      </p>
      <p className={hintState ? "text" : "hidden"} style={style}>
        你們肯定沒有全部的碎片，東缺一塊西缺一角的圖畫有些滑稽，你覺得這塊木板可能來自某個大型家具。
        <br />
        流暢的線條像是古老的壁畫圖騰，無數人型朝向中心成跪拜的姿勢，排列成一個漩渦的圖形，中心是一隻巨大的鯨魚。
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        上下左右的空間都在減少，緩慢但確實，那些血肉像有意識般地變化著形狀包覆住你們，所有的反抗對肉壁來說似乎不痛不癢，最後你們被徹底吞沒。
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        連一根指頭都無法動彈，溫暖柔軟的肉團壓迫著每一吋肌膚，你只能在他蠕動的間隙爭取一口氧氣，黑暗放大了聲音，你聽見黏稠的體液滑過又拉出細絲。
      </p>
      <p
        className={textState > 4 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        在無數次規律性地收縮擠壓後，你們一點一點從通道中緩慢地被擠出。
      </p>
      <p
        className={textState > 5 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        船隻耐久值－20。
      </p>
      <button
        className={textState > 6 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(hintState ? data.has : data.no));
          dispatch(setImage(16));
          dispatch(setMainState("normal"));
          navigate("/17");
        }}
      >
        <img src={btnImg} alt="" />
        <p>繼續前進</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}

export default Main16_3;
