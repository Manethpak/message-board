import { wrap } from "svelte-spa-router/wrap";
import Home from "./routes/Home.svelte";
import NotFound from "./routes/NotFound.svelte";

export const routes = {
  "/": Home,
  "/register": wrap({
    asyncComponent: () => import("./routes/Register.svelte"),
  }),
  "/login": wrap({
    asyncComponent: () => import("./routes/Login.svelte"),
  }),
  "/post-board": wrap({
    asyncComponent: () => import("./routes/PostBoard.svelte"),
  }),
  "/board/:id": wrap({
    asyncComponent: () => import("./routes/ViewBoard.svelte"),
  }),
  "/about-us": wrap({
    asyncComponent: () => import("./routes/AboutUs.svelte"),
  }),
  "/profile": wrap({
    asyncComponent: () => import("./routes/Profile.svelte"),
  }),
  "/search/:query": wrap({
    asyncComponent: () => import("./routes/Search.svelte"),
  }),
  "*": NotFound,
};
