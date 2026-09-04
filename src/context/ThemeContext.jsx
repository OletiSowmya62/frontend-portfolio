import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext.js";

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("portfolio-theme");

  if (storedTheme) {
    return storedTheme;
  }

  return "dark";
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}