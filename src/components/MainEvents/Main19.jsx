import { useEffect, useRef, useState } from "react";
import btnImg from "/UI/btn_sen_off.png";
import { useDispatch, useSelector } from "react-redux";
import { setImage, setMainState } from "../../../redux/stateSlice/stateSlice";
import { useNavigate } from "react-router-dom";
import { addLog } from "../../../redux/logSlice/logSlice";

const data = [
  "並沒有給你們多少喘息的機會，你們尋找戰利品的行動被空間劇烈的收縮強制中止，鑲在肉壁的晶體隨著大幅度蠕動如流星般墜落，帶起成片脆響。",
  "那道幽魂般附著的低頻響動大了起來，你不覺得你真的聽見了聲音，頭腔裏卻縈繞著旋律，破洞般的哀傷漫了上來，你感受到被潘尼達絲注視的不甘。",
  "世界在坍塌，同你絕望的心一般。",
  "你們來時的通道湧進了大量的液體，水位隨之上漲，四面八方的肉壁開始噴出水柱，夾帶著點點藍光同流沙般傾瀉而下，很快水面便沒過了洞口，並且持續攀升，直到頭頂的肉壁已經觸手可及也未停下。",
  "［咕嚕咕嚕］",
  "水勢不可擋的從各處灌進了船艙，很快你們便失去了浮力，開始逐漸沒入水中。",
  "船桅已經觸頂，在擠壓中發出令人牙酸的悲鳴，更縮短了你們下沉的時間，眨眼間所有的一切都被吞沒。",
  "溫暖的液體包覆著你，哪怕貼著頂端也沒有一絲空隙可供呼吸。儘管思緒開始渙散，缺氧的痛苦不知為何遲遲沒有襲來，你只是安靜地失去了對身體的控制。",
  "隨著最後一點氣泡上揚，藍色光點們伴著你飄然下墜，你身在慢速播放的流星雨中心，一切溫柔得不可思議，像是本該如此。",
  "-",
];

function Main19() {
  const mainState = useSelector((state) => state.state.main);
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
        並沒有給你們多少喘息的機會，你們尋找戰利品的行動被空間劇烈的收縮強制中止，鑲在肉壁的晶體隨著大幅度蠕動如流星般墜落，帶起成片脆響。
      </p>
      <p
        className={textState > 0 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        那道幽魂般附著的低頻響動大了起來，你不覺得你真的聽見了聲音，頭腔裏卻縈繞著旋律，破洞般的哀傷漫了上來，你感受到被潘尼達絲注視的不甘。
      </p>
      <p
        className={textState > 1 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        世界在坍塌，同你絕望的心一般。
      </p>
      <p
        className={textState > 2 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        你們來時的通道湧進了大量的液體，水位隨之上漲，四面八方的肉壁開始噴出水柱，夾帶著點點藍光同流沙般傾瀉而下，很快水面便沒過了洞口，並且持續攀升，直到頭頂的肉壁已經觸手可及也未停下。
      </p>
      <p
        className={textState > 3 ? "text" : "hidden"}
        onClick={() => {
          dispatch(setMainState("off"));
          dispatch(setImage(19));
          showText();
        }}
      >
        <span className={mainState === "normal" ? "hint" : "hint-off"}>
          ［咕嚕咕嚕］
        </span>
      </p>
      <p
        className={textState > 4 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        水勢不可擋的從各處灌進了船艙，很快你們便失去了浮力，開始逐漸沒入水中。
      </p>
      <p
        className={textState > 5 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        船桅已經觸頂，在擠壓中發出令人牙酸的悲鳴，更縮短了你們下沉的時間，眨眼間所有的一切都被吞沒。
      </p>
      <p
        className={textState > 6 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        溫暖的液體包覆著你，哪怕貼著頂端也沒有一絲空隙可供呼吸。
      </p>
      <p
        className={textState > 7 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        儘管思緒開始渙散，缺氧的痛苦不知為何遲遲沒有襲來，你只是安靜地失去了對身體的控制。
      </p>
      <p
        className={textState > 8 ? "text" : "hidden"}
        onAnimationEnd={showText}
      >
        隨著最後一點氣泡上揚，藍色光點們伴著你飄然下墜，你身在慢速播放的流星雨中心，一切溫柔得不可思議，像是本該如此。
      </p>
      <button
        className={textState > 9 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(data));
          dispatch(setMainState("normal"));
          dispatch(setImage(18));
          navigate("/20");
        }}
      >
        <img src={btnImg} alt="" />
        <p>下墜</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}

export default Main19;
