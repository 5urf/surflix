import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";
import Header from "../components/header/Header";
import MovieDetailModal from "../components/movies/MovieDetailModal";
import { useUIStore } from "../store/uiStore";
import { getScrollbarWidth } from "../utils/styleUtil";

const Container = styled.div`
  padding-bottom: 2rem;
`;

const MovieLayout = () => {
  const isModalOpen = useUIStore((state) => state.isModalOpen);

  useEffect(() => {
    if (isModalOpen) {
      const scrollbarWidth = getScrollbarWidth();
      document.body.classList.add("modal-open");
      document.body.style.setProperty(
        "--scrollbar-width",
        `${scrollbarWidth}px`
      );
    } else {
      document.body.classList.remove("modal-open");
      document.body.style.removeProperty("--scrollbar-width");
    }

    return () => {
      document.body.classList.remove("modal-open");
      document.body.style.removeProperty("--scrollbar-width");
    };
  }, [isModalOpen]);

  return (
    <AnimatePresence>
      <>
        <Container>
          <Header />
          <Outlet />
        </Container>
        {isModalOpen && <MovieDetailModal />}
      </>
    </AnimatePresence>
  );
};

export default MovieLayout;
