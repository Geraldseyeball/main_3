import { useSelector } from "react-redux";
import closeIcon from "/UI/cross.png";

function LogArea({ logAreaState, showLog }) {
  const log = useSelector((state) => state.log.log);
  return (
    <div className={logAreaState ? "log" : "hidden"}>
      <button className="close" onClick={showLog}>
        <img src={closeIcon} alt="" />
      </button>
      <div>
        {log.map((el, i) => (
          <p key={i}>{el}</p>
        ))}
      </div>
    </div>
  );
}
export default LogArea;
