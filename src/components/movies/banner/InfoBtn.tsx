import styled from "styled-components";
import { useShallow } from "zustand/shallow";
import InfoIcon from "../../../assets/InfoIcon";
import { useModalStore } from "../../../store/modalStore";

const Container = styled.div`
  margin-top: 1rem;
  width: 100%;

  max-width: 30rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: none;
  padding: 0.8rem;
  width: 100%;
  background-color: rgba(109, 109, 110, 0.7);
  border-radius: 0.4rem;
  cursor: pointer;

  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

const Text = styled.p`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.textPrimary};
`;

interface IInfoBtnProps {
  movieId: number;
}

const InfoBtn = ({ movieId }: IInfoBtnProps) => {
  const { openModal } = useModalStore(
    useShallow((state) => ({
      openModal: state.openModal,
    }))
  );
  return (
    <Container>
      <Btn onClick={() => openModal(movieId)}>
        <InfoIcon />
        <Text>More Info</Text>
      </Btn>
    </Container>
  );
};

export default InfoBtn;
