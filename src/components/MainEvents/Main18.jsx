import { useEffect, useRef, useState } from "react";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch } from "react-redux";
import { setBoatSceneState } from "../../../redux/stateSlice/stateSlice";
import { useNavigate } from "react-router-dom";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "多虧了那堆胡亂生長的結晶體，登上這艘小山一般的巨船並沒有花費你們太多的心力，但登上甲板後，沾附著不知名液體的光滑結晶平面反倒成了阻礙，時不時出現的爛肉和碎片總在一不留神時讓人失去重心，成簇晶體像是暗器般無處不在，如果不想被扎個屁股開花，行走時最好提起十二萬分的精神。",
  "在湛藍和殷紅的交界處，那片尚未被蠶食的異色吸引了你們的目光。",
  "那是一扇快要被鯨肉完全覆蓋的墨綠色門扉，暴露在空氣中的雕花相當繁複，卻多以筆直的線條和幾何圖形組成，你沒聽說過哪個地方流行這樣的花紋。",
  "陷在軟肉中的門把上還有些尚未剝落的金漆，你猜這艘船的主人非富則貴，以位置來猜測，這扇門後大約會通往船長室，但你們可能需要先把這扇門從這坨肉中挖出來。",
  "請使用角色進行攻擊，合計傷害大於230時成功破門。",
  "-",
];
const data18 = [
  "霉味混著腥臭撲面而來，裡面的空間比預期的要小，大半的房間已然坍塌，被濡濕的肉團取代，剩下苦苦堅持的梁柱也被擠壓得扭曲變形，被精心錶框的畫作有些落在地面，有些苦苦堅持。",
  "原本靠牆放置的數個書櫃傾倒在地，大量的書籍散落一地。",
  "一張能供十來人圍坐的圓桌立於房間中央，桌子中心有張幾乎占據整個桌面的地圖，圍繞圓桌的椅子和酒瓶們東倒西歪的翻覆在地，僅有位於主位的那個座位屹立不搖。",
  "裡面的某些東西引起了你的興趣。",
  "-",
];

function Main18() {
  const [textState, setTextState] = useState(0);
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

  return (
    <div className="text-box">
      <p className="text" onAnimationEnd={showText}>
        多虧了那堆胡亂生長的結晶體，登上這艘小山一般的巨船並沒有花費你們太多的心力，但登上甲板後，沾附著不知名液體的光滑結晶平面反倒成了阻礙，時不時出現的爛肉和碎片總在一不留神時讓人失去重心，成簇晶體像是暗器般無處不在，如果不想被扎個屁股開花，行走時最好提起十二萬分的精神。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        在湛藍和殷紅的交界處，那片尚未被蠶食的異色吸引了你們的目光。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        那是一扇快要被鯨肉完全覆蓋的墨綠色門扉，暴露在空氣中的雕花相當繁複，卻多以筆直的線條和幾何圖形組成，你沒聽說過哪個地方流行這樣的花紋。
        <br />
        陷在軟肉中的門把上還有些尚未剝落的金漆，你猜這艘船的主人非富則貴，以位置來猜測，這扇門後大約會通往船長室，但你們可能需要先把這扇門從這坨肉中挖出來。
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        請使用角色進行攻擊，合計傷害大於230時成功破門。
      </p>
      <button
        className={textState > 3 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(data));
          dispatch(addLog(data18));
          dispatch(setBoatSceneState());
          navigate("/18_2");
        }}
      >
        <img src={btnImg} alt="" />
        <p>開門進入</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}

export default Main18;
