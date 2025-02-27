import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { BookContextProvider } from "./context/BookContext.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <BookContextProvider>
          <App />
        </BookContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
