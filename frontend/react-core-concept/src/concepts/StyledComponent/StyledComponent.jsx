import styled from "styled-components";
// import { css } from "styled-components";

const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${(props) => (props.dark ? "#1b1919" : "#04aa6d")};
  color: #fff;
  padding: 0.4rem 0.9rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.3rem;
  &:hover {
    background-color: ${(props) => (props.dark ? "#000" : "#0f9161")};
  }
`;

const LargeButton = styled(Button)`
  padding: 0.6rem 1.1rem;
  font-size: 1.2rem;
`;

const SmallButton = styled(Button)`
  padding: 0.3rem 0.7rem;
  font-size: 0.8rem;
`;

const Container = styled.div`
  width: 80%;
  margin: 3rem auto;
  padding: 3rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #04aa6d;
`;

const alartVariant = {
  secondery: {
    color: "#383d41",
    background: "#e2e3e5",
    border: "1px solid #d6d8db,",
  },
  success: {
    color: "#155724",
    background: "#d4edda",
    border: "1px solid #c3e6cb",
  },
  danger: {
    color: "#721c24",
    background: "#f8d7da",
    border: "1px solid #f5c6cb",
  },
};

const Alert = styled.div`
  color: #004085;
  background-color: #cce5ff;
  border: 1px solid #b8daff;
  padding: 0.6rem 1rem;
  border-radius: 0.2rem;
  ${(props) => {
    switch (props.type) {
      case "secondery":
        return alartVariant.secondery;

      case "success":
        return alartVariant.success;

      case "danger":
        return alartVariant.danger;

      default:
        return "";
    }
  }}
`;

const StyledComponent = () => {
  return (
    <Container>
      <Title>Styled Component</Title>
      <Button>Click Me</Button>
      <Button dark>Dark Button</Button>
      <LargeButton>Large Button</LargeButton>
      <SmallButton>Small Button</SmallButton>
      <Alert type="danger">A simple primary alert style component</Alert>
    </Container>
  );
};

export default StyledComponent;
