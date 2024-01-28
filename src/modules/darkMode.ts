import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type DarkModeState = {
  theme: "dark" | "light" | "default";
  systemTheme: "dark" | "light" | "not-ready";
};

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    return localStorage.theme === "dark"
      ? "dark"
      : !("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

const initialState: DarkModeState = {
  theme: getInitialTheme(),
  systemTheme: "not-ready",
};

const darkMode = createSlice({
  name: "darkMode",
  initialState: initialState,
  reducers: {
    enableDarkMode(state) {
      state.theme = "dark";
    },
    enableLightMode(state) {
      state.theme = "light";
    },
    setSystemTheme(state, action: PayloadAction<"dark" | "light">) {
      state.systemTheme = action.payload;
    },
  },
});

export default darkMode;
