import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import { useModalStore } from "../../store/modalStore";
import { makeImagePath } from "../../utils/imgUtil";
import Modal from "../modal/Modal";

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.bgSecondary};
  border-radius: 0.6rem;
  overflow: hidden;
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

const Content = styled.div`
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
`;

const DetailColumn = styled.div`
  flex: 1;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size: 1.4rem;
  span {
    color: ${({ theme }) => theme.textTertiary};
    margin-right: 8px;
  }
  p {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

interface IMovieDetailModalProps {
  detailData: Movie.MovieDetail;
}

const MovieDetailModal = ({ detailData }: IMovieDetailModalProps) => {
  const { closeModal } = useModalStore(
    useShallow((state) => ({
      closeModal: state.closeModal,
    }))
  );

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}시간 ${mins}분`;
  };

  const formatGenres = (genres: Movie.Genre[]) => {
    return genres.map((g) => g.name).join(", ");
  };

  return (
    <Modal onClose={closeModal}>
      <Container>
        <Banner $bgPhoto={makeImagePath(detailData.backdrop_path)}>
          <Title>{detailData.title}</Title>
          <MetaInfo>
            <p>{new Date(detailData.release_date).getFullYear()}</p>
            <p>{formatRuntime(detailData.runtime)}</p>
          </MetaInfo>
        </Banner>
        <Content>
          <Overview>{detailData.overview}</Overview>
          <DetailSection>
            <DetailColumn>
              <DetailItem>
                <span>장르:</span> <p>{formatGenres(detailData.genres)}</p>
              </DetailItem>
              <DetailItem>
                <span>개봉일:</span>
                <p> {detailData.release_date.toLocaleString()}</p>
              </DetailItem>
            </DetailColumn>
            <DetailColumn>
              <DetailItem>
                <span>평점:</span> <p>{detailData.vote_average.toFixed(1)}</p>
              </DetailItem>
              <DetailItem>
                <span>원제:</span> <p>{detailData.original_title}</p>
              </DetailItem>
            </DetailColumn>
          </DetailSection>
        </Content>
      </Container>
    </Modal>
  );
};

export default MovieDetailModal;
