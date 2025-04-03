import styled from "styled-components";
import MoonIcon from "../../assets/MoonIcon";
import SunIcon from "../../assets/SunIcon";
import { useThemeStore } from "../../store/\bthemeStore";

const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
`;

const DarkModeSwitch = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();
  return (
    <ToggleButton onClick={toggleTheme}>
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </ToggleButton>
  );
};

export default DarkModeSwitch;
