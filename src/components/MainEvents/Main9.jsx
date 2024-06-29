import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch } from "react-redux";
import { setImage } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "那人對你們大多數的問題都只給予了夢囈般的片段字句，出口、錯誤、罪孽幾個詞彙在他口中反覆，在數次問答後他陷入沉默，沒有焦距的目光緩慢地掃視過每個人的雙眼，古怪的喀咖聲從他喉中溢出，美麗的藍色安靜地包覆了那雙眼睛。",
  "四周的肌肉緩慢地蠕動，一點一點將他吞沒，你們看見他咧開嘴角，凝固成一個過於工整的僵硬笑容，直到最後一根髮絲也消失無蹤，光滑的肉壁上剩下漾著藍色光芒的結晶，像是一個扭曲的人型。",
  "［喀咖］",
  "還未等你們從那詭譎的一幕中回神，船身突然開始劇烈擺盪，原本平靜如死水的體液掀起了波瀾，令人牙痠的擠壓聲從船的底部傳來，接著逐漸向上。",
  "伴隨堅硬物體的撞擊聲，你們在難以站立的甲板上看到那剪刀狀的東西死死扣住船緣，兩顆透澈的藍色眼珠被眼柄托著悠晃地探了上來。",
  "你從未聽聞過這副模樣的海怪，將近半船高的蟹狀生物揮舞著不成比例地巨大的螯，細長的足部將軀幹高高撐起，殼上成片的藍色晶體肆意生長，難以辨識它原先的形體，看似普通的揮擊都能讓船體發出令人頭皮發麻的巨響。<br/>於此同時，後方也傳來了相同的聲響，天知道這個啥都吞的大王八蛋吃了多少這樣的鬼東西，藍色的幽光隨著它們移動而閃爍，將戰鬥的舞台徹底點亮。",
  "-",
];

function Main9({ showCrabType }) {
  const [textState, showText] = useState(0);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateTextState = () => {
    showText(textState + 1);
  };

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState]);

  return (
    <div className="text-box">
      <p className="text" onAnimationEnd={updateTextState}>
        那人對你們大多數的問題都只給予了夢囈般的片段字句，出口、錯誤、罪孽幾個詞彙在他口中反覆，在數次問答後他陷入沉默，沒有焦距的目光緩慢地掃視過每個人的雙眼，古怪的喀咖聲從他喉中溢出，美麗的藍色安靜地包覆了那雙眼睛。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={updateTextState}
      >
        四周的肌肉緩慢地蠕動，一點一點將他吞沒，你們看見他咧開嘴角，凝固成一個過於工整的僵硬笑容，直到最後一根髮絲也消失無蹤，光滑的肉壁上剩下漾著藍色光芒的結晶，像是一個扭曲的人型。
      </p>
      <p
        className={textState > 1 ? "text hint" : "hidden"}
        onClick={() => {
          updateTextState();
          dispatch(setImage(12));
        }}
      >
        ［喀咖］
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={updateTextState}
      >
        還未等你們從那詭譎的一幕中回神，船身突然開始劇烈擺盪，原本平靜如死水的體液掀起了波瀾，令人牙痠的擠壓聲從船的底部傳來，接著逐漸向上。
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={updateTextState}
      >
        伴隨堅硬物體的撞擊聲，你們在難以站立的甲板上看到那剪刀狀的東西死死扣住船緣，兩顆透澈的藍色眼珠被眼柄托著悠晃地探了上來。
      </p>
      <p
        className={textState > 4 ? "text" : "hidden"}
        onAnimationEnd={updateTextState}
      >
        你從未聽聞過這副模樣的海怪，將近半船高的蟹狀生物揮舞著不成比例地巨大的螯，細長的足部將軀幹高高撐起，殼上成片的藍色晶體肆意生長，難以辨識它原先的形體，看似普通的揮擊都能讓船體發出令人頭皮發麻的巨響。
      </p>
      <p
        className={textState > 5 ? "text" : "hidden"}
        onAnimationEnd={updateTextState}
      >
        於此同時，後方也傳來了相同的聲響，天知道這個啥都吞的大王八蛋吃了多少這樣的鬼東西，藍色的幽光隨著它們移動而閃爍，將戰鬥的舞台徹底點亮。
      </p>
      <button
        className={textState > 6 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(data));
          showCrabType(true);
          navigate("/10");
        }}
      >
        <img src={btnImg} alt="" />
        <p>進入戰鬥</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}
export default Main9;
