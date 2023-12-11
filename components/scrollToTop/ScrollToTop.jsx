import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTop = () => {
  const scrollTop = useRef();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  });



  return (
    <Link href="#gotoTop" className="scrollToTop" ref={scrollTop}>
      <i>
        <FaAngleDoubleUp />
      </i>
    </Link>
  );
};

export default ScrollToTop;
