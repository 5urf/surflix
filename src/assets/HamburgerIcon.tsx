import styled from "styled-components";

const Svg = styled.svg`
  width: 2.4rem;
  height: 2.4rem;
  stroke: ${({ theme }) => theme.iconPrimary};
  stroke-width: 2.5;
  stroke-linecap: round;
`;

const HamburgerIcon = () => {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <line x1='2' y1='6' x2='22' y2='6' />
      <line x1='2' y1='12' x2='22' y2='12' />
      <line x1='2' y1='18' x2='22' y2='18' />
    </Svg>
  );
};

export default HamburgerIcon;
