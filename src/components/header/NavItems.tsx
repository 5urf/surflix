import { motion } from "framer-motion";
import { NavLink } from "react-router";
import styled from "styled-components";
import LogoIcon from "../../assets/LogoIcon";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled(motion.p)<{ isActive: boolean }>`
  color: ${({ isActive, theme }) =>
    isActive ? theme.activePrimary : theme.headerTextPrimary};

  transition: color 0.4s;

  ${({ isActive, theme }) =>
    !isActive &&
    `
    &:hover {
      color: ${theme.activePrimary};
    }
  `}
`;

const NavItems = () => {
  return (
    <Container>
      <LogoIcon />
      <Items>
        <Item>
          <NavLink
            to='/'
            children={({ isActive }) => <Text isActive={isActive}>Home</Text>}
          />
        </Item>
        <Item>
          <NavLink
            to='coming-soon'
            children={({ isActive }) => (
              <Text isActive={isActive}>COMING SOON</Text>
            )}
          />
        </Item>
        <Item>
          <NavLink
            to='now-playing'
            children={({ isActive }) => (
              <Text isActive={isActive}>NOW PLAYING</Text>
            )}
          />
        </Item>
      </Items>
    </Container>
  );
};

export default NavItems;
