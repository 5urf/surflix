import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import { useThemeStore } from "../../../store/themeStore";
import { makeImagePath } from "../../../utils/imgUtil";
import InfoBtn from "./InfoBtn";

const Banner = styled.div<{ $bgPhoto: string; $isDark: boolean }>`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 6rem 6rem;
  position: relative;
  background-image: url(${(props) => props.$bgPhoto});
  background-size: cover;
  background-position: center top;

  @media (max-width: 768px) {
    height: 50vh;
    padding: 0 2rem 2rem;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60%;
    background: ${({ theme }) => theme.bannerGradientPrimary};
    pointer-events: none;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 6.4rem;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Overview = styled.p`
  font-size: 2rem;
  width: 100%;
  margin-bottom: 2.4rem;
  color: ${({ theme }) => theme.textSecondary};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
`;

interface IMainBannerProps {
  firstMovie: Movie.Movie;
}

const MainBanner = ({
  firstMovie: { title, overview, id, backdrop_path },
}: IMainBannerProps) => {
  const { isDarkMode } = useThemeStore(
    useShallow((state) => ({
      isDarkMode: state.isDarkMode,
    }))
  );

  return (
    <Banner $bgPhoto={makeImagePath(backdrop_path)} $isDark={isDarkMode}>
      <Content>
        <Title>{title}</Title>
        <Overview>{overview}</Overview>
        <InfoBtn movieId={id} />
      </Content>
    </Banner>
  );
};

export default MainBanner;
