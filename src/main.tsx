import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import "./index.css";
import { persistor, store } from "./redux/store";
import { routers } from "./route/router";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-right" duration={3000} />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routers} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
