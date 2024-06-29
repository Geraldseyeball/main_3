import { useState } from "react";
import cover from "/EP3/BoatScene/book/封面.png";
import page1 from "/EP3/BoatScene/book/01.png";
import page2 from "/EP3/BoatScene/book/02.png";
import page3 from "/EP3/BoatScene/book/03.png";
import page4 from "/EP3/BoatScene/book/0405.png";
import page5 from "/EP3/BoatScene/book/06.png";
import page8 from "/EP3/BoatScene/book/08.png";
import back from "/EP3/BoatScene/book/封底.png";
import paaper from "/EP3/BoatScene/book/契約書.png";
import sign from "/EP3/BoatScene/book/sign.png";

import arrowLeft from "/EP3/BoatScene/arrow-l.png";
import arrowRight from "/EP3/BoatScene/arrow-r.png";
import closeIcon from "/UI/cross.png";

function Book({ showBook }) {
  const page = {
    0: cover,
    1: page1,
    2: page2,
    3: page3,
    4: page4,
    5: page4,
    6: page5,
    7: page4,
    8: page8,
    9: back,
  };
  const info = {
    0: { left: [], right: [] },
    1: {
      left: [
        [
          "a-right",
          "在午後1點45分左右亮度最強，深度小於4000米就無法保持恆定亮度，色澤也會有所改變，距離海平面1530米時開始不發光",
        ],
        ["a-center", "比多數礦石都來得堅硬，越透明的部分越難以擊碎"],
        ["a-left", "底部很脆，因為是新生的？還是內部霧狀物影響？"],
      ],
      right: [
        ["a-left", "生成型態不固定，但簇狀結晶體約佔83%"],
        ["a-right", "它們他媽的完全不在乎長在什麼東西上，好極了！"],
        [
          "a-center",
          <>
            <span className="delete"> 濕度 </span>
            <span className="delete"> 鹽度 </span>
            <span className="delete"> 溫度 </span> 溫度？
            <span className="under"> 壓力 </span>
          </>,
        ],
      ],
    },
    2: {
      left: [],
      right: [
        [
          "a-left",
          "這個可能性讓人振奮！我從未看過這些藍色小傢伙這麼活躍，如此巨大的移動式居住堡壘簡直超越了我的期待，恆溫、堅固、自動補充食物，太完美了！就是有點黑，不過那很快就不會是問題了，我們會讓這變成一個能源自給自足的地方！掌握牠的消化和移動模式會是首要任務。",
        ],
        [
          "a-right",
          `亞佛不知道在擔憂什麼，人本就該渴求知識不是嗎？更何況有這麼多人對這個項目感興趣，那些神學搞壞腦子的傢伙偶爾還是會做出些正確的判斷嘛！島上那群相信白癡傳說的"教授"就更瘋了，永生？別笑死了，連新來那幾個年輕的小伙都信這鬼話，但無所謂，肯給錢要我每天喊傑拉爾德萬歲萬歲萬萬歲都行`,
        ],
        ["a-right", <span className="small">就叫諾亞吧，我好想他</span>],
      ],
    },
    3: {
      left: [
        [
          "a-right",
          "一切都在朝正確的方向前進，海底的瘋子跟島上的瘋子居然達成共識了，喔他們可真是太懂得怎麼娛樂我了，天知道看著那群腦子破洞的一臉嚴肅討論著不存在的鑰匙要忍著不笑出來有多難",
        ],
        ["a-left", "倫恩失蹤了，又一個，媽的"],
        [
          "a-center",
          <>
            <span className="delete">那聲個音一在直響　？</span>我昨天在寫什麼
          </>,
        ],
        [
          "a-left",
          "別隔三差五地在那該時間快到了，這不是還沒到嗎？閉嘴給錢就是了",
        ],
        ["a-right", "幾乎要完成了，所有付出都是值得的"],
      ],
      right: [
        ["", ""],
        ["a-right", "不、不不不不不不不不，不該是這樣的"],
      ],
    },
    4: {
      left: [
        ["", ""],
        ["a-left", "人不是神，我太傲慢了"],
        ["a-right", "利克也放棄了，為什麼呢？"],
        ["", ""],
      ],
      right: [
        ["", ""],
        [
          "",
          "我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了我們成功了",
        ],
        ["a-right", <span className="small">都誰不在</span>],
      ],
    },
    5: {
      left: [],
      right: [
        ["", ""],
        ["a-center", "好癢　長來出了"],
        ["", ""],
      ],
    },
    6: { left: [], right: [] },
    7: { left: [], right: [] },
    8: { left: [], right: [] },
    9: { left: [], right: [] },
  };

  const [current, setCurrent] = useState(0);
  const [hint, showHint] = useState(false);

  return (
    <div className="book">
      <div className="book-contain">
        <img src={page[current]} alt="" className="bg" />
        <div className="left">
          {info[current].left.map((arr, i) => (
            <p className={arr[0]} key={i}>
              {arr[1]}
            </p>
          ))}
        </div>
        <div className="right">
          {info[current].right.map((arr, i) => (
            <p className={arr[0]} key={i}>
              {arr[1]}
            </p>
          ))}
        </div>
        <button
          className={current === 8 ? "showPaper" : "hidden"}
          onClick={() => {
            showHint(true);
          }}
        ></button>
        {hint && (
          <div className="paper">
            <div>
              <img src={paaper} alt="" />
              <p>
                拉皮給舟方付交前月個三判日審於須麥拉，麥拉給卡達供提拉皮由
                <br />
                <br />
                入出和存生中其在能物生，進行淵深者命逆達抵可，足自己自源能，性控可有具須舟方
                標目要首為件條述上成達依究研有所保確須必麥拉
                <br />
                算預年隔縮限否是定判此依權有拉皮，明說出提需劃規達未度進若，度進究研告報與算預編列須年每麥拉
                <br />
                傳外得不皆容內的究研或約契此於關何任，外士人部內城亞禮達康與地基究研除
                <br />
                決裁行進並，福祝的妲忒歐與斯忒洛得不世永將，約契此反違方一任，憑為份一持各方雙由，份兩式一約契本
              </p>
              <button
                className="close-btn"
                onClick={() => {
                  showHint(false);
                }}
              >
                <img src={sign} alt="" className="sign" />
                <img src={closeIcon} alt="" className="close-icon" />
              </button>
            </div>
          </div>
        )}
        {current > 0 && (
          <button
            className="prev"
            onClick={() => {
              current > 0 && setCurrent((prev) => prev - 1);
            }}
          >
            <img src={arrowLeft} alt="" />
          </button>
        )}
        {current < 9 && (
          <button
            className="next"
            onClick={() => {
              current < 9 && setCurrent((prev) => prev + 1);
            }}
          >
            <img src={arrowRight} alt="" />
          </button>
        )}
        <button
          className="close-book"
          onClick={() => {
            showBook(false);
          }}
        >
          <img src={closeIcon} alt="" className="close-icon" />
        </button>
      </div>
    </div>
  );
}

export default Book;
