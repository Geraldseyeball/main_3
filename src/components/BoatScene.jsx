import bg from "/EP3/BoatScene/3-18-room.png";
import frame from "/EP3/BoatScene/3-18-frame.png";
import table from "/EP3/BoatScene/3-18-desk.png";
import book from "/EP3/BoatScene/3-18-book.png";
import chair from "/EP3/BoatScene/3-18-chair.png";
import paint from "/EP3/BoatScene/3-18-paint.png";
import bgShake from "/EP3/BoatScene/3-19-room.gif";
import { useEffect, useRef, useState } from "react";
import Book from "./Book";
import { useDispatch, useSelector } from "react-redux";
import {
  setBattleState,
  setBoatSceneState,
  setMonster,
} from "../../redux/stateSlice/stateSlice";
import { addLog } from "../../redux/logSlice/logSlice";

const dataLog = {
  book: [
    "就連神殿附設的圖書室都不會出現這麼多書，有錢有閒的天殺有錢人啊。",
    "精裝的結實外殼保留了這些書最後的體面，不至於徹底散架。",
    "你隨手翻了幾本，裡面使用的語言不是你認識的任何一種，單看圖片推測的話似乎大多都是和生物相關的，還有不少關於天文、洋流和地質礦物以及建築工程。",
    "-",
  ],
  desk: [
    "脆弱的紙張泛黃碎裂，僅看殘留的部分你也能確定這張地圖和你所知的航海圖相差甚遠，尤其是那些另外標註上去的筆跡，暈染開的墨跡拉出了長長的路線，但並不是你認知中的任何一條海路或是洋流。",
    "-",
  ],
  paint: [
    "這些大多是風景畫，看上去皆是名家之作，其中一幅的畫框格外華麗，吸引了你的目光。",
    "稚嫩的筆觸在紙面大肆揮灑，童趣的線條似乎試著勾勒出一家三口，一個瞇眼微笑的金髮女人，一個滿臉鬍子的男人，還有一個緊握兩人雙手掛著大大笑容的孩子。",
    "圖畫的右下角署名般寫著歪曲的文字：諾亞。",
    "-",
  ],
  chair: [
    "這張椅子明顯比倒在地上的那些要來得精緻許多，你很快便發現它端正的原因——這張椅子被死死地固定在地面上。",
    "-",
  ],
};
const dataLog2 = [
  "水晶般清脆的碰撞聲叮叮咚咚地在頭上響起，緊接著便是天搖地動，劇烈的晃動讓人幾乎無法站立，屋內塵屑揚起，木板破碎地吱呀哀號，昏暗的室內突然打進一束光亮。",
  "你們和窗外的東西對上了視線，那顆巨大的眼睛安靜地凝視著你們。",
  "藍色結晶緊貼著破口，中間的圓點延伸出放射狀的細線，雲霧狀的細小分子在其中翻騰，讓本該透亮的目光變得混濁，周圍的一切鋪上一層幽藍。",
  "圓點輕輕顫動，從左到右緩慢掃視屋內的每一吋，恐懼勒緊心臟，麻痺了思緒和行動，時間的流動被無限拉長。",
  "刺耳的轟鳴聲炸開，苦苦支撐的梁柱在最後的尖叫後徹底斷裂，光亮灑落進來。",
  "［抬頭］",
  "牠雙足站立著，像把弄積木般將整塊屋頂捏在手裡，藍色結晶取代了皮膚，密密麻麻地爬滿了它整個軀體。",
  "牠將屋頂往旁一拋，大量的晶塊和肉團隨之飛落，砸落水面發出濕潤的噗砰聲，紅白交錯的生物組織從縫隙中擠出纏繞包覆著晶體，結晶再刺破血肉竄出，牠在每一步中崩解又再生，僅有眼睛一動不動地緊盯你們的身影，你對那道溢出藍光的視線有種詭譎的熟悉感，你肯定在哪裡見過。",
  "你無法靠渺小的人類軀殼和這樣的怪物戰鬥，請擲一個（BOBEI）。",
  "聖筊－腎上腺素給了你無限的力量，你用無法想像的驚人技巧高速回到了船上，第一時間進入備戰模式。",
  "笑筊－崎嶇的結晶山不論上下都很煩人，沒人想在這摔個屁股開花，你盡可能謹慎且快速的朝船奔去，戰鬥開始的第一回合無法行動。",
  "無筊－唉呦喂呀！你的屁屁跟地面來了個親密接觸，儘管你以最快的速度起身，仍舊耽誤了些時間，戰鬥開始的前兩回合無法行動。",
  "-",
  "戰鬥！遭遇了【被吞噬的無名者】，混濁的雙眼沉默地注視著你們。",
  "-",
];

function BoatScene() {
  const data = {
    default: [
      "霉味混著腥臭撲面而來，裡面的空間比預期的要小，大半的房間已然坍塌，被濡濕的肉團取代，剩下苦苦堅持的梁柱也被擠壓得扭曲變形，被精心錶框的畫作有些落在地面，有些苦苦堅持。原本靠牆放置的數個書櫃傾倒在地，大量的書籍散落一地。一張能供十來人圍坐的圓桌立於房間中央，桌子中心有張幾乎占據整個桌面的地圖，圍繞圓桌的椅子和酒瓶們東倒西歪的翻覆在地，僅有位於主位的那個座位屹立不搖。",
      "裡面的某些東西引起了你的興趣。",
    ],
    book: [
      "就連神殿附設的圖書室都不會出現這麼多書，有錢有閒的天殺有錢人啊。",
      "精裝的結實外殼保留了這些書最後的體面，不至於徹底散架。",
      "你隨手翻了幾本，裡面使用的語言不是你認識的任何一種，單看圖片推測的話似乎大多都是和生物相關的，還有不少關於天文、洋流和地質礦物以及建築工程。",
    ],
    desk: [
      "脆弱的紙張泛黃碎裂，僅看殘留的部分你也能確定這張地圖和你所知的航海圖相差甚遠，尤其是那些另外標註上去的筆跡，暈染開的墨跡拉出了長長的路線，但並不是你認知中的任何一條海路或是洋流。",
    ],
    paint: [
      "這些大多是風景畫，看上去皆是名家之作，其中一幅的畫框格外華麗，吸引了你的目光。",
      "稚嫩的筆觸在紙面大肆揮灑，童趣的線條似乎試著勾勒出一家三口，一個瞇眼微笑的金髮女人，一個滿臉鬍子的男人，還有一個緊握兩人雙手掛著大大笑容的孩子。",
      "圖畫的右下角署名般寫著歪曲的文字：諾亞。",
    ],
    chair: [
      "這張椅子明顯比倒在地上的那些要來得精緻許多，你很快便發現它端正的原因——這張椅子被死死地固定在地面上。",
    ],
  };

  const [textState, setTextState] = useState(0);
  const [current, setCurrent] = useState("default");
  const [state, setState] = useState(true);
  const [hintState, setHintState] = useState(false);
  const [bookState, showBook] = useState(false);
  const boatState = useSelector((state) => state.state.boatScene);
  const ref = useRef();
  const dispatch = useDispatch();

  function showText() {
    setTextState((prev) => prev + 1);
  }

  function scrollToBottom() {
    if (ref.current) {
      ref.current.scrollIntoView("smooth");
    }
  }
  useEffect(() => {
    scrollToBottom();
  }, [textState, hintState]);

  return (
    <section className={boatState ? "boat-scene" : "hidden"}>
      <div className="container">
        <img src={state ? bg : bgShake} alt="" />
        <img src={frame} alt="" className="boat-frame" />
        {state && (
          <>
            <img
              src={table}
              alt=""
              className="boat-table"
              onClick={() => {
                dispatch(addLog(dataLog.desk));
                setCurrent("desk");
              }}
            />
            <img
              src={book}
              alt=""
              className="boat-book"
              onClick={() => {
                dispatch(addLog(dataLog.book));
                setCurrent("book");
              }}
            />
            <img
              src={chair}
              alt=""
              className="boat-chair"
              onClick={() => {
                dispatch(addLog(dataLog.chair));
                setCurrent("chair");
              }}
            />
            <img
              src={paint}
              alt=""
              className="boat-paint"
              onClick={() => {
                dispatch(addLog(dataLog.paint));
                setCurrent("paint");
              }}
            />
          </>
        )}
        {state ? (
          <div className="text-b">
            {data[current].map((el, i) => (
              <p key={i}>{el}</p>
            ))}
            {current === "chair" && (
              <p>
                它似乎承受了一些撞擊，左側扶手有著不尋常的縫隙，想辦法撬開後，你拿到了一本保存狀態尚可的
                <span
                  className="hint"
                  onClick={() => {
                    showBook(true);
                  }}
                >
                  ［墨綠色手記］
                </span>
                。
              </p>
            )}
            <p className="text">
              <span
                className="hint"
                onClick={() => {
                  setState(false);
                }}
              >
                [沒什麼好看的了?]
              </span>
            </p>
          </div>
        ) : (
          <div className="text-s">
            <p className="text" onAnimationEnd={showText}>
              水晶般清脆的碰撞聲叮叮咚咚地在頭上響起，緊接著便是天搖地動，劇烈的晃動讓人幾乎無法站立，屋內塵屑揚起，木板破碎地吱呀哀號，昏暗的室內突然打進一束光亮。
            </p>
            <p
              className={textState > 0 ? "text" : "hidden"}
              onAnimationEnd={showText}
            >
              你們和窗外的東西對上了視線，那顆巨大的眼睛安靜地凝視著你們。
            </p>
            <p
              className={textState > 1 ? "text" : "hidden"}
              onAnimationEnd={showText}
            >
              藍色結晶緊貼著破口，中間的圓點延伸出放射狀的細線，雲霧狀的細小分子在其中翻騰，讓本該透亮的目光變得混濁，周圍的一切鋪上一層幽藍。
            </p>
            <p
              className={textState > 2 ? "text" : "hidden"}
              onAnimationEnd={showText}
            >
              圓點輕輕顫動，從左到右緩慢掃視屋內的每一吋，恐懼勒緊心臟，麻痺了思緒和行動，時間的流動被無限拉長。
            </p>
            <p
              className={textState > 3 ? "text" : "hidden"}
              onAnimationEnd={showText}
            >
              刺耳的轟鳴聲炸開，苦苦支撐的梁柱在最後的尖叫後徹底斷裂，光亮灑落進來。
            </p>
            <p className={textState > 4 ? "text" : "hidden"}>
              <span className="hint" onClick={showText}>
                ［抬頭］
              </span>
            </p>
            <p
              className={textState > 5 ? "text" : "hidden"}
              onAnimationEnd={showText}
            >
              牠雙足站立著，像把弄積木般將整塊屋頂捏在手裡，藍色結晶取代了皮膚，密密麻麻地爬滿了它整個軀體。
            </p>
            <p
              className={textState > 6 ? "text" : "hidden"}
              onAnimationEnd={showText}
            >
              牠將屋頂往旁一拋，大量的晶塊和肉團隨之飛落，砸落水面發出濕潤的噗砰聲，紅白交錯的生物組織從縫隙中擠出纏繞包覆著晶體，結晶再刺破血肉竄出，牠在每一步中崩解又再生，僅有眼睛一動不動地緊盯你們的身影，你對那道溢出藍光的視線有種詭譎的熟悉感，你肯定在哪裡見過。
            </p>
            <p className={textState > 7 ? "text" : "hidden"}>
              你無法靠渺小的人類軀殼和這樣的怪物戰鬥，請擲一個
              <span
                className="hint"
                onClick={() => {
                  setHintState(true);
                }}
              >
                （BOBEI）
              </span>
              。
            </p>
            <p
              className={hintState ? "text" : "hidden"}
              onAnimationEnd={showText}
            >
              聖筊－腎上腺素給了你無限的力量，你用無法想像的驚人技巧高速回到了船上，第一時間進入備戰模式。
              <br />
              笑筊－崎嶇的結晶山不論上下都很煩人，沒人想在這摔個屁股開花，你盡可能謹慎且快速的朝船奔去，戰鬥開始的第一回合無法行動。
              <br />
              無筊－唉呦喂呀！你的屁屁跟地面來了個親密接觸，儘管你以最快的速度起身，仍舊耽誤了些時間，戰鬥開始的前兩回合無法行動。
            </p>
            <p className={hintState && textState > 8 ? "text" : "hidden"}>
              <span
                className="hint"
                onClick={() => {
                  dispatch(addLog(dataLog2));
                  dispatch(setBoatSceneState());
                  dispatch(setMonster("nameless"));
                  dispatch(setBattleState());
                }}
              >
                ［進入戰鬥］
              </span>
            </p>
            <div ref={ref}></div>
          </div>
        )}
        {bookState && <Book showBook={showBook} />}
      </div>
    </section>
  );
}

export default BoatScene;
