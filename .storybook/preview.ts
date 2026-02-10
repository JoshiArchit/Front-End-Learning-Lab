import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "../src/context/ThemeContext";
import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";

function ThemeSync({ darkTheme }: { darkTheme: boolean }) {
  const { setDarkTheme } = useTheme();

  useEffect(() => {
    setDarkTheme(darkTheme);
  }, [darkTheme, setDarkTheme]);

  return null;
}

const preview: Preview = {
  globalTypes: {
    darkTheme: {
      name: "Dark Theme",
      description: "Toggle global dark mode",
      defaultValue: "false",
      toolbar: {
        icon: "moon",
        items: [
          { value: "false", title: "Light" },
          { value: "true", title: "Dark" },
        ],
      },
    },
  },

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story, context) =>
      React.createElement(
        ThemeProvider,
        null,
        React.createElement(ThemeSync, {
          darkTheme: context.globals.darkTheme === "true",
        }),
        React.createElement(Story, null),
      ),
  ],
};

export default preview;
