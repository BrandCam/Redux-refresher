import React from "react";
import styled from "styled-components";
import Control from "./Control.js/Control";
import ToppingTypeButton from "./ToppingTypeButton/ToppingTypeButton";
import Button from "../UI/Button/Button";

//styles
const ControlWrap = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background-color: black;
  min-height: 200px;
  @media (max-width: 650px) {
    flex-direction: column;
    min-height: 100px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const ToppingAdder = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  border-right: 1px solid white;
  @media (max-width: 650px) {
    border: none;
    width: 100%;
  }
`;
const ToppingTypeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ToppingType = styled.div`
  width: 25%;
  display: flex;
  flex-wrap: column wrap;
  align-items: flex-start;
  justify-content: center;
  color: white;
`;
const Condemints = styled.div`
  width: 25%;
  display: flex;
  align-items: flex-start;
  flex-flow: wrap;
  justify-content: center;
  color: white;

  @media (max-width: 650px) {
    padding-right: 25px;
    align-items: flex-end;
    width: 100%;
    flex-direction: row;
  }
`;
const OrderButtonWrap = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #5c9210;
  @media (max-width: 650px) {
    flex-direction: row;
  }
`;

const builderControls = (props) => {
  //grab topping types
  console.log(props.ingredients);
  const toppingTypes = props.ingredients.map((e) => e.class);
  // remove non unique topping types
  const uniqueToppingtypes = [...new Set(toppingTypes)];
  return (
    <ControlWrap>
      <ToppingTypeWrap>
        <OrderButtonWrap>
          <p>Total : ${props.total}</p>
          <Button
            disabled={!props.purchasable}
            className={props.purchasable ? "success" : "danger"}
            onClick={() => props.toggelModel()}
          >
            CheckOut
          </Button>
        </OrderButtonWrap>
      </ToppingTypeWrap>

      <ToppingAdder>
        {props.ingredients.map((e) => {
          if (e.class !== "Condiment") {
            return (
              <Control
                key={e.type}
                remove={props.remove}
                ingredient={e}
                addTopping={props.addTopping}
                type={e.type}
              />
            );
          } else {
            return null;
          }
        })}
      </ToppingAdder>
      {/* <Condemints>
        {props.ingredients.map((e) => {
          if (e.class === "Condiment") {
            return <Control key={e.type} type={e.type} />;
          } else {
            return null;
          }
        })}
      </Condemints> */}
    </ControlWrap>
  );
};

export default builderControls;
