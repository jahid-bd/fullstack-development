import React from "react";
import Counter from "../RenderProps/Counter";
import HoverCounter from "../RenderProps/HoverCounter";
import ThemeContext from "./contexts/themeContext";

const Content = () => {
  return (
    <div>
      <h1>Content</h1>
      {/* <Counter>
        {(count, incrementCount) => (
          <ThemeContext.Consumer>
            {({ theme }) => (
              <HoverCounter
                count={count}
                incrementCount={incrementCount}
                theme={theme}
              />
            )}
          </ThemeContext.Consumer>
        )}
      </Counter> */}
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
};

export default Content;
