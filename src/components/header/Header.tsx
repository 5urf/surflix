import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";
import styled from "styled-components";
import DarkModeSwitch from "./DarkModeSwitch";
import NavItems from "./NavItems";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 1.5rem 6rem;
  color: white;
  z-index: 100;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    pointer-events: none;
    z-index: -1;
  }
`;

const navVariants: Variants = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,9)",
    transition: {
      duration: 0.3,
      type: "tween",
    },
  },
};

const Header = () => {
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 80) navAnimation.start("scroll");
    else navAnimation.start("top");
  });

  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
      <NavItems />
      <DarkModeSwitch />
    </Nav>
  );
};

export default Header;
