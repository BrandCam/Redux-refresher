import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  &.success {
    color: #5c9210;
  }
  &.danger {
    color: #944317;
  }
  &:hover {
    background-color: white;
  }
`;

export default Button;
