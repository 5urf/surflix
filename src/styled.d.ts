import "styled-components";

declare module "styled-components" {
  export type DefaultTheme = {
    textColor: React.CSSProperties["color"];
    activeTextColor: React.CSSProperties["color"];
  };
}
