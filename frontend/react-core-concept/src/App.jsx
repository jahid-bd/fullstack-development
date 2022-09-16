import CustomHooks from "./concepts/CustomHooks/CustomHooks";
import { Route, Routes, Link } from "react-router-dom";
import JsonAndJsx from "./concepts/JsonAndJsx/JsonAndJsx";
import Shipping from "./concepts/Shipping/Shipping";
import ContactList from "./concepts/ContactList/ContactList";
import UseEffect from "./concepts/UseEffect/UseEffect";
import StyledComponent from "./concepts/StyledComponent/StyledComponent";
import FormValidation from "./concepts/Form/FormValidatiohn3";
import UseRef from "./concepts/UseRef/UseRef";
import RenderProps from "./concepts/RenderProps/RenderProps";
import styled from "styled-components";
import MaterialUi from "./concepts/MaterialUi/MaterialUi";
import ContextApi from "./concepts/ContextApi";

const Li = styled.li`
  margin: 8px 0;
  color: #fff;
  text-decoration: none;
`;

const menuData = [
  {
    link: "/",
    text: "Json To Jsx",
  },
  {
    link: "/shipping",
    text: "Shipping",
  },
  {
    link: "/contact-list",
    text: "Use Effect",
  },
  {
    link: "/custom-hooks",
    text: "Custom Hooks",
  },
  {
    link: "/styled-components",
    text: "Styled Components",
  },
  {
    link: "/form-validation",
    text: "Form Validation",
  },
  {
    link: "/use-ref",
    text: "Use Ref",
  },
  {
    link: "/render-props",
    text: "Render Props",
  },
  {
    link: "/material-ui",
    text: "Material Ui",
  },
  {
    link: "/context-api",
    text: "Context Api",
  },
];

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <nav
        style={{
          background: "#003865",
          padding: "20px 10px",
          height: "100vh",
        }}
      >
        <ul
          style={{
            textTransform: "uppercase",
            fontSize: "16px",
            fontFamily: "Arial",
            textDecoration: "none",
            color: "#fff",
          }}
        >
          {menuData.map((menu) => (
            <Li>
              <Link
                to={menu.link}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                {menu.text}
              </Link>
            </Li>
          ))}
        </ul>
      </nav>

      <div style={{ padding: "20px 50px" }}>
        <Routes>
          <Route path="/" element={<JsonAndJsx />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/contact-list" element={<ContactList />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/custom-hooks" element={<CustomHooks />} />
          <Route path="/styled-components" element={<StyledComponent />} />
          <Route path="/form-validation" element={<FormValidation />} />
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/render-props" element={<RenderProps />} />
          <Route path="/material-ui" element={<MaterialUi />} />
          <Route path="/context-api" element={<ContextApi />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
