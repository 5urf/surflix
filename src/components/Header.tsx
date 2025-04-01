import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";
import { useState } from "react";
import { Link, useMatch } from "react-router";
import styled from "styled-components";
import LogoIcon from "../assets/LogoIcon";
import SearchIcon from "../assets/SearchIcon";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;
const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  color: #e5e5e5;
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: #fff;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: red;
`;

const Search = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  svg {
    height: 25px;
  }
`;

const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  right: 0px;
  padding: 5px 10px;
  padding-left: 40px;
  z-index: -1;
  color: white;
  font-size: 16px;
  background-color: transparent;
  border: 1px solid #fff;
`;

const navVariants: Variants = {
  top: { backgroundColor: "rgba(0,0,0,1)" },
  scroll: { backgroundColor: "rgba(0,0,0,0)" },
};

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const homeMatch = useMatch("/");
  const commingMatch = useMatch("/coming-soon");
  const nowMatch = useMatch("/now-playing");
  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y > 80) navAnimation.start("scroll");
    else navAnimation.start("top");
  });

  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
      <Col>
        <LogoIcon />
        <Items>
          <Item>
            <Link to={"/"}>
              Home{homeMatch && <Circle layoutId='circle' />}
            </Link>
          </Item>
          <Item>
            <Link to={"coming-soon"}>
              COMING SOON
              {commingMatch && <Circle layoutId='circle' />}
            </Link>
          </Item>
          <Item>
            <Link to={"now-playing"}>
              NOW PLAYING
              {nowMatch && <Circle layoutId='circle' />}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Search>
          <SearchIcon onClick={toggleSearch} searchOpen={searchOpen} />
          <Input
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
            transition={{ ease: "linear" }}
            placeholder='Search for movie or tv show...'
          />
        </Search>
      </Col>
    </Nav>
  );
};

export default Header;
