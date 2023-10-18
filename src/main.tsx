import "./App.css";
import "@mantine/core/styles.css";

import router from "@mongez/react-router";
import BaseLayout from "./components/BaseLayout";
import HomePage from "./pages/HomePage";
import BlogDetailsPage from "./pages/BlogDetailsPage";

router.group({
  path: "/",
  layout: BaseLayout,
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/blog/:id",
      component: BlogDetailsPage,
    },
  ],
});

router.scan();
