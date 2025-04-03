import { Outlet } from "react-router";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import { useThemeStore } from "./store/\bthemeStore";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

function App() {
  const { isDarkMode } = useThemeStore();
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
