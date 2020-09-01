import React from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";
const SummaryWrap = styled.div``;
const orderSummary = (props) => {
  let numberOf = {};
  props.ingredients.forEach((el) => {
    if (!numberOf.hasOwnProperty(el.type)) {
      numberOf[el.type] = 1;
    } else {
      numberOf[el.type] = numberOf[el.type] + 1;
    }
  });

  return (
    <SummaryWrap>
      <h1>Your Custom Burger Contains</h1>
      <ul>
        {Object.keys(numberOf).map((el) => {
          return (
            <li>
              {el} X {numberOf[el]}
            </li>
          );
        })}
      </ul>
      <div>
        <Button onClick={() => props.continue()} className="success">
          Procede To Check out
        </Button>
        <Button onClick={() => props.toggel()} className="danger">
          Back
        </Button>
        <p>
          Price:<strong>{props.total}</strong>
        </p>
      </div>
    </SummaryWrap>
  );
};

export default orderSummary;
