import { ComponentPropsWithoutRef, useState } from "react";
import { useTheme } from "../../../context/ThemeContext";

type ToggleSwitchProps = {
  onChange?: ComponentPropsWithoutRef<"input">["onChange"];
};

export default function ToggleSwitch({ onChange }: ToggleSwitchProps) {
  const [checked, setChecked] = useState(false);
  const { darkTheme, setDarkTheme } = useTheme();

  function handleToggle(e: React.ChangeEvent<HTMLInputElement>): void {
    setChecked(!checked);
    onChange?.(e);
  }

  return (
    <div
      className={`flex flex-col w-max p-8 gap-2 justify-center place-items-center rounded-md shadow-md ${darkTheme ? "bg-slate-800 shadow-amber-200" : "bg-slate-100 shadow-blue-500"}`}
    >
      <div className="toggle-switch relative w-16 h-8">
        <input
          id="toggle-switch"
          type="checkbox"
          className={`
            peer appearance-none w-16 h-8 rounded-full cursor-pointer transition-colors duration-300
            ${
              darkTheme
                ? "bg-slate-600 checked:bg-red-500"
                : "bg-slate-300 checked:bg-blue-500"
            }
          `}
          onChange={handleToggle}
        />
        <label
          htmlFor="toggle-switch"
          className="
            absolute top-0 left-0 w-8 h-8 rounded-full bg-white
            border border-slate-400 shadow-sm
            transition-transform duration-300 ease-in-out
            peer-checked:translate-x-8
            cursor-pointer hover:shadow-2xl hover:shadow-amber-600
          "
        />
      </div>
      <span className={`${darkTheme ? "text-white" : "text-black"}`}>
        {checked ? "ON" : "OFF"}
      </span>
    </div>
  );
}
