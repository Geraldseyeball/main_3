import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_off.png";
import { useDispatch } from "react-redux";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = {
  q1: [
    "［你是誰？］",
    "那人口部的鬍鬚顫了顫，不成句子的狀聲詞刮擦著你的耳朵。",
    "「……一個罪人。」良久後他說。",
    "-",
  ],
  q2: [
    "［你為什麼在這裡？］",
    "「祂很美吧？」那人注視著虛空，囈語般呢喃著，「祂是最完美的，我們的假想是對的，我對祂做的一切都——」他的嘴反覆開合，只吐出了嘶嘶的氣音，眼珠不自然地滾動，「喔我的墨瑞瑪啊，我們都幹了什麼？」",
    "-",
  ],
  q3: [
    "［你怎麼會變成這樣？］",
    "那人一動不動地緊盯著發問的人，像是船前的雕像般死寂，然後古怪地嗤笑了聲。",
    "「你也會的。」粗礪的笑聲刮擦著耳膜令人不適，他顫抖著還能控制的軀殼，上氣不接下氣地咳起嗽來，「它來者不拒。」他在喘息間斷斷續續吐出。",
    "-",
  ],
  q4: [
    "［什麼錯了？］",
    "「什麼都錯了！」那人激動地瞪大死魚般渾濁的雙眼，你不確定他是否還能視物，「不該是這樣的，是我們不該窺探世界的真相嗎？這是懲罰嗎？為什麼？我們做錯了什麼？」淚水從他眼角的皺褶擠出，眼底的藍光盛放。",
    "「啊哈、哈哈哈——這是我們自找的，活該、活該！」怪人上半身劇烈地扭動卻沒能移動半分，他情緒近乎癲狂，比起人類更像一頭瀕死的野獸。",
    "-",
  ],
  q5: [
    "［如何離開這裡？］",
    "「你聽得懂祂們的語言嗎？」那人的身體晃了晃像是想做些什麼，但顯然無法達成，最後他只是向上翻了翻眼球，模樣可憐又可笑，「那條路只讓知曉的人通過，我永遠無法踏出我親手打造的出口，」他唸了串複雜繞口的音節，你有聽沒有懂，「哈、這是祂的詛咒，我太晚才明白了。」",
    "-",
  ],
};

function Main8Talk() {
  const [q1, showq1] = useState(false);
  const [q2, showq2] = useState(false);
  const [q3, showq3] = useState(false);
  const [q4, showq4] = useState(false);
  const [q5, showq5] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  useEffect(() => {
    scrollToBottom();
  }, [q4, q5]);

  const style = {
    opacity: 0.8,
  };
  return (
    <div className="text-box">
      <p
        className="text hint"
        onClick={() => {
          dispatch(addLog(data.q1));
          showq1(true);
        }}
      >
        ［你是誰？］
      </p>
      <p className={q1 ? "text" : "hidden"} style={style}>
        那人口部的鬍鬚顫了顫，不成句子的狀聲詞刮擦著你的耳朵。
        <br />
        「……一個罪人。」良久後他說。
      </p>
      <p
        className="text hint"
        onClick={() => {
          dispatch(addLog(data.q2));
          showq2(true);
        }}
      >
        ［你為什麼在這裡？］
      </p>
      <p className={q2 ? "text" : "hidden"} style={style}>
        「祂很美吧？」那人注視著虛空，囈語般呢喃著，「祂是最完美的，我們的假想是對的，我對祂做的一切都——」他的嘴反覆開合，只吐出了嘶嘶的氣音，眼珠不自然地滾動，「喔我的墨瑞瑪啊，我們都幹了什麼？」
      </p>
      <p
        className="text hint"
        onClick={() => {
          dispatch(addLog(data.q3));
          showq3(true);
        }}
      >
        ［你怎麼會變成這樣？］
      </p>
      <p className={q3 ? "text" : "hidden"} style={style}>
        那人一動不動地緊盯著發問的人，像是船前的雕像般死寂，然後古怪地嗤笑了聲。
        <br />
        「你也會的。」粗礪的笑聲刮擦著耳膜令人不適，他顫抖著還能控制的軀殼，上氣不接下氣地咳起嗽來，「它來者不拒。」他在喘息間斷斷續續吐出。
      </p>
      <p
        className="text hint"
        onClick={() => {
          dispatch(addLog(data.q4));
          showq4(true);
        }}
      >
        ［什麼事錯了？］
      </p>
      <p className={q4 ? "text" : "hidden"} style={style}>
        「什麼都錯了！」那人激動地瞪大死魚般渾濁的雙眼，你不確定他是否還能視物，「不該是這樣的，是我們不該窺探世界的真相嗎？這是懲罰嗎？為什麼？我們做錯了什麼？」淚水從他眼角的皺褶擠出，眼底的藍光盛放。
        <br />
        「啊哈、哈哈哈——這是我們自找的，活該、活該！」怪人上半身劇烈地扭動卻沒能移動半分，他情緒近乎癲狂，比起人類更像一頭瀕死的野獸。
      </p>
      <p
        className="text hint"
        onClick={() => {
          dispatch(addLog(data.q5));
          showq5(true);
        }}
      >
        ［如何離開這裡？］
      </p>
      <p className={q5 ? "text" : "hidden"} style={style}>
        「你聽得懂祂們的語言嗎？」那人的身體晃了晃像是想做些什麼，但顯然無法達成，最後他只是向上翻了翻眼球，模樣可憐又可笑，「那條路只讓知曉的人通過，我永遠無法踏出我親手打造的出口，」他唸了串複雜繞口的音節，你有聽沒有懂，「哈、這是祂的詛咒，我太晚才明白了。」
      </p>
      <button
        className="btn main-btn"
        onClick={() => {
          dispatch(setImage(11));
          dispatch(setMainState("normal"));
          navigate("/9");
        }}
      >
        <img src={btnImg} alt="" />
        <p>沒什麼好說的了</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}

export default Main8Talk;
