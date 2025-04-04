import { Outlet } from "react-router";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import MovieDetailModalContainer from "./components/movies/MovieDetailModalContainer";
import { useModalStore } from "./store/modalStore";
import { useThemeStore } from "./store/themeStore";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

const Container = styled.div`
  padding-bottom: 2rem;
`;

function App() {
  const isOpen = useModalStore((state) => state.isOpen);
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Outlet />
      </Container>
      {isOpen && <MovieDetailModalContainer />}
    </ThemeProvider>
  );
}

export default App;
