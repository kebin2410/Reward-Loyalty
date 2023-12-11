import React, { useState, useLayoutEffect, useEffect } from "react";

const ThemeContext = React.createContext({
  dark: true,
  toggle: () => {},
});

export default ThemeContext;

export function ThemeProvider(props) {
  const [dark, setDark] = useState(
    useState(
      typeof window !== "undefined" && window.localStorage.getItem("darkTheme")
    )
  );
  useLayoutEffect(() => {
    const lastTheme =
      typeof window !== "undefined" && window.localStorage.getItem("darkTheme");

    if (lastTheme === "true") {
      setDark(true);
      applyTheme(darkTheme);
    }

    if (!lastTheme || lastTheme === "false") {
      setDark(false);
      applyTheme(lightTheme);
    }
    // if state changes, repaints the app
  }, [dark]);

  const applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };
  const toggle = () => {
    setDark(!dark);
    typeof window !== "undefined" &&
      window.localStorage.setItem("darkTheme", !dark);
    const body = document.getElementsByTagName("body")[0];
    body.style.cssText = "transition: background .5s ease";
  };
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggle,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

// "#374151"
// #374151
const lightTheme = [
  "--body-color: #111827",
  "--nav-color:  #1F2937",
  "--para-color: #F97316",
  "--head-color: #ccc",
  "--head-alt-color: #055c2d",
  "--hover-color: #ea580c",
  "--bs-border-color: gray",
  // "--bs-border-color:#76A9FA",
  "--bs-nav-link-color: #374151",
  "--bs-inner-color: #374151",
  "--switch-mode-color: #ffffff",
  "--switch-bg-color: rgb(55 65 81/300)",
  "--bs-button-color: black",
  "--bs-hover-button-color: white",
  "--wb-font-button-color: white",
  "--trans-bg-color: #7C2D12",
  "--trans-item-color: orange",
];
const darkTheme = [
  "--body-color: #eeeeee",
  "--nav-color:  #ffffff",
  "--para-color: #F97316",
  "--head-color: #0a1023",
  "--head-alt-color: #055c2d",
  "--hover-color: #ea580c",
  "--bs-border-color: gray",
  // "--bs-border-color:#1E429F",
  "--bs-nav-link-color: var(--head-color)",
  "--bs-inner-color: var(--nav-color)",
  "--switch-mode-color: #000000",
  "--switch-bg-color: #eeeeee",
  "--bs-button-color: white",
  "--bs-hover-button-color: black",
  "--wb-font-color: black",
  "--trans-bg-color: orange",
  "--trans-item-color: #7C2D12",
];
