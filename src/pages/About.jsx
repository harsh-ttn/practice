import React, {
  useContext,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "../actions";
import { CountContext } from "../contexts/countContext";

const About = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  const { count2, setCount2 } = useContext(CountContext);

  const [count3, setCount3] = useState(0);

  const titleRef = useRef();
  
  const addTitle = () => {
    titleRef.current.innerHTML = "Hello World";
    titleRef.current.style.color = "red";
    titleRef.current.style.backgroundColor = "black";
  };

  const DoubleMemo = useMemo(
    function Double() {
      console.log("Memo");
      return count3 * 2;
    },
    [count3]
  );

  const DoubleCallback = useCallback(() => {
    setCount3((p) => p * 2);
    console.log("Callback");
  }, [count3]);

  return (
    <>
      <h1>useMemo, useCallback</h1>
      <button onClick={() => setCount3((p) => p - 1)}>-</button>
      <p>{count3}</p>
      <button onClick={() => setCount3((p) => p + 1)}>+</button>
      <p>{DoubleMemo}</p>
      <button onClick={DoubleCallback}>Double</button>
      <h1>UseRef</h1>
      <p ref={titleRef}></p>
      <button onClick={addTitle}>Add Title</button>
      <h1>Redux</h1>
      <button onClick={() => dispatch(Decrement(5))}>-</button>
      <p>{count}</p>
      <button onClick={() => dispatch(Increment(5))}>+</button>
      <h1>Context</h1>
      <button onClick={() => setCount2((p) => p - 1)}>-</button>
      <p>{count2}</p>
      <button onClick={() => setCount2((p) => p + 1)}>+</button>
    </>
  );
};

export default About;
