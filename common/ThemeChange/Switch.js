import React, { useContext } from "react";
import { LuSun as Sun, LuMoon as Moon } from "react-icons/lu";
import ThemeContext from "./ThemeContext";

const Switch = () => {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <button className="p-2 Switch" onClick={() => toggle()}>
      {!dark ? (
        <Sun strokeWidth="1px" size="1.1em" />
      ) : (
        <Moon strokeWidth="1px" size="1.1em" />
      )}
    </button>
  );
};
export default Switch;
