import { useEffect, useRef, useState } from "react";
import btnImg from "/UI/btn_sen_BW.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = {
  has: [
    ">[⊿]",
    "你們決定前往最左側的通道，熟悉的黑暗壟罩著你們，光線比上次更加式微，你感覺到肌膚沾黏上細線般的東西，試圖拭去時卻只抓住一團空氣。",
    "移動只會增加被纏上的可能，它們無處不在。",
    "請擲一個（COIN）。",
    "Ｐ - 你感覺吸進氧氣變得愈發困難，張口卻吐不出氣息。",
    "Ｉ - 破碎的紙片沾附在你們身上，拼湊起莫名其妙的文字。",
    "特殊骰 - 艾沫慈愛地注視著你們，獲得所有通道內的資訊。",
    "[破碎的紙片]",
    "「他們在融化，那已經不是我認識的人了，我到底該如何是好？",
    "先生沒有要放棄，他已經瘋了。",
    "藍色是危險的，紅色也不安全，沒有除了這些以外的選項嗎？",
    "我不想變成那樣，有著混濁眼睛的東西不能靠近，不要和我說話。",
    "保持思考，不要聽那個聲音，我要在下一次漲滿時離開。」",
    "船隻平穩而堅定地前進，更多脆弱的絲線撞了上來，逐漸凝滯你們的行動，黏膩的感覺纏繞全身。",
    "層層堆疊下所有的一切覆上瑩白，撕下又會被迅速填補，細碎的藍光在其中閃動，你幾乎以為下一刻就會被徹底網住。",
    "船隻耐久值－20。",
    "-",
  ],
  no: [
    ">[⊿]",
    "你們決定前往最左側的通道，熟悉的黑暗壟罩著你們，光線比上次更加式微，你感覺到肌膚沾黏上細線般的東西，試圖拭去時卻只抓住一團空氣。",
    "移動只會增加被纏上的可能，它們無處不在。",
    "請擲一個（COIN）。",
    "Ｐ - 你感覺吸進氧氣變得愈發困難，張口卻吐不出氣息。",
    "Ｉ - 破碎的紙片沾附在你們身上，拼湊起莫名其妙的文字。",
    "特殊骰 - 艾沫慈愛地注視著你們，獲得所有通道內的資訊。",
    "船隻平穩而堅定地前進，更多脆弱的絲線撞了上來，逐漸凝滯你們的行動，黏膩的感覺纏繞全身。",
    "層層堆疊下所有的一切覆上瑩白，撕下又會被迅速填補，細碎的藍光在其中閃動，你幾乎以為下一刻就會被徹底網住。",
    "船隻耐久值－20。",
    "-",
  ],
};

function Main16_4() {
  const [textState, setTextState] = useState(0);
  const [hintState, setHintState] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function showText() {
    setTextState((prev) => prev + 1);
  }

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
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
        你們決定前往最左側的通道，熟悉的黑暗壟罩著你們，光線比上次更加式微，你感覺到肌膚沾黏上細線般的東西，試圖拭去時卻只抓住一團空氣。移動只會增加被纏上的可能，它們無處不在。
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
        Ｐ - 你感覺吸進氧氣變得愈發困難，張口卻吐不出氣息。
        <br />Ｉ -{" "}
        <span
          className="hint-white"
          onClick={() => {
            setHintState(true);
          }}
        >
          破碎的紙片
        </span>
        沾附在你們身上，拼湊起莫名其妙的文字。
        <br />
        特殊骰 - 艾沫慈愛地注視著你們，獲得所有通道內的資訊。
      </p>
      <p className={hintState ? "text" : "hidden"} style={style}>
        「他們在融化，那已經不是我認識的人了，我到底該如何是好？
        <br />
        先生沒有要放棄，他已經瘋了。
        <br />
        藍色是危險的，紅色也不安全，沒有除了這些以外的選項嗎？
        <br />
        我不想變成那樣，有著混濁眼睛的東西不能靠近，不要和我說話。
        <br />
        保持思考，不要聽那個聲音，我要在下一次漲滿時離開。」
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        船隻平穩而堅定地前進，更多脆弱的絲線撞了上來，逐漸凝滯你們的行動，黏膩的感覺纏繞全身。
        <br />
        層層堆疊下所有的一切覆上瑩白，撕下又會被迅速填補，細碎的藍光在其中閃動，你幾乎以為下一刻就會被徹底網住。
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        船隻耐久值－20。
      </p>
      <button
        className={textState > 4 ? "btn main-btn" : "hidden"}
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

export default Main16_4;
