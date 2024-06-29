import { useDispatch } from "react-redux";
import { setBattleState, setMonster } from "../../redux/stateSlice/stateSlice";
import { addLog } from "../../redux/logSlice/logSlice";

const data = {
  shrimp: [
    "老問題，你有惹惱甲殼類海鮮嗎？",
    ">[無]",
    "戰鬥！遭遇了4隻【變異的刺脊岩龍蝦】，請確保為每隻海怪進行擲骰。",
    "-",
  ],
  shrimpAngry: [
    "老問題，你有惹惱甲殼類海鮮嗎？",
    ">[有]",
    "戰鬥！遭遇了4隻【怨懟的 變異的刺脊岩龍蝦】，請確保為每隻海怪進行擲骰。",
    "-",
  ],
};

function ShrimpType({ shrimpTypeState, showShrimpType }) {
  const dispatch = useDispatch();

  const style = { opacity: 0.5, color: "#fff" };

  return (
    <section className={shrimpTypeState ? "crab-type" : "hidden"}>
      <p className="text">
        老問題，你有惹惱甲殼類海鮮嗎？
        <br />
        <span style={style}>
          (※請自行設定是否有食用過，只要一位船員吃過即為有。)
        </span>
        <br />
        <span
          className="hint"
          onClick={() => {
            showShrimpType(false);
            dispatch(setMonster("shrimpAngry"));
            dispatch(addLog(data.shrimpAngry));
            dispatch(setBattleState());
          }}
        >
          ［有］
        </span>
        <span
          className="hint"
          onClick={() => {
            showShrimpType(false);
            dispatch(setMonster("shrimp"));
            dispatch(addLog(data.shrimp));
            dispatch(setBattleState());
          }}
        >
          ［無］
        </span>
      </p>
    </section>
  );
}

export default ShrimpType;
