import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div<{ $type: "main" | "modal" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ $type }) => ($type === "modal" ? "50vh" : "100vh")};
  flex-direction: column;
`;

const Spinner = styled.div`
  border: 0.4rem solid #f3f3f3;
  border-top: 0.4rem solid #3498db;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
  margin-bottom: 1rem;
  animation: ${spinAnimation} 1s linear infinite;
`;

const LoadingMessage = styled.h2`
  color: #fff;
  font-size: 1.8rem;
`;

interface ILoadingSpinnerProps {
  type?: "main" | "modal";
}

const LoadingSpinner = ({
  type = "main",
}: ILoadingSpinnerProps): React.JSX.Element => {
  return (
    <LoaderContainer $type={type}>
      <Spinner />
      <LoadingMessage>Loading...</LoadingMessage>
    </LoaderContainer>
  );
};

export default LoadingSpinner;
