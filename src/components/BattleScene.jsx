import { useState } from "react";
//battle ui img
import UiDown from "/BattleScene/BATTLE_down1.png";
import UiUp from "/BattleScene/BATTLE_up.png";
import ship from "/BattleScene/BATTLE_ship.gif";
import human from "/BattleScene/BATTLE_human.gif";
import frame from "/BattleScene/BATTLE_fr2.png";
import lose from "/BattleScene/BATTLE_SCENE_LOSE_ship.gif";
import loseFrame from "/BattleScene/BATTLE_monstername.png";
import loseBtn from "/BattleScene/btn.png";
//monster img
import MonsterCrab from "/EP3/MONSTERS/3-11-1m.gif";
import MonsterCrabAngry from "/EP3/MONSTERS/3-11-2m.gif";
import MonsterShrimp from "/EP3/MONSTERS/3-13-2m.gif";
import MonsterShrimpAngry from "/EP3/MONSTERS/3-13-1m.gif";
import MonsterNameless from "/EP3/MONSTERS/3-14.gif";
import { useDispatch, useSelector } from "react-redux";
import { setBattleState } from "../../redux/stateSlice/stateSlice";
import {
  setBronze,
  setCrystal,
  setGold,
  setItem,
  setSliver,
  setUncrystal,
} from "../../redux/itemSlice/itemSlice";

function BattleScene({ windowState }) {
  const battleState = useSelector((state) => state.state.battle);
  const battleType = useSelector((state) => state.state.battleType);
  const monster = useSelector((state) => state.state.monster);
  const [ruleState, showrule] = useState(false);
  const [battleEnd, showAfterBattle] = useState(false);

  const dispatch = useDispatch();

  const monsterName = {
    crab: "變異的鋸緣鏽斑蟹",
    crabAngry: "怨懟的 變異的鋸緣鏽斑蟹",
    shrimp: "變異的刺脊岩龍蝦",
    shrimpAngry: "怨懟的 變異的刺脊岩龍蝦",
    nameless: "被吞噬的無名者",
  };
  const monsterType = {
    crab: MonsterCrab,
    crabAngry: MonsterCrabAngry,
    shrimp: MonsterShrimp,
    shrimpAngry: MonsterShrimpAngry,
    nameless: MonsterNameless,
  };
  const btnText = {
    crab: ["蟹天蟹地", "多蟹惠顧"],
    crabAngry: ["蟹天蟹地", "多蟹惠顧"],
    shrimp: ["高蝦立判", "蝦夕蝦景"],
    shrimpAngry: ["高蝦立判", "蝦夕蝦景"],
    nameless: ["勝利", "戰敗"],
  };
  const monsterState = {
    crab: { hp: "200 / 1名", speed: "(DICE20)" },
    crabAngry: { hp: "250 / 1名", speed: "(DICE20)+5" },
    shrimp: { hp: "200 / 1名", speed: "(DICE20)" },
    shrimpAngry: { hp: "250 / 1名", speed: "(DICE20)+5" },
    nameless: { hp: "350", speed: "(DICE20)/(DICE20)+10" },
  };
  const battleText = {
    crab: (
      <p
        className={!ruleState ? "" : "hidden"}
        onClick={() => {
          showrule(true);
        }}
      >
        戰鬥！遭遇了2隻<span className="hint">【變異的鋸緣鏽斑蟹】</span>
        ，請確保為每隻海怪進行擲骰。
      </p>
    ),
    crabAngry: (
      <p
        className={!ruleState ? "" : "hidden"}
        onClick={() => {
          showrule(true);
        }}
      >
        戰鬥！遭遇了2隻<span className="hint">【怨懟的 變異的鋸緣鏽斑蟹】</span>
        ，請確保為每隻海怪進行擲骰。
      </p>
    ),
    shrimp: (
      <p
        className={!ruleState ? "" : "hidden"}
        onClick={() => {
          showrule(true);
        }}
      >
        戰鬥！遭遇了4隻<span className="hint">【變異的刺脊岩龍蝦】</span>
        ，請確保為每隻海怪進行擲骰。
      </p>
    ),
    shrimpAngry: (
      <p
        className={!ruleState ? "" : "hidden"}
        onClick={() => {
          showrule(true);
        }}
      >
        戰鬥！遭遇了4隻<span className="hint">【怨懟的 變異的刺脊岩龍蝦】</span>
        ，請確保為每隻海怪進行擲骰。
      </p>
    ),
    nameless: (
      <p
        className={!ruleState ? "" : "hidden"}
        onClick={() => {
          showrule(true);
        }}
      >
        戰鬥！遭遇了<span className="hint">【被吞噬的無名者】</span>
        ，混濁的雙眼沉默地注視著你們。
      </p>
    ),
  };
  const ruleText = {
    crab: (
      <p className={ruleState ? "" : "hidden"}>
        雙方採用船戰規則。攻擊敵方時可以黑鋼砲攻擊當作弱點打擊，共 3
        次可將目標擊退。
        <br />
        <br />
        【敵方戰鬥回合】攻擊(COIN)
        <br />I →<br />
        ［真是蟹了］(DICE50-100)
        <br />P / 特殊骰 →<br />
        ［鰲甲衝擊］(DICE50-100)+10，被擊中的船隻於 下回合開始 持續 3
        回合[負面效果-破損]，每次－10點耐久。
      </p>
    ),
    crabAngry: (
      <p className={ruleState ? "" : "hidden"}>
        雙方採用船戰規則。攻擊敵方時可以黑鋼砲攻擊當作弱點打擊，共 3
        次可將目標擊退。
        <br />※ 因強烈的憤恨，第一次血量歸零時將會留有 1 點血量。
        <br />
        <br />
        【敵方戰鬥回合】攻擊(COIN)
        <br />I →<br />
        ［真是蟹了］(DICE80-100) <br />P / 特殊骰 →<br />
        ［鰲甲衝擊］(DICE80-100)+20，被擊中的船隻於 下回合開始 持續 3
        回合[負面效果-破損]，每次－10點耐久。
      </p>
    ),
    shrimp: (
      <p className={ruleState ? "" : "hidden"}>
        雙方採用船戰規則。攻擊敵方時可以黑鋼砲攻擊當作弱點打擊，共 3
        次可將目標擊退。
        <br />
        <br />
        【敵方戰鬥回合】攻擊(COIN)
        <br /> I → <br />
        ［蝦次一定］(DICE50-100)
        <br /> P / 特殊骰 → <br />
        ［鰲甲衝擊］(DICE50-100)+10，被擊中的船隻於 下回合開始 持續 3
        回合[負面效果-破損]，每次－10點耐久。
      </p>
    ),
    shrimpAngry: (
      <p className={ruleState ? "" : "hidden"}>
        雙方採用船戰規則。攻擊敵方時可以黑鋼砲攻擊當作弱點打擊，共 3
        次可將目標擊退。
        <br />※ 因強烈的憤恨，第一次血量歸零時將會留有 1 點血量。
        <br />
        <br />
        【敵方戰鬥回合】攻擊(COIN)
        <br /> I → <br />
        ［蝦次一定］(DICE80-100)
        <br /> P / 特殊骰 → <br />
        ［鰲甲衝擊］(DICE80-100)+20，被擊中的船隻於 下回合開始 持續 3
        回合[負面效果-破損]，每次－10點耐久。
      </p>
    ),
    nameless: (
      <p className={ruleState ? "" : "hidden"}>
        雙方採用船戰規則。攻擊敵方時可以黑鋼砲攻擊當作弱點打擊，共 5
        次可將目標擊退。
        <br /> ※ 因強烈的憤恨，第一次血量歸零時將會留有 1 點血量。
        <br />
        <br />
        【敵方戰鬥回合】
        <br /> 奇數回：攻擊(COIN) <br />I → <br />
        ［穿刺晶體］(DICE80-120) <br />P / 特殊骰 →<br />
        ［遍布藍霧］(DICE100-120)+20，被擊中的船隻於 下回合開始 持續 3
        回合[負面效果-腐蝕]，每次－10點耐久。
        <br />
        偶數回：增益(COIN)＋目標(DICE1-人數) <br />I →<br />
        ［加速癒合］恢復(DICE50-100)點血量。
        <br /> P / 特殊骰 →<br />
        ［多重震波］所有角色進行速度擲骰，低於20者受落石攻擊，立即－50點血量，並且下回合暫停行動
        1 次。
      </p>
    ),
  };

  const loseText = {
    crab: (
      <>
        你們珍愛的船隻在海怪如金屬般堅硬的巨螯下如同脆弱的蝦餅，在一次次衝擊下成了一堆無用的碎塊，一路駛來見到的殘骸預兆著你們的命運。
        <br />
        落入水面時你感受到了異樣的溫暖，液體輕柔地包覆著你的軀體，細碎的疼痛從指尖攀上，又迅速轉為溫順的撫摸。低沉的頻率是悠長的鳴唱，映入眼底的是成片湛藍的星空，在波紋擾動下暈開又凝和，無法形容的安心和寧靜吞噬了你，像是你從最初便是為此而存在。
        <br />
        <br />
        旅程就此蟹幕，下台一鞠躬。
      </>
    ),
    crabAngry: (
      <>
        你們珍愛的船隻在海怪如金屬般堅硬的巨螯下如同脆弱的蝦餅，在一次次衝擊下成了一堆無用的碎塊，一路駛來見到的殘骸預兆著你們的命運。
        <br />
        落入水面時你感受到了異樣的溫暖，液體輕柔地包覆著你的軀體，細碎的疼痛從指尖攀上，又迅速轉為溫順的撫摸。低沉的頻率是悠長的鳴唱，映入眼底的是成片湛藍的星空，在波紋擾動下暈開又凝和，無法形容的安心和寧靜吞噬了你，像是你從最初便是為此而存在。
        <br />
        <br />
        旅程就此蟹幕，下台一鞠躬。
      </>
    ),
    shrimp: (
      <>
        在巨大怪物的圍攻下，還有什麼能留下呢？你們海上溫馨的甜蜜小家就這樣被沒有思考能力的海鮮拆成木片，墜入水面時你突然懷念起冰冷刺骨的漆黑海水，那裡才該是你的歸處——嗎？
        <br />
        映著點點藍色螢光的溫暖液體親吻著每吋肌膚，綿長的低頻吟唱訴說著滿心喜悅的歡迎，難以言喻的安穩填滿了你，溢出的淚水被溫柔地接住，噓——靜靜地睡吧，你不知道比這更好的結局了。
        <br />
        <br />
        旅程就此謝幕，蝦台一鞠躬。
      </>
    ),
    shrimpAngry: (
      <>
        在巨大怪物的圍攻下，還有什麼能留下呢？你們海上溫馨的甜蜜小家就這樣被沒有思考能力的海鮮拆成木片，墜入水面時你突然懷念起冰冷刺骨的漆黑海水，那裡才該是你的歸處——嗎？
        <br />
        映著點點藍色螢光的溫暖液體親吻著每吋肌膚，綿長的低頻吟唱訴說著滿心喜悅的歡迎，難以言喻的安穩填滿了你，溢出的淚水被溫柔地接住，噓——靜靜地睡吧，你不知道比這更好的結局了。
        <br />
        <br />
        旅程就此謝幕，蝦台一鞠躬。
      </>
    ),
    nameless: (
      <>
        那怪物在一次次重組中失去了形體，逐漸變成一團不規則的肉塊，脹起腫瘤般的醜陋塊狀，數道帶著惡臭的體液從中噴出，只有那對湛藍的眼睛一成不變，平靜到令人毛骨悚然，宛如深淵般凝望著來客，吞噬一切敢於直面牠的愚勇者。
        <br />
        你看著那笨重的軀體朝你們挪動，肉團蠕動著包覆向無力逃脫的船隻，一點一點的啃蝕掉你們最好的夥伴和逃出這裡的微弱希望，恍惚中你又意識到了那道始終存在的低沉頻率，溫柔而和緩，不知為何你感到了安慰，一聲嘶啞的哀嘆輕飄飄地停滯在你的腦海。
        <br />
        <br />
        潘尼達絲輕拍了下你的肩膀。
      </>
    ),
  };

  const item = {
    crab: {
      uncrystal: 400,
      crystal: 0,
      bronze: 0,
      sliver: 10,
      gold: 0,
      item: [
        ["堅硬蟹螯 x4", ""],
        ["石化鯨礦 x5", ""],
        [
          "鋸緣指虎 x2 -",
          "［武器］欄位裝備後，攻擊骰 額外＋80。下回合攻擊骰 再 額外＋20(至多疊加至＋40)。",
        ],
        ["-", ""],
      ],
    },
    crabAngry: {
      uncrystal: 650,
      crystal: 0,
      bronze: 0,
      sliver: 10,
      gold: 0,
      item: [
        ["堅硬蟹螯 x4", ""],
        ["石化鯨礦 x5"],
        [
          "鋸緣指虎 x2 -",
          "［武器］欄位裝備後，攻擊骰 額外＋80。下回合攻擊骰 再 額外＋20(至多疊加至＋40)。",
        ],
        [
          "閃爍藍光的堅硬甲殼 x4 - ",
          "可用於 官方鍛造噗，消耗 1 個可鍛造裝備 1 次。",
        ],
        ["-", ""],
      ],
    },
    shrimp: {
      uncrystal: 400,
      crystal: 0,
      bronze: 0,
      sliver: 10,
      gold: 0,
      item: [
        ["結晶化的眼球 x8", ""],
        ["石化鯨礦 x5", ""],
        [
          "刺脊長棍 x2 - ",
          "［武器］欄位裝備後，攻擊骰 額外＋70。下回合攻擊骰 再 額外＋30(至多疊加至＋60)。",
        ],
        ["-", ""],
      ],
    },
    shrimpAngry: {
      uncrystal: 650,
      crystal: 0,
      bronze: 0,
      sliver: 10,
      gold: 0,
      item: [
        ["結晶化的眼球 x8", ""],
        ["石化鯨礦 x5", ""],
        [
          "刺脊長棍 x2 - ",
          "［武器］欄位裝備後，攻擊骰 額外＋70。下回合攻擊骰 再 額外＋30(至多疊加至＋60)。",
        ],
        [
          "閃爍藍光的堅硬甲殼 x4 - ",
          "可用於 官方鍛造噗，消耗 1 個可鍛造裝備 1 次。",
        ],
        ["-", ""],
      ],
    },
    nameless: {
      uncrystal: 2500,
      crystal: 0,
      bronze: 0,
      sliver: 0,
      gold: 0,
      item: [
        ["傑拉爾德的畫像 x1", ""],
        ["密醫手稿 x1 - ", "持有後，可在使用 基礎醫療包 時額外恢復 30點血量。"],
        [
          "變異巨鯨油脂 x1 - ",
          "外型乳白偏黃，香氣四溢，可以向藍晶船廠兌換［不滅明燈］。",
        ],
        [
          "[索羅爾群島仲裁者]  x1 - ",
          "可依照圖紙自行合成，外觀自訂。需求部件：[索羅爾群島仲裁者] 部件A、[索羅爾群島仲裁者] 部件B。［武器］欄位裝備後，攻擊骰 額外＋100。下回合攻擊骰 再 額外＋10(至多疊加至＋40)。",
        ],
        [
          "海貓(寵物) - ",
          "傳說中能為船隻帶來幸運的生物，事實上只是個晚上很愛叫的有璞小貓。每次事件/活動能使喚 1 次，可以擲 3 次獎勵骰，擇一當做結果。",
        ],
        ["-", ""],
      ],
    },
  };

  const [btn1, btn2] = btnText[monster];
  const { hp, speed } = monsterState[monster];
  const block = {
    dispaly: "block",
  };
  const flex = {
    dispaly: "flex",
  };
  return (
    <section
      className={battleState ? "battle" : "hidden"}
      style={windowState ? flex : block}
    >
      <div className={!battleEnd ? "container" : "hidden"}>
        <img src={UiDown} alt="" className="battle-ui" />
        <p className="hp">{hp}</p>
        <p className="speed">{speed}</p>
        <p className="battle-name">{monsterName[monster]}</p>
        <img src={monsterType[monster]} alt="" className={monster} />
        {battleType === "human" ? (
          <img src={human} alt="" className="battle-human" />
        ) : (
          <img src={ship} alt="" className="battle-ship" />
        )}
        <img src={UiUp} alt="" className="battle-ui down" />
        <img src={frame} alt="" className="battle-rule" />
        <div className="rule">
          {battleText[monster]}
          {ruleText[monster]}
        </div>
        <button
          className="btn"
          onClick={() => {
            showrule(false);
            dispatch(setBattleState());
            dispatch(setItem(item[monster].item));
            dispatch(setCrystal(item[monster].crystal));
            dispatch(setUncrystal(item[monster].uncrystal));
            dispatch(setGold(item[monster].gold));
            dispatch(setSliver(item[monster].sliver));
            dispatch(setBronze(item[monster].bronze));
          }}
        >
          <p>{btn1}</p>
        </button>
        <button
          className="btn down"
          onClick={() => {
            showrule(false);
            showAfterBattle(true);
          }}
        >
          <p>{btn2}</p>
        </button>
      </div>
      <div className={battleEnd ? "lose" : "hidden"}>
        <img src={loseFrame} alt="" className="lose-frame" />
        <h2>{btn2}</h2>
        <img src={lose} alt="" className="lose-boat" />
        <p className="text">{loseText[monster]}</p>
        <div className="lose-btn">
          <a
            href="https://geraldseyeball.wixsite.com/geraldseyeball/有償復活"
            className="dead"
          >
            <img src={loseBtn} alt="" />
            <p>死亡</p>
          </a>
        </div>
      </div>
    </section>
  );
}
export default BattleScene;
