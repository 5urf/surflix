import styled from "styled-components";
import { makeImagePath } from "../../utils/imgUtil";
import InfoBtn from "./InfoBtn";

const Banner = styled.div<{ $bgPhoto: string }>`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 6rem 6rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.$bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 6.4rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const Overview = styled.p`
  font-size: 2.5rem;
  width: 70%;
  color: ${({ theme }) => theme.textSecondary};
`;

interface IMainBannerProps {
  backdropPath: string;
  title: string;
  overview: string;
}

const MainBanner = ({ backdropPath, title, overview }: IMainBannerProps) => {
  return (
    <Banner $bgPhoto={makeImagePath(backdropPath)}>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
      <InfoBtn />
    </Banner>
  );
};

export default MainBanner;
