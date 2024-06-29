import logBtnImg from "/UI/logbtn_normal.png";
import logBtnImgBlood from "/UI/logbtn_blood.png";
import logBtnImgOff from "/UI/logbtn_off.png";
import logBtnImgBW from "/UI/logbtn_BW.png";

import itemBtn from "/UI/item/treasure-400-normal.png";
import itemBtnBlood from "/UI/item/treasure-400-blood.png";
import itemBtnBw from "/UI/item/treasure-400-bw.png";
import itemBtnOff from "/UI/item/treasure-400-off.png";
import { useSelector } from "react-redux";

function SideBtn({ showLog, showItem }) {
  const mainState = useSelector((state) => state.state.main);
  return (
    <div className="btn-list">
      <button className="btn log-btn" onClick={showLog}>
        <img
          src={
            mainState === "normal"
              ? logBtnImg
              : mainState === "off"
              ? logBtnImgOff
              : mainState === "dark"
              ? logBtnImgBW
              : logBtnImgBlood
          }
          alt=""
        />
      </button>
      <button
        className="btn log-btn"
        onClick={() => {
          showItem(true);
        }}
      >
        <img
          src={
            mainState === "normal"
              ? itemBtn
              : mainState === "off"
              ? itemBtnOff
              : mainState === "dark"
              ? itemBtnBw
              : itemBtnBlood
          }
          alt=""
        />
      </button>
    </div>
  );
}
export default SideBtn;
