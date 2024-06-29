import { useDispatch, useSelector } from "react-redux";
import { ShakeLittle } from "reshake";
import {
  setBloodState,
  setImage,
  setMainState,
} from "../../redux/stateSlice/stateSlice";

function BloodScene({ showMain3Btn }) {
  const isShow = useSelector((state) => state.state.blood);
  const dispatch = useDispatch();
  const shakeTextStyle = {
    fontFamily: "Cubic11",
    display: "inline-block",
    color: "#fff",
  };
  const style = {
    opacity: 0.5,
  };
  return (
    <section
      className={isShow ? "blood" : "hidden"}
      onClick={() => {
        dispatch(setBloodState());
        dispatch(setMainState("blood"));
        showMain3Btn(true);
        dispatch(setImage(5));
      }}
    >
      <div>
        <p>噗，很輕巧的一聲破裂，深紅色的煙火綻放了。</p>
        <div>
          <ShakeLittle fixed={true} style={shakeTextStyle}>
            碎肉
          </ShakeLittle>
          <span>、</span>
          <ShakeLittle fixed={true} style={shakeTextStyle}>
            內臟
          </ShakeLittle>
          <span>、</span>
          <ShakeLittle fixed={true} style={shakeTextStyle}>
            骨塊
          </ShakeLittle>
        </div>
        <p>
          像是精心設計的驚喜，連鎖反應似的一個接著一個，血肉組成的煙火大會開始了。
          <br />
          爆炸的力度讓船身不住擺盪，所有能從體內掏出的東西伴隨著震耳欲聾的聲響奮力噴發，為它們唯一的觀眾演示了生命最後的燦爛，漫天的血雨朝你們落下。
        </p>
        <p style={style}>(點擊繼續)</p>
      </div>
    </section>
  );
}
export default BloodScene;
