// import data from "./teat.json"
// import Tag from "./tag";
import Realcard from "../../../Realcard";
import { useState, useRef } from "react";
// import gsap from "gsap";
// import Galdata from "../../../Collaction/Galdata";
// import carddata from "../../../Cardapi";
import "./Slid.css";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
// import { useEffect } from "react";
const Slide = (props) => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);
  var carddata=props.cat.filter((item)=>{
    return item.action==="Enable" &&
    item.status===true
  })
  
  

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  //Anim
  //   const anim = (e) => {
  //     gsap.from(e.target, { scale: 1 });
  //     gsap.to(e.target, { scale: 1.2 });
  //   };
  //   const anim2 = (e) => {
  //     gsap.from(e.target, { scale: 1.2 });
  //     gsap.to(e.target, { scale: 1 });
  //   };
  const getFilter = (a, b) => {
    if (!a) {
      return b;
    } else {
      return b.filter((item) => item.category.includes(a));
    }
  };
  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };
  const filterd = getFilter(props.Quary, carddata);
  return (
    <div className="App">
      {scrollX !== 0 && (
        <button
          className="prev"
          onClick={() => slide(-100)}
          //   onMouseEnter={(e) => anim(e)}
          //   onMouseLeave={(e) => anim2(e)}
        >
          <BsArrowLeftCircle size={40} />
        </button>
      )}
      <ul className="cat-slider" ref={scrl} onScroll={scrollCheck}>
        {filterd.map((val) => {
          return <Realcard key={val.id} cat={val.category}/>;
        })}
      </ul>
      {!scrolEnd && (
        <button
          className="next"
          onClick={() => slide(+100)}
          //   onMouseEnter={(e) => anim(e)}
          //   onMouseLeave={(e) => anim2(e)}
        >
          <BsArrowRightCircle size={40} />
        </button>
      )}
    </div>
  );
};
export default Slide;
