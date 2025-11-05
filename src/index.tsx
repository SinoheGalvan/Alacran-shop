import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Frame } from "./screens/Frame";
import { Dashboard } from "./screens/Dashboard";

export const App = () => {
  const [screen, setScreen] = useState<"login" | "dashboard">("login");

  return screen === "login" ? (
    <Frame onLogin={() => setScreen("dashboard")} />
  ) : (
    <Dashboard onBack={() => setScreen("login")} />
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
