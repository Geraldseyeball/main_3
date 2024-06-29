import { useEffect, useRef, useState } from "react";
import btnImg from "/UI/btn_sen_BW.png";
import { useDispatch } from "react-redux";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { useNavigate } from "react-router-dom";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  ">[2]",
  "你們決定前往左二的通道，擠過入口時你幾乎要能感受到肉壁的冰冷——還是溫暖？待在這怪物體內的時間越長，你似乎愈發不能判斷自己五感的真實性。",
  "眼前沉默的黑暗蠶食著你的勇氣，想放聲嘶吼的衝動在心中躁動著，你想確認自己的存在。",
  "請擲一個（COIN）。",
  "Ｐ - 你伸手握住了一團空氣，這裡什麼也沒有。",
  "Ｉ - 撞擊的喀啦聲吸引了你們的注意，一番搜索後，你們發現船頭上吊著一串東西。",
  "特殊骰 - 艾沫對你們青眼有加，獲得所有通道內的資訊。",
  "[一串東西]",
  "海草編成的繩子串起了十三顆巴掌大的貝殼，上頭被刻出細小的劃痕，仔細查看便能看出上面都是一條橫線串著四條短直線的記號，每個不超過半個小指甲片大，密密麻麻地佈滿了所有貝殼。",
  "如果你閒得無事可幹，這些貝殼上總共有7676個記號，還有一句話：離去的都會以其他模樣回來。",
  "空氣似乎變得稀薄，你在每次吸吐間感到窒息，思緒陷入混沌，難以辨別前後左右甚至於上下，你或許是摔倒在地了，遲鈍的感官在數秒後才傳來疼痛感，聲音像是隔著一堵水牆遠遠地響著，然後你看見溫柔的藍光亮起。",
  "船隻耐久值－10。",
  "-",
];
const dataFalse = [
  ">[2]",
  "你們決定前往左二的通道，擠過入口時你幾乎要能感受到肉壁的冰冷——還是溫暖？待在這怪物體內的時間越長，你似乎愈發不能判斷自己五感的真實性。",
  "眼前沉默的黑暗蠶食著你的勇氣，想放聲嘶吼的衝動在心中躁動著，你想確認自己的存在。",
  "請擲一個（COIN）。",
  "Ｐ - 你伸手握住了一團空氣，這裡什麼也沒有。",
  "Ｉ - 撞擊的喀啦聲吸引了你們的注意，一番搜索後，你們發現船頭上吊著一串東西。",
  "特殊骰 - 艾沫對你們青眼有加，獲得所有通道內的資訊。",
  "空氣似乎變得稀薄，你在每次吸吐間感到窒息，思緒陷入混沌，難以辨別前後左右甚至於上下，你或許是摔倒在地了，遲鈍的感官在數秒後才傳來疼痛感，聲音像是隔著一堵水牆遠遠地響著，然後你看見溫柔的藍光亮起。",
  "船隻耐久值－10。",
  "-",
];

function Main13_2() {
  const [textState, setTextState] = useState(0);
  const [hintState, setHint] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <p
        className="text"
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        你們決定前往左二的通道，擠過入口時你幾乎要能感受到肉壁的冰冷——還是溫暖？待在這怪物體內的時間越長，你似乎愈發不能判斷自己五感的真實性。眼前沉默的黑暗蠶食著你的勇氣，想放聲嘶吼的衝動在心中躁動著，你想確認自己的存在。
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
        Ｐ - 你伸手握住了一團空氣，這裡什麼也沒有。
        <br />Ｉ - 撞擊的喀啦聲吸引了你們的注意，一番搜索後，你們發現船頭上吊著
        <span
          className="hint-white"
          onClick={() => {
            setHint(true);
          }}
        >
          一串東西
        </span>
        。
        <br />
        特殊骰 - 艾沫對你們青眼有加，獲得所有通道內的資訊。
      </p>
      <p className={hintState ? "text" : "hidden"} style={style}>
        海草編成的繩子串起了十三顆巴掌大的貝殼，上頭被刻出細小的劃痕，仔細查看便能看出上面都是一條橫線串著四條短直線的記號，每個不超過半個小指甲片大，密密麻麻地佈滿了所有貝殼。
        <br />
        如果你閒得無事可幹，這些貝殼上總共有7676個記號，還有一句話：離去的都會以其他模樣回來。
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        空氣似乎變得稀薄，你在每次吸吐間感到窒息，思緒陷入混沌，難以辨別前後左右甚至於上下，你或許是摔倒在地了，遲鈍的感官在數秒後才傳來疼痛感，聲音像是隔著一堵水牆遠遠地響著，然後你看見溫柔的藍光亮起。
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={() => {
          setTextState((prev) => prev + 1);
        }}
      >
        船隻耐久值－10。
      </p>
      <button
        className={textState > 4 ? "btn main-btn" : "hidden"}
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

export default Main13_2;
