import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) =>
    props.type === "submit" ? "#4CAF50" : "#ff4d4d"};
  color: white;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  width: 50%;
  &:hover {
    background-color: ${(props) =>
      props.type === "submit" ? "#3e8e41" : "#e60000"};
  }
`;

export default Button;
