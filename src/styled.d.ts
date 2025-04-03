import React from "react";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    headerTextPrimary: React.CSSProperties["color"];
    activePrimary: React.CSSProperties["color"];
    iconPrimary: React.CSSProperties["color"];
    textPrimary: React.CSSProperties["color"];
    textSecondary: React.CSSProperties["color"];
    bgPrimary: React.CSSProperties["color"];
  }
}
