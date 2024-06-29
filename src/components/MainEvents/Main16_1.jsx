import { useEffect, useRef, useState } from "react";
import btnImg from "/UI/btn_sen_BW.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = {
  has: [
    ">[┋]",
    "你們決定前往最右的通道，黑暗遮住了你們的雙眼，你感覺到有東西輕撫過你的臉頰，像小心翼翼地試探，隔了數秒腳踝傳來觸感，被緊緊握住後又瞬間鬆開，接著是從背一路滑至腰窩，每次的接觸都相當短暫，毫無規律地肆意碰觸著你的身體。",
    "請擲一個（COIN）。",
    "Ｐ - 大腿、頸側、指尖、髮梢，黑暗中的東西不放過任何一處。",
    "Ｉ - 一個柔軟的觸感落到肩膀後再也沒有離去，你伸手抓住了那個布料般的東西，上面似乎寫著什麼。",
    "特殊骰 - 你們得到了艾沫的讚賞，獲得所有通道內的資訊。",
    "[布料般的東西]",
    "「綻放光明的海洋結晶，是來自流動火焰的孩子啊。",
    "不該離開母親的懷抱，該在層層藍色的被子下入眠。",
    "新鮮的空氣使你窒息，溫暖的鮮紅喚你甦醒。",
    "不要親近潘尼達絲的吐息，隨著羅娜的注視起舞。",
    "你在死亡中新生，在新生裡死去。",
    "安睡在湛藍的懷抱裡吧，你是海洋的瑰寶。」",
    "神經變得緊繃，你每次試圖抓握都只感受到它輕飄飄地滑過。",
    "是安慰？是愛撫？是親吻？你對那東西一無所知，它卻探究著你的每一吋肌膚，無視你的衣物和掙扎，愈發密集而纏綿。",
    "你感受不到它的目的或情緒，沒有溫度也不知軟硬，只能被迫承受它無止盡地撫弄，直到藍色的微光在遠處幽幽地亮起。",
    "船隻耐久值－20。",
    "-",
  ],
  no: [
    ">[┋]",
    "你們決定前往最右的通道，黑暗遮住了你們的雙眼，你感覺到有東西輕撫過你的臉頰，像小心翼翼地試探，隔了數秒腳踝傳來觸感，被緊緊握住後又瞬間鬆開，接著是從背一路滑至腰窩，每次的接觸都相當短暫，毫無規律地肆意碰觸著你的身體。",
    "請擲一個（COIN）。",
    "Ｐ - 大腿、頸側、指尖、髮梢，黑暗中的東西不放過任何一處。",
    "Ｉ - 一個柔軟的觸感落到肩膀後再也沒有離去，你伸手抓住了那個布料般的東西，上面似乎寫著什麼。",
    "特殊骰 - 你們得到了艾沫的讚賞，獲得所有通道內的資訊。",
    "神經變得緊繃，你每次試圖抓握都只感受到它輕飄飄地滑過。",
    "是安慰？是愛撫？是親吻？你對那東西一無所知，它卻探究著你的每一吋肌膚，無視你的衣物和掙扎，愈發密集而纏綿。",
    "你感受不到它的目的或情緒，沒有溫度也不知軟硬，只能被迫承受它無止盡地撫弄，直到藍色的微光在遠處幽幽地亮起。",
    "船隻耐久值－20。",
    "-",
  ],
};

function Main16_1() {
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
        你們決定前往最右的通道，黑暗遮住了你們的雙眼，你感覺到有東西輕撫過你的臉頰，像小心翼翼地試探，隔了數秒腳踝傳來觸感，被緊緊握住後又瞬間鬆開，接著是從背一路滑至腰窩，每次的接觸都相當短暫，毫無規律地肆意碰觸著你的身體。
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
        Ｐ - 大腿、頸側、指尖、髮梢，黑暗中的東西不放過任何一處。
        <br />Ｉ - 一個柔軟的觸感落到肩膀後再也沒有離去，你伸手抓住了那個
        <span
          className="hint-white"
          onClick={() => {
            setHintState(true);
          }}
        >
          布料般的東西
        </span>
        ，上面似乎寫著什麼。
        <br />
        特殊骰 - 你們得到了艾沫的讚賞，獲得所有通道內的資訊。
      </p>
      <p className={hintState ? "text" : "hidden"} style={style}>
        「綻放光明的海洋結晶，是來自流動火焰的孩子啊。
        <br />
        不該離開母親的懷抱，該在層層藍色的被子下入眠。
        <br />
        新鮮的空氣使你窒息，溫暖的鮮紅喚你甦醒。
        <br />
        不要親近潘尼達絲的吐息，隨著羅娜的注視起舞。
        <br />
        你在死亡中新生，在新生裡死去。 安睡在湛藍的懷抱裡吧，你是海洋的瑰寶。」
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        神經變得緊繃，你每次試圖抓握都只感受到它輕飄飄地滑過。是安慰？是愛撫？是親吻？你對那東西一無所知，它卻探究著你的每一吋肌膚，無視你的衣物和掙扎，愈發密集而纏綿。
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        你感受不到它的目的或情緒，沒有溫度也不知軟硬，只能被迫承受它無止盡地撫弄，直到藍色的微光在遠處幽幽地亮起。
      </p>
      <p
        className={textState > 4 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        船隻耐久值－20。
      </p>
      <button
        className={textState > 5 ? "btn main-btn" : "hidden"}
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

export default Main16_1;
