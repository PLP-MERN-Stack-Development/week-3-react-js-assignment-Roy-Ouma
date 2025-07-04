// src/components/Navbar.jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">MyApp</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}
