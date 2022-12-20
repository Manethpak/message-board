import Home from "./routes/Home.svelte";
import Register from "./routes/Register.svelte";
import Login from "./routes/Login.svelte";
import NotFound from "./routes/NotFound.svelte";

export const routes = {
  "/": Home,
  "/register": Register,
  "/login": Login,
  "/*": NotFound,
};
