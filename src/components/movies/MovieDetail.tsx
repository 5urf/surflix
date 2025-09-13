import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import { useUIStore } from "../../store/uiStore";
import {
  formatFullYear,
  formatGenres,
  formatLocaleString,
  formatRating,
  formatRuntime,
} from "../../utils/formatUtil";
import { makeImagePath } from "../../utils/imgUtil";

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.bgSecondary};
  border-radius: 0.6rem;
`;

const Banner = styled.div<{ $bgPhoto: string }>`
  position: relative;
  height: 40rem;
  background-image: ${({ theme }) => theme.bannerGradientSecondary},
    url(${(props) => props.$bgPhoto});
  background-size: cover;
  background-position: center top;
  padding: 0 4.8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  background-color: #181818;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;

  transition: background-color 0.1s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.6rem;
  color: ${({ theme }) => theme.textPrimary};
`;

const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;

  p {
    margin-right: 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textTertiary};
  }
`;

const ContentSection = styled.div`
  padding: 0 4.8rem 4.8rem;
`;

const Overview = styled.p`
  font-size: 2rem;
  line-height: 1.4;
  margin-top: 2.4rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const DetailSection = styled.div`
  display: flex;
  margin-top: 2.4rem;

  ${({ theme }) => theme.mobile} {
    flex-direction: column;
  }
`;

const DetailColumn = styled.div`
  flex: 1;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  span {
    word-break: keep-all;
    color: ${({ theme }) => theme.textTertiary};
    margin-right: 0.8rem;
  }
  p {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

interface IMovieDetailProps {
  detailData: Movie.MovieDetail;
}

const MovieDetail = ({ detailData }: IMovieDetailProps) => {
  const { closeModal } = useUIStore(
    useShallow((state) => ({
      closeModal: state.closeModal,
    }))
  );

  return (
    <Container>
      <CloseBtn onClick={closeModal}>✕</CloseBtn>
      <Banner $bgPhoto={makeImagePath(detailData.backdrop_path)}>
        <Title>{detailData.title}</Title>
        <MetaInfo>
          <p>{formatFullYear(detailData.release_date)}</p>
          <p>{formatRuntime(detailData.runtime)}</p>
        </MetaInfo>
      </Banner>
      <ContentSection>
        <Overview>{detailData.overview}</Overview>
        <DetailSection>
          <DetailColumn>
            <DetailItem>
              <span>장르:</span> <p>{formatGenres(detailData.genres)}</p>
            </DetailItem>
            <DetailItem>
              <span>개봉일:</span>
              <p>{formatLocaleString(detailData.release_date)}</p>
            </DetailItem>
          </DetailColumn>
          <DetailColumn>
            <DetailItem>
              <span>평점:</span> <p>{formatRating(detailData.vote_average)}</p>
            </DetailItem>
            <DetailItem>
              <span>원제:</span> <p>{detailData.original_title}</p>
            </DetailItem>
          </DetailColumn>
        </DetailSection>
      </ContentSection>
    </Container>
  );
};

export default MovieDetail;
