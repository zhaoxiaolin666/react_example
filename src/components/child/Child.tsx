import React, { useState, useRef, useEffect, FC } from "react";
import "./index.css";
interface Porps {
  num: number;
  send: (msg: string) => void;
}
const Child: FC<Porps> = (porps) => {
  let [msg] = useState<string>("我是子组件的值");
  let send = () => {
    porps.send(msg);
  };
  let dvRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    console.log(dvRef.current);
    return () => {};
    //数组参数传入变化的值，必须传入一个数组
  }, []);
  return (
    <div>
      <div className="box"> 我是父组件传过来的值:{porps.num}</div>
      <div>{msg}</div>
      <div>
        <button onClick={send}>传值给父组件</button>
      </div>
      <div ref={dvRef}>123</div>
      <div style={{ color: "skyblue" }}>{porps.children}</div>
    </div>
  );
};

export default Child;
