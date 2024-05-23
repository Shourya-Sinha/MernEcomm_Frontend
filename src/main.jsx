import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/slice/store.jsx";
import { CartProvider } from "./Components/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <CartProvider>
        <App />
      </CartProvider>
    </ReduxProvider>
  </React.StrictMode>
);
