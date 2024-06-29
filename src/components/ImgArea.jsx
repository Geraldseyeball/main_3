//btn-style
import btnBg from "/UI/btn_sen_normal.png";
import btnBgBlood from "/UI/btn_sen_blood.png";
import btnBgOff from "/UI/btn_sen_off.png";
import btnBgDark from "/UI/btn_sen_BW.png";
//main-scene
import mainImg1 from "/EP3/3-1.png";
import mainImg2_1 from "/EP3/3-2-1.png";
import mainImg2_2 from "/EP3/3-2-2.png";
import mainImg2_3 from "/EP3/3-2-3.png";
import mainImg3_1 from "/EP3/3-3.png";
import mainImg3_2 from "/EP3/3-3-1.png";
import mainImg5 from "/EP3/3-5.png";
import mainImg6 from "/EP3/3-6.png";
import mainImgFrame from "/UI/imgFrame-BW.png";
import mainImgFrameOff from "/UI/imgFrame-off.png";
import mainImg7 from "/EP3/3-7.gif";
import mainImg8 from "/EP3/3-8OFF.gif";
import mainImg9_1 from "/EP3/3-8.png";
import mainImg9_2 from "/EP3/3-9.png";
import mainImg10 from "/EP3/3-10.png";
import mainImg12 from "/EP3/3-12.png";
import mainImg15 from "/EP3/3-15.png";
import mainImg16 from "/EP3/3-16.png";
import mainImg17 from "/EP3/3-17.png";
import mainImg20 from "/EP3/3-20.png";
import { useSelector } from "react-redux";

const imgList = [
  mainImg1,
  mainImg2_1,
  mainImg2_2,
  mainImg2_3,
  mainImg3_1,
  mainImg3_2,
  mainImg5,
  mainImg6,
  mainImgFrame,
  mainImg7,
  mainImg8,
  mainImg9_1,
  mainImg9_2,
  mainImg10,
  mainImg12,
  mainImg15,
  mainImg16,
  mainImg17,
  mainImg20,
  mainImgFrameOff,
];
function ImgArea() {
  const mainState = useSelector((state) => state.state.main);
  const imgState = useSelector((state) => state.state.image);
  const currentImg = imgList.filter((_, i) => i === imgState);
  return (
    <div className="img-area">
      <img src={currentImg[0]} alt="" className="sence" />
      <div className="btn-group">
        <a href="#" className="btn">
          <img
            src={
              mainState === "normal"
                ? btnBg
                : mainState === "off"
                ? btnBgOff
                : mainState === "dark"
                ? btnBgDark
                : btnBgBlood
            }
            alt=""
          />
          <p>本次注意事項</p>
        </a>
        <a
          href="https://geraldseyeball.wixsite.com/geraldseyeball/戰鬥規則"
          className="btn"
          target="_blank"
        >
          <img
            src={
              mainState === "normal"
                ? btnBg
                : mainState === "off"
                ? btnBgOff
                : mainState === "dark"
                ? btnBgDark
                : btnBgBlood
            }
            alt=""
          />
          <p>戰鬥規則</p>
        </a>
        <a
          href="https://geraldseyeball.wixsite.com/geraldseyeball/問與答"
          className="btn"
          target="_blank"
        >
          <img
            src={
              mainState === "normal"
                ? btnBg
                : mainState === "off"
                ? btnBgOff
                : mainState === "dark"
                ? btnBgDark
                : btnBgBlood
            }
            alt=""
          />
          <p>Q&A</p>
        </a>
        <a
          href="https://www.plurk.com/GeraldsEyeball"
          className="btn"
          target="_blank"
        >
          <img
            src={
              mainState === "normal"
                ? btnBg
                : mainState === "off"
                ? btnBgOff
                : mainState === "dark"
                ? btnBgDark
                : btnBgBlood
            }
            alt=""
          />
          <p>官方噗浪</p>
        </a>
      </div>
    </div>
  );
}
export default ImgArea;
