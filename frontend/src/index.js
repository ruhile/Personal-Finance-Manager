
// frontend/src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ExpenseProvider } from "./context/ExpenseContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ExpenseProvider>
      <App />
    </ExpenseProvider>
  </BrowserRouter>
);

