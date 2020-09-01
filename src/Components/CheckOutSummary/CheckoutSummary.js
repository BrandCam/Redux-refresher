import React from "react";
import Burger from "../Burger/Burger";
import styled from "styled-components";

const SummaryBurger = styled(Burger)`
  max-width: 700px;
  height: 500px;

  margin: auto;
  overflow: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  @media (max-width: 500px) {
    height: 350px;
  }
`;

const CheckOutSummary = (props) => {
  return (
    <div>
      <h1>We hope it tastes well!</h1>
      <div>
        <SummaryBurger ingredients={props.ingredients} />
      </div>
    </div>
  );
};

export default CheckOutSummary;
