import { useSelector } from "react-redux";
import btnImg from "/UI/btn_sen_normal.png";

function End() {
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

  const style = { opacity: 0.5 };

  return (
    <div className="text-box">
      <p className="text">
        嘿！在返航的途中，你們最好清點下獲得的財寶們，天曉得在剛才衝擊中有沒有落下一些？
      </p>
      <p className="text bold">[個人戰利品]</p>
      <p className="text">
        {pCrystal > 0 && (
          <>
            未打磨的藍晶 x{pCrystal}
            <br />
          </>
        )}
        財產 - {pGold > 0 && `${pGold}金`}
        {pSliver > 0 && `${pSliver}銀`}
        <br />
        {pItem && pItem[0]}
        <br />
      </p>
      <p className="text bold">[船隊戰利品]</p>
      <p className="text">
        {crystal > 0 && (
          <>
            藍晶 x{crystal}
            <br />
          </>
        )}
        {uncrystal > 0 && (
          <>
            未打磨的藍晶 x{uncrystal}
            <br />
          </>
        )}
        財產 - {gold > 0 && `${gold}金`}
        {sliver > 0 && `${sliver}銀`}
        {bronze > 0 && `${bronze}銅`}
        <br />
        {itemList.map((el) => (
          <>
            {el[0]}
            <span style={style}>{el[1]}</span>
            <br />
          </>
        ))}
      </p>
      <a
        href="https://geraldseyeball.wixsite.com/geraldseyeball/世界設定"
        className="btn main-btn"
      >
        <img src={btnImg} alt="" />
        <p>結束</p>
      </a>
    </div>
  );
}

export default End;
