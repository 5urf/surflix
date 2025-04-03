import styled from "styled-components";

export const Svg = styled.svg`
  width: 3rem;
  fill: ${({ theme }) => theme.iconPrimary};

  path {
    fill: ${({ theme }) => theme.iconPrimary || "currentColor"};
  }
`;
