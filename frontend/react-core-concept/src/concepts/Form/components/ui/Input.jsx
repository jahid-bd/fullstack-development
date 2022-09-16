import styled from "styled-components";

const Input = styled.input`
  border: ${(props) =>
    !props.isValid ? "1px solid #e60000" : "1px solid #ccc"};
  background: #fff;
  width: 100%;
  padding: 0.5rem 1.2rem;
  border-radius: 0.3rem;
  &:focus {
    border: 1px solid #4caf50;
    outline: 1px solid #4caf50;
  }
`;

export default Input;
