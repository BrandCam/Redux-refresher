import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button/Button";

//style
const ControlWrap = styled.div`
  display: flex;
  color: white;
  align-items: center;
`;
const control = (props) => {
  return (
    <ControlWrap>
      <Button
        className="success"
        onClick={() => props.addTopping(props.ingredient)}
      >
        +
      </Button>
      <p>{props.type}</p>
      <Button className="danger" onClick={() => props.remove(props.ingredient)}>
        -
      </Button>
    </ControlWrap>
  );
};

export default control;
