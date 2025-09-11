import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "../components/header/Header";
import MovieDetailModal from "../components/movies/MovieDetailModal";
import { useModalStore } from "../store/modalStore";

const Container = styled.div`
  padding-bottom: 2rem;
`;

const MovieLayout = () => {
  const isOpen = useModalStore((state) => state.isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      <>
        <Container>
          <Header />
          <Outlet />
        </Container>
        {isOpen && <MovieDetailModal />}
      </>
    </AnimatePresence>
  );
};

export default MovieLayout;
