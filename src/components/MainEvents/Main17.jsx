import { useEffect, useRef, useState } from "react";
import btnImg from "/UI/btn_sen_normal.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setImage } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "這可能是你這輩子看過最大的船——如果它不是只剩這麼一丁點的話，你們不得不抬頭仰望這個巨大的造物，儘管它早已面目全非，但仍能窺視到製作者驚人的技藝，你對造船技術的認知難以理解這樣龐大的無機物該如何在海面上航行。",
  "七成的船體已經被暗紅色的肌肉組織包覆，就像和這隻巨獸融為一體似的，不時的微小顫動時刻提醒著你們這些肉團屬於一個在仍在呼吸的生物。",
  "藍色的晶體霸佔了每個縫隙，像從四面八方湧上的海浪，吞噬了這艘三桅帆船的每一吋，散發著冰冷的光芒。",
  "你注意到一路帶著你們前行的液體在此停止了流動，船隻的行進逐漸趨緩，在幾次似乎擦撞到什麼的晃動後，最終靜止了下來。",
  "你們環顧四周，發現這個廣闊的空間沒有任何能繼續航行的道路，這裡或許就是終點。",
  "別無選擇，現在唯一值得一看的就是那艘佔據了大半空間的破船，死海馬當活海馬醫，希望那裏面的東西不會讓你們失望。",
  "-",
];

function Main17() {
  const [textState, setTextState] = useState(0);
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

  return (
    <div className="text-box">
      <p className="text" onAnimationEnd={showText}>
        這可能是你這輩子看過最大的船——如果它不是只剩這麼一丁點的話，你們不得不抬頭仰望這個巨大的造物，儘管它早已面目全非，但仍能窺視到製作者驚人的技藝，你對造船技術的認知難以理解這樣龐大的無機物該如何在海面上航行。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        七成的船體已經被暗紅色的肌肉組織包覆，就像和這隻巨獸融為一體似的，不時的微小顫動時刻提醒著你們這些肉團屬於一個在仍在呼吸的生物。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        藍色的晶體霸佔了每個縫隙，像從四面八方湧上的海浪，吞噬了這艘三桅帆船的每一吋，散發著冰冷的光芒。
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        你注意到一路帶著你們前行的液體在此停止了流動，船隻的行進逐漸趨緩，在幾次似乎擦撞到什麼的晃動後，最終靜止了下來。
        <br />
        你們環顧四周，發現這個廣闊的空間沒有任何能繼續航行的道路，這裡或許就是終點。
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        別無選擇，現在唯一值得一看的就是那艘佔據了大半空間的破船，死海馬當活海馬醫，希望那裏面的東西不會讓你們失望。
      </p>
      <button
        className={textState > 4 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(data));
          dispatch(setImage(17));
          navigate("/18");
        }}
      >
        <img src={btnImg} alt="" />
        <p>登船</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}

export default Main17;
