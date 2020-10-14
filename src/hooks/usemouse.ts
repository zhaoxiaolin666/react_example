import React,{useEffect,useState} from 'react';
export const useMouse = () => {
    let [x,setx]=useState<number>(0)
    let [y,sety]=useState<number>(0)
    const move = (e: MouseEvent) => {
        setx(e.pageX);
        sety(e.pageY);
    };
    useEffect(() => {
      window.addEventListener("mousemove", move);
      return(()=>{
        window.removeEventListener("mousemove", move);
      })
    });
    return { x, y };
  };