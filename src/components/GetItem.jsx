import { useSelector } from "react-redux";
import closeIcon from "/UI/cross.png";

function GetItem({ itemState, showItem }) {
  const itemList = useSelector((state) => state.item.item);
  const crystal = useSelector((state) => state.item.crystal);
  const uncrystal = useSelector((state) => state.item.uncrystal);
  const gold = useSelector((state) => state.item.gold);
  const sliver = useSelector((state) => state.item.sliver);
  const bronze = useSelector((state) => state.item.bronze);
  const pCrystal = useSelector((state) => state.item.pCrystal);
  const pGold = useSelector((state) => state.item.pGold);
  const pSliver = useSelector((state) => state.item.pSliver);
  const pItem = useSelector((state) => state.item.pItem);

  const style = { color: "#babe7c", opacity: "0.5" };

  const bold = { "font-weight": "700" };

  return (
    <div className={itemState ? "item" : "hidden"}>
      <button
        className="close"
        onClick={() => {
          showItem(false);
        }}
      >
        <img src={closeIcon} alt="" />
      </button>
      <ul>
        <li style={bold}>[個人獎勵]</li>
        {pCrystal > 0 && <li>未打磨的藍晶 x{pCrystal}</li>}
        <li>
          {pGold != 0 || pSliver != 0
            ? `錢財 - ${pGold > 0 ? `${pGold}金` : ""} ${
                pSliver > 0 ? `${pSliver}銀` : ""
              }`
            : ""}
        </li>
        {pItem.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
        <li style={bold}>[船隊獎勵]</li>
        {crystal > 0 && <li>藍晶 x{crystal}</li>}
        {uncrystal > 0 && <li>未打磨的藍晶 x{uncrystal}</li>}
        <li>
          {gold != 0 || sliver != 0 || bronze != 0
            ? `錢財 - ${gold > 0 ? `${gold}金 ` : ""}
          ${sliver > 0 ? `${sliver}銀 ` : ""}
          ${bronze > 0 ? `${bronze}銅` : ""}`
            : ""}
        </li>
        {itemList.map((arr, i) => (
          <li key={i}>
            {arr[0]}
            <span style={style}>{arr[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GetItem;
