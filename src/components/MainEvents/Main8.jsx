import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import btnImg from "/UI/btn_sen_off.png";
import { useDispatch } from "react-redux";
import { setImage } from "../../../redux/stateSlice/stateSlice";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "黑暗中驟然出現的亮光是多麼誘人，你突然有點理解那些被燈籠魚吞下肚的獵物，那抹藍靜靜地綻放，美好得讓人嚮往。湛藍的星點隨著深入逐漸密集，低頻的振動吟唱著，讓人耳膜發癢，船前進的速度緩了下來，藍光幽幽地點亮了透不進光的空間，你們逐漸看清了四周。",
  "「……我……」",
  "發光的藍色晶礦成簇地鑲在了濡濕的暗色肉壁上，隨著細小的氣流微微起伏著。可以確定你們應該是被一隻難以想像的巨獸一口吞入了腹中，牠體內的空間大得出奇，你們的船隻航行得毫不費力，這怪物似乎仗著體型龐大就什麼都想來上一口，一些破敗的殘骸在下方的水面飄著。",
  "「錯誤……孽……」",
  "先是細小的碎屑，接著開始出現較大的沉積物，看著眼前斜著插在水中的桅杆，你明白這肯定不是這隻怪物第一次把船隻當零嘴吞下。",
  "「……日……晶……出口」",
  "那道從你們深入魚腹就混在低吟裡的聲音，喃喃低語著什麼，破碎的字句隨著前進愈發清晰。",
  "「我們不該……錯了……報……」",
  "聲音從一個黑暗的角落傳來，你們必須非常靠近肉牆才能稍微辨識出聲音的來源。",
  "「對……但不能……那條路是……可以……」",
  "那是一個人類，大概是。<br/>他半個身體埋在濕滑的肉壁內，肢體不自然地扭曲著，嘶啞的嗓音不停呢喃著混亂的話語，你沒辦法從凌亂的鬍鬚和頭髮中窺視到他的神情，但從聲音和暴露在外的軀體來看，就算沒被鑲在巨大海怪的體內，他也應該已經半隻腳踏入棺材。",
  "在你們足夠靠近時，囈語的人猛然抬起頭，毛髮下的一雙眼睛映著藍光。",
  "「這件事從一開始就錯了。」他顫抖著說。",
  "-",
];

function Main8() {
  const [textState, showText] = useState(0);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  const updateTextState = () => {
    showText(textState + 1);
  };

  useEffect(() => {
    scrollToBottom();
  }, [textState]);
  return (
    <div className="text-box">
      <p className="text" onAnimationEnd={updateTextState}>
        黑暗中驟然出現的亮光是多麼誘人，你突然有點理解那些被燈籠魚吞下肚的獵物，那抹
        <span className="crystal">藍</span>靜靜地綻放，美好得讓人嚮往。
        <br />
        湛藍的
        <span className="crystal">星</span>點隨著深入逐漸密集，低頻的振動吟
        <span className="crystal">唱</span>
        著，讓人耳膜發癢，船前進的速度緩了下來，藍
        <span className="crystal">光</span>
        幽幽地點亮了透不進光的空間，你們逐漸看清了四
        <span className="crystal">周</span>。
      </p>
      <p className="talk-effect">「……我……」</p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={updateTextState}
      >
        發光的<span className="crystal">藍</span>
        色晶礦成<span className="crystal">簇</span>
        地鑲在了濡濕的暗色肉壁上，隨著細小的氣流微微
        <span className="crystal">起伏</span>
        著。
        <br />
        可以確定你們應該是被一隻難以想像的
        <span className="crystal">巨獸</span>
        一口吞入了腹中，牠體內的空間大得出奇，你們的船隻航行得毫不費力，這怪物似乎
        <span className="crystal">仗</span>
        著體型龐大就什麼都想來上一口，一些破敗的殘骸在下方的水面
        <span className="crystal">飄</span>著。
      </p>
      <p className={textState > 0 ? "talk-effect" : "hidden"}>「錯誤……孽……」</p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={updateTextState}
      >
        先是細小的<span className="crystal">碎</span>屑，接著開始出現較
        <span className="crystal">大</span>
        的沉積物，看著眼前斜著插在水中的桅杆，你明
        <span className="crystal">白</span>這肯定不是這隻怪物第一
        <span className="crystal">次</span>把船隻當
        <span className="crystal">零嘴</span>吞下。
      </p>
      <p className={textState > 1 ? "talk-effect" : "hidden"}>
        「……日……晶……出口」
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={updateTextState}
      >
        那道從你們深入<span className="crystal">魚腹</span>就混在
        <span className="crystal">低吟</span>裡的聲音，
        <span className="crystal">喃喃</span>低語著什麼，破
        <span className="crystal">碎</span>的字句
        <span className="crystal">隨</span>著前進愈發
        <span className="crystal">清晰</span>。
      </p>
      <p className={textState > 2 ? "talk-effect" : "hidden"}>
        「我們不該……錯了……報……」
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onAnimationEnd={updateTextState}
      >
        <span className="crystal">聲音</span>從
        <span className="crystal">一個</span>黑暗的角落
        <span className="crystal">傳來</span>，你們必須非常靠近
        <span className="crystal">肉牆</span>才能稍微辨識出
        <span className="crystal">聲音</span>的來
        <span className="crystal">源</span>。
      </p>
      <p className={textState > 3 ? "talk-effect" : "hidden"}>
        「對……但不能……那條路是……可以……」
      </p>
      <p
        className={textState > 4 ? "text" : "hidden"}
        onAnimationEnd={updateTextState}
      >
        那是一個人類，大概是。
        <br />
        他半<span className="crystal">個</span>身體埋在
        <span className="crystal">濕滑</span>的肉壁內，肢體不自然地
        <span className="crystal">扭曲</span>著，
        <span className="crystal">嘶啞</span>的嗓音不停呢喃著
        <span className="crystal">混亂</span>的話語，你沒辦法從
        <span className="crystal">凌亂</span>的鬍
        <span className="crystal">鬚</span>和頭髮中
        <span className="crystal">窺視</span>到他的
        <span className="crystal">神情</span>，但從聲音和
        <span className="crystal">暴露</span>在外的
        <span className="crystal">軀體</span>來看，就算沒被
        <span className="crystal">鑲</span>在巨大海怪的
        <span className="crystal">體內</span>，他也
        <span className="crystal">應該</span>已經半隻腳踏入
        <span className="crystal">棺材</span>。
      </p>
      <p
        className={textState > 5 ? "text" : "hidden"}
        onAnimationEnd={updateTextState}
      >
        在<span className="crystal">你</span>們足夠
        <span className="crystal">靠近</span>時，
        <span className="crystal">囈語</span>的人猛然抬起頭，毛髮
        <span className="crystal">下</span>的一雙
        <span className="crystal">眼睛</span>映著
        <span className="crystal">藍光</span>。
      </p>
      <p className={textState > 5 ? "text" : "hidden"}>
        <span className="crystal">「這件事從一開始就錯了。」他顫抖著說。</span>
      </p>
      <button
        className={textState > 6 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(setImage(10));
          dispatch(addLog(data));
          navigate("/8talk");
        }}
      >
        <img src={btnImg} alt="" />
        <p>......？</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}
export default Main8;
