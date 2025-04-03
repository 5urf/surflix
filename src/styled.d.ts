import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textPrimary: React.CSSProperties["color"];
    activePrimary: React.CSSProperties["color"];
    iconPrimary: React.CSSProperties["color"];
  }
}
