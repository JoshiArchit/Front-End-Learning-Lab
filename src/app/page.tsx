"use client";

import { PlaygroundPage } from "../playground/PlaygroundPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";

export default function Playground() {
  const { darkTheme, setDarkTheme } = useTheme();

  return (
    <div
      className={`playground-page-container flex flex-col gap-4 min-h-screen p-3 ${darkTheme ? "bg-slate-900 text-white" : "bg-white text-black"}`}
    >
      <div className="flex w-full justify-between items-center">
        <span className="text-2xl">Component Playground</span>
        <div className="theme-switcher">
          <button onClick={() => setDarkTheme((prev) => !prev)}>
            Toggle Theme{" "}
            <span>
              {darkTheme ? (
                <FontAwesomeIcon icon={faMoon} />
              ) : (
                <FontAwesomeIcon icon={faSun} />
              )}
            </span>
          </button>
        </div>
      </div>

      <PlaygroundPage />
    </div>
  );
}
