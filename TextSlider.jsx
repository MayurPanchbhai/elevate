import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

const TextSlider = ({ text }) => {
  const [scrollY, setScrollY] = useState(0);

  // Scroll event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const font = {fontSize:"91px"}

  // Use scroll position to control the translation with a duration config
  const scrolling = useSpring({
    transform: `translate(${100 - (scrollY / window.innerHeight) * 180}%, 0)`,
    config: { duration: 250 }, // 5 seconds duration
  });

  return (
    <div
      style={{ overflow: "hidden", whiteSpace: "nowrap", textShadow: "20px 15px 6px black" ,fontSize:"91px" } }
      className="w-full h-[90%] shadow-xl hidden md:flex shadow-white"
    >
      <animated.div style={scrolling } >
        {text}
      </animated.div>
    </div>
  );
};

export default TextSlider;
