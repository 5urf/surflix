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
  width: calc(100% - var(--scrollbar-width, 0px));
  top: 0;
  font-size: 14px;
  padding: 1.5rem 6rem;
  z-index: 100;
  transition: background-color 0.3s ease-in-out;

  ${({ theme }) => theme.mobile} {
    padding: 1.5rem 2rem;
    flex-direction: column;
    align-items: center;
  }

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

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.mobile} {
    flex-direction: column;
    gap: 1rem;
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
      <HeaderContent>
        <NavItems />
        <DarkModeSwitch />
      </HeaderContent>
    </Nav>
  );
};

export default Header;
