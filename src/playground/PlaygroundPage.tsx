import { useContext, useState } from "react";
import ToggleSwitch from "../components/ui/ToggleSwitch/ToggleSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";

export function PlaygroundPage() {
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

      <div className="flex min-h-max gap-3">
        <div className="component-card p-4 flex flex-col items-center gap-2 border-solid border-gray-500 border-2 rounded-lg">
          <span className="component-name">Toggle Switch</span>
          <ToggleSwitch/>
        </div>

        <span>Another component</span>
      </div>
    </div>
  );
}
