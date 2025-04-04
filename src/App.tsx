import { Outlet } from "react-router";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import MovieDetailModalContainer from "./components/movies/MovieDetailModalContainer";
import { useModalStore } from "./store/modalStore";
import { useThemeStore } from "./store/themeStore";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
  const isOpen = useModalStore((state) => state.isOpen);
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Outlet />
      {isOpen && <MovieDetailModalContainer />}
    </ThemeProvider>
  );
}

export default App;
