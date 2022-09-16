import React, { useState } from "react";
import ThemeContext from "./contexts/themeContext";
import ClickCounter from "../RenderProps/ClickCounter";
import Counter from "../RenderProps/Counter";
import Section from "./Section";
import { createContext } from "react";
import { useContext } from "react";

const ContextApi = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <Counter>
        {(count, incrementCount) => (
          <ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <ThemeContext.Provider value={{ theme }}>
        <Section />
      </ThemeContext.Provider>
    </>
  );
};

// Another Example

const HeaderContext = createContext("Nobody");

const Header = () => {
  const { name } = useContext(HeaderContext);
  return <h1>Hello World I am {name}</h1>;
};

const Container = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

const ContextApi2 = () => {
  const name = "Jahid Hasan";
  return (
    <div>
      <HeaderContext.Provider value={{ name }}>
        <Container />
      </HeaderContext.Provider>
    </div>
  );
};

export default ContextApi2;
