import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import btnImg from "/UI/btn_sen_normal.png";
import { useNavigate } from "react-router-dom";
import { addLog } from "../../../redux/logSlice/logSlice";
import {
  setItem,
  setPGold,
  setPItem,
  setPSliver,
  setUncrystal,
} from "../../../redux/itemSlice/itemSlice";

function Main18_2() {
  const data = [
    "每次重挫都帶走了一點那怪物似人的體徵，血肉和晶體像是爭奪著地盤在牠身上不斷生長又崩落，爛肉鑲著藍點稀軟地成灘落下，妖異的紅在水面擴散。",
    "在又一次致命的攻擊後，這個彷彿毫無知覺的怪物身體猛地膨脹再膨脹，大量結晶從被擠出墜落，撐大到極致的肉膜緊繃而脆弱。",
    "那對藍色的眼珠顫動了下，接著向外迸出，大量的液體像是找到了宣洩口般傾瀉，水面隨著注入而上漲波盪不斷。",
    "不過數秒那巨大的身影就如溶解般成了一灘不成形的黏稠漿糊，緩緩沒入水裡。",
    "你們在滿地紅藍交錯的狼藉中尋找可能有用的東西，聲聲泣血似的悲鳴在空間中迴盪，一隻毛茸茸的小生物從角落竄出。",
  ];
  const item = [
    "[最後的寶庫 - 金山銀山]",
    "每位船員獲得 -",
    "1金50銀",
    "珠寶飾品 x10",
    "每艘船獲得 -",
    "未打磨的藍晶 x2500",
    "傑拉爾德的畫像 x1",
    "密醫手稿 x1",
    "-",
    "[最後的寶庫 - 油脂+寵物]",
    "每艘船獲得 -",
    "變異巨鯨油脂 x1",
    "[索羅爾群島仲裁者] 圖紙 x1",
    "寵物 - 海貓",
    "-",
  ];
  const getItem = [
    ["傑拉爾德的畫像 x1", ""],
    [
      "密醫手稿 x1 - ",
      "持有後，可在使用 基礎醫療包 時額外恢復 30點血量，可與其他道具疊加、不可單獨使用。此為 非 消耗性道具，可依照說明重複使用。",
    ],
    [
      "變異巨鯨油脂 x1 - ",
      "外型乳白偏黃，香氣四溢，可以向藍晶船廠兌換［不滅明燈］。",
    ],
    [
      "[索羅爾群島仲裁者] 圖紙 x1 - ",
      "可依照圖紙自行合成，外觀自訂。（需求部件：[索羅爾群島仲裁者] 部件A、[索羅爾群島仲裁者] 部件B。） ［武器］欄位裝備後，攻擊骰 額外＋100。 下回合攻擊骰 再 額外＋10(至多疊加至＋40)。",
    ],
    [
      "[寵物] 海貓 - ",
      "傳說中能為船隻帶來幸運的生物，事實上只是個晚上很愛叫的有蹼小貓。 僅能於船隻v船隻的戰鬥結束後使喚，讓牠叼來不同戰利品供船隊挑選。 須於擲獎勵骰前宣告使用，該獎勵骰須完整擲 3遍，並從中擇一當做結果，若沒有擲骰獎勵則視作無法使用。 此寵物僅限主線可使用，且只作用於船戰獎勵。",
    ],
  ];
  const dataLog = [...data, "-"];
  const [textState, setTextState] = useState(0);
  const [itemState, setItemState] = useState({ item1: false, item2: false });
  const battleState = useSelector((state) => state.state.battle);
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function scrollToBottom() {
    ref.current.scrollIntoView("smooth");
  }

  function showText() {
    setTextState((prev) => prev + 1);
  }

  useEffect(() => {
    scrollToBottom();
  }, [textState, itemState]);

  return (
    <div className="text-box">
      {data.map((el, i) => (
        <p
          className={!battleState && textState > i - 1 ? "text" : "hidden"}
          key={i}
          onAnimationEnd={showText}
        >
          {el}
        </p>
      ))}
      <p
        className={!battleState && textState > 4 ? "text" : "hidden"}
        onClick={() => {
          setItemState((prev) => {
            return { ...prev, item1: true };
          });
        }}
      >
        <span className="hint">[最後的寶庫－金山銀山]</span>
      </p>
      <p className={itemState.item1 ? "text" : "hidden"}>
        每位船員獲得 -<br />
        1金50銀
        <br />
        珠寶飾品 x10
        <br />
        每艘船獲得 - <br />
        未打磨的藍晶 x2500
        <br />
        傑拉爾德的畫像 x1
        <br />
        密醫手稿 x1
      </p>
      <p
        className={!battleState && textState > 4 ? "text" : "hidden"}
        onClick={() => {
          setItemState((prev) => {
            return { ...prev, item2: true };
          });
        }}
      >
        <span className="hint">[最後的寶庫－油脂＋寵物]</span>
      </p>
      <p className={itemState.item2 ? "text" : "hidden"}>
        每艘船獲得 -<br />
        變異巨鯨油脂 x1
        <br />
        [索羅爾群島仲裁者] 圖紙 x1
        <br />
        寵物 - 海貓
      </p>
      <button
        className={textState > 4 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(dataLog));
          dispatch(addLog(item));
          dispatch(setUncrystal(2500));
          dispatch(setPGold(1));
          dispatch(setPSliver(50));
          dispatch(setItem(getItem));
          dispatch(setPItem(["珠寶飾品 x10", ""]));
          navigate("/19");
        }}
      >
        <img src={btnImg} alt="" />
        <p>繼續前進</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}

export default Main18_2;
