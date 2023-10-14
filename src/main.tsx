import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Confing from "./config/Confing.tsx";

import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Confing>
      <App />
    </Confing>
  </React.StrictMode>
);
