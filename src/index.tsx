import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // optional, your CSS or Tailwind

// Get the root element
const rootElement = document.getElementById("root");

if (rootElement) {
  // tell TypeScript that it's definitely an HTMLElement
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error("Root element not found");
}
