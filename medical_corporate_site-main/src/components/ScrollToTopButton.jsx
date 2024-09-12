import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { IconButton } from "@chakra-ui/react";
import { MdArrowUpward } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          cursor: "pointer",
        }}
      >
        <IconButton
          icon={<MdArrowUpward size={"2em"} />}
          borderRadius="full"
          bg="customBlue.500" 
          color="white" 
        />
      </div>
    )
  );
};

export default ScrollToTopButton;
