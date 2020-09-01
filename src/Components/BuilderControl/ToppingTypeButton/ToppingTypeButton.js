import React from "react";
import styled from "styled-components";

const ToppingButtonWrap = styled.div`
  color: white;
  background-color: black;
  padding: 5px 10px;
  margin-top: -34px;
  border-bottom: 2px solid white;
  z-index: 50;
  &.selected {
    border: 1px solid white;
    border-bottom: 2px solid black;
    color: #5c9210;
  }
`;
const toppingTypeButton = (props) => {
  //check if selected topping is equal to clicked topping
  const isSelected = (selected) => {
    if (selected === props.toppingType) {
      return "selected";
    }
    return "";
  };
  return (
    <ToppingButtonWrap
      className={isSelected(props.class)}
      onClick={() => props.setTopping(props.class)}
    >
      {props.class}
    </ToppingButtonWrap>
  );
};

export default toppingTypeButton;
