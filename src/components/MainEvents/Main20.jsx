import { useEffect, useRef, useState } from "react";
import btnImg from "/UI/btn_sen_normal.png";
import { useDispatch } from "react-redux";
import { addLog } from "../../../redux/logSlice/logSlice";
import { useNavigate } from "react-router-dom";

const data = [
  "意識沉在朦朧的海中，在黑暗襲來的前一刻，巨大的拉力將靈魂和軀殼一同向下拉扯，你撿回了掙扎的方式。無法掙脫的水流抓住了四肢，你在窒息的黑暗裡墜落。",
  "耀眼的光線和新鮮的空氣一同嗆入，你感受到身體脫離了水的包覆，隨著慣性飛翔，清爽的風拉回了神智。",
  "湛藍的天際對適應昏暗的眼睛來說過於眩目，那個彷彿不該存在於世的龐大身影映在你模糊的視線裡，那隻把你們當小蝦米吞的怪物高高揚起的尾鰭正對著這個方向，那道從牠接近腹部位置噴射而出的水柱顯然就是讓你們重回天空之下的逃生出口，你和一堆被牠胡亂吞下的怪東西一起在海面上形成漂亮的拋物線。",
  "失重感襲來時你看到你們可憐兮兮的船先一步落下，乘著速度和浮力在在海面上俏皮地彈了幾下，旗幟在風中飄揚，殘破的零件隨著衝擊灑落，你有預感船廠的老頭又要扯著你們的耳朵大罵不珍惜再狠狠薛你們一筆。",
  "好吧，無論如何，能離開那個鬼地方真是太他媽的好了，你看著漸遠的巨大身影緩緩沒入水中，留下一道瑩藍的軌跡在海面擴散，等著落入海面的衝擊襲來。",
];
const dataLog = [...data, "-"];

function Main20() {
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
      {data.map((el, i) => (
        <p
          className={textState > i - 1 ? "text" : "hidden"}
          key={i}
          onAnimationEnd={showText}
        >
          {el}
        </p>
      ))}
      <button
        className={textState > 4 ? "btn main-btn" : "hidden"}
        onClick={() => {
          dispatch(addLog(dataLog));
          navigate("/end");
        }}
      >
        <img src={btnImg} alt="" />
        <p>返航</p>
      </button>
      <div ref={ref}></div>
    </div>
  );
}

export default Main20;
