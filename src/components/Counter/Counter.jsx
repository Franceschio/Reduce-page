import { useState, useContext, createContext } from "react";
import "./index.css";
import { CounterContext } from "../../utils/reducer";

// const Counter = () => {
//   const [num, setNum] = useState(0);

//   const changeNum = (e) => {
//     if (e.target.className === "inc") {
//       setNum((prev) => prev + 1);
//     } else {
//       setNum((prev) => prev - 1);
//     }
//   };

//   return (
//     <div className="Counter">
//       <div className="dec" onClick={changeNum}>
//         {"-"}
//       </div>
//       <div className="num">{num}</div>
//       <div className="inc" onClick={changeNum}>
//         {"+"}
//       </div>
//     </div>
//   );
// };

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  const onHandleClick = (e) => dispatch({ type: e.target.className });

  return (
    <div className="Counter">
      <div className="dec" onClick={onHandleClick}>
        -
      </div>
      <div className="num">{state.value}</div>
      <div className="inc" onClick={onHandleClick}>
        +
      </div>
      <button className="reset" onClick={onHandleClick}>
        reset
      </button>
    </div>
  );
};

export default Counter;
