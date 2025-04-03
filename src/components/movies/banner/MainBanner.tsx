import styled from "styled-components";
import { makeImagePath } from "../../../utils/imgUtil";
import InfoBtn from "./InfoBtn";

const Banner = styled.div<{ $bgPhoto: string }>`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 6rem 6rem;
  position: relative;
  background-image: url(${(props) => props.$bgPhoto});
  background-size: cover;
  background-position: center top;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(18, 18, 18, 0.3) 50%,
      rgba(18, 18, 18, 0.8) 80%,
      rgba(18, 18, 18, 1) 100%
    );
    pointer-events: none;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 50%;
`;

const Title = styled.h2`
  font-size: 6.4rem;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

const Overview = styled.p`
  font-size: 2rem;
  width: 100%;
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.textSecondary};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.3;
`;

interface IMainBannerProps {
  backdropPath: string;
  title: string;
  overview: string;
}

const MainBanner = ({ backdropPath, title, overview }: IMainBannerProps) => {
  return (
    <Banner $bgPhoto={makeImagePath(backdropPath)}>
      <Content>
        <Title>{title}</Title>
        <Overview>{overview}</Overview>
        <InfoBtn />
      </Content>
    </Banner>
  );
};

export default MainBanner;
