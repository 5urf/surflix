import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router";
import { Fragment } from "react/jsx-runtime";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import MovieDetailModal from "./components/movies/MovieDetailModal";
import { useThemeStore } from "./store/themeStore";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

const Container = styled.div`
  padding-bottom: 2rem;
`;

function App() {
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AnimatePresence>
        <Fragment>
          <Container>
            <Header />
            <Outlet />
          </Container>
          <MovieDetailModal />
        </Fragment>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
