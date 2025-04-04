import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  headerTextPrimary: "#a0a0a0",
  //NOTE - 고정
  activePrimary: "#ffffff",
  iconPrimary: "#ffffff",

  textPrimary: "#ffffff",
  textSecondary: "#e5e5e5",
  textTertiary: "#a3a3a3",
  bgPrimary: "#141414",
  bgSecondary: "#181818",

  //NOTE - 고정
  cardTitleColor: "#ffffff",

  //NOTE - Gradient
  bannerGradientPrimary:
    "linear-gradient(to bottom, transparent 0%, rgba(18, 18, 18, 0.3) 50%, rgba(18, 18, 18, 0.8) 80%, rgba(18, 18, 18, 1) 100%)",
  bannerGradientSecondary: "linear-gradient(to top, #181818, transparent 50%)",
};

export const lightTheme: DefaultTheme = {
  headerTextPrimary: "#a0a0a0",
  //NOTE - 고정
  activePrimary: "#ffffff",
  iconPrimary: "#ffffff",

  textPrimary: "#000000",
  textSecondary: "#333333",
  textTertiary: "#737373",
  bgPrimary: "#ffffff",
  bgSecondary: "#f5f5f5",

  //NOTE - 고정
  cardTitleColor: "#ffffff",

  //NOTE - Gradient
  bannerGradientPrimary:
    "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.8) 80%, rgba(255, 255, 255, 1) 100%)",
  bannerGradientSecondary: "linear-gradient(to top, #f5f5f5, transparent 30%)",
};
