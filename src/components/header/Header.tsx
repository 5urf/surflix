import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";
import styled from "styled-components";
import HamburgerIcon from "../../assets/HamburgerIcon";
import LogoIcon from "../../assets/LogoIcon";
import { useUIStore } from "../../store/uiStore";
import DarkModeSwitch from "./DarkModeSwitch";
import NavItems from "./NavItems";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: calc(100% - var(--scrollbar-width, 0px));
  top: 0;
  font-size: 1.4rem;
  padding: 1.5rem 6rem;
  z-index: 100;
  transition: background-color 0.3s ease-in-out;

  ${({ theme }) => theme.mobile} {
    padding: 1.5rem 2rem;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const DesktopNavWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 1.6rem;
  }
  ${({ theme }) => theme.mobile} {
    display: none;
  }
`;

const MobileNavWrapper = styled.div`
  display: none;
  ${({ theme }) => theme.mobile} {
    display: flex;
    align-items: center;
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const MenuPanel = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  max-width: 300px;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.95);
  backdrop-filter: blur(5px);
  padding: 8rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  z-index: 1000;
`;

const MobileNavItemsWrapper = styled.div`
  ul {
    flex-direction: column;
    gap: 2rem;
  }
  p {
    font-size: 1.8rem;
  }
`;

const navVariants: Variants = {
  top: { backgroundColor: "rgba(0,0,0,0)" },
  scroll: { backgroundColor: "rgba(0,0,0,0.9)" },
};

const overlayVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const menuPanelVariants: Variants = {
  initial: { x: "100%" },
  animate: { x: 0, transition: { type: "tween", duration: 0.3 } },
  exit: { x: "100%", transition: { type: "tween", duration: 0.3 } },
};

const Header = () => {
  const { isMenuOpen, toggleMenu } = useUIStore();
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 80) navAnimation.start("scroll");
    else navAnimation.start("top");
  });

  return (
    <>
      <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
        <HeaderContent>
          <Column>
            <LogoIcon />
            <DesktopNavWrapper>
              <NavItems />
            </DesktopNavWrapper>
          </Column>
          <Column>
            <DesktopNavWrapper>
              <DarkModeSwitch />
            </DesktopNavWrapper>
            <MobileNavWrapper>
              <HamburgerButton onClick={toggleMenu}>
                <HamburgerIcon />
              </HamburgerButton>
            </MobileNavWrapper>
          </Column>
        </HeaderContent>
      </Nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <Overlay
              onClick={toggleMenu}
              variants={overlayVariants}
              initial='initial'
              animate='animate'
              exit='exit'
            />
            <MenuPanel
              variants={menuPanelVariants}
              initial='initial'
              animate='animate'
              exit='exit'
            >
              <MobileNavItemsWrapper>
                <NavItems />
              </MobileNavItemsWrapper>
              <DarkModeSwitch />
            </MenuPanel>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
