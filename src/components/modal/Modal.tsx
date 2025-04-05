import { motion, Variants } from "framer-motion";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useModalStore } from "../../store/modalStore";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.bgSecondary};
  border-radius: 0.8rem;
  max-width: 80rem;
  width: 90%;
  max-height: 90vh;
  overflow: hidden;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.2);
`;
const overlayVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ onClose, children }: IModalProps) => {
  const portalElement = document.getElementById("portal-root") || document.body;
  const layoutId = useModalStore((state) => state.layoutId);

  //NOTE - scroll을 방지하면 기존 UI가 깨지는 현상 때문에 임시 주석
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, []);

  return createPortal(
    <Overlay
      onClick={onClose}
      variants={overlayVariants}
      initial='initial'
      exit='exit'
      animate='animate'
    >
      <ModalContainer onClick={(e) => e.stopPropagation()} layoutId={layoutId}>
        {children}
      </ModalContainer>
    </Overlay>,
    portalElement
  );
};

export default Modal;
