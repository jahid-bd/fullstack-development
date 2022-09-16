import { useContext } from "react";
import ThemeContext from "../ContextApi/contexts/themeContext";

const HoverCounter = ({ count, incrementCount }) => {
  const { theme } = useContext(ThemeContext);
  const style =
    theme === "dark" ? { backgroundColor: "#000", color: "#fff" } : null;
  return (
    <div>
      <h1 style={style} onMouseOver={incrementCount}>
        Mouse Hovered {count} times
      </h1>
    </div>
  );
};

export default HoverCounter;
