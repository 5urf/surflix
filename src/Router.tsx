import { createBrowserRouter } from "react-router";
import App from "./App";
import ComingSoon from "./pages/ComingSoon";
import Home from "./pages/Home";
import NowPlaying from "./pages/NowPlaying";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "coming-soon",
          element: <ComingSoon />,
        },
        {
          path: "now-playing",
          element: <NowPlaying />,
        },
      ],
    },
  ],
  {
    basename: "/surflix/",
  }
);

export default router;
