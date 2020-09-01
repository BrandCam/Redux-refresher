import React from "react";
import styled from "styled-components";
const CardWrap = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  margin: 15px;
  box-shadow: 5px 5px 5px #bbb;
  box-sizing: border-box;
  h3 {
    background-color: #5c9210;
    margin: 0;
    padding: 1rem 0;
    text-align: center;
    strong {
      color: white;
    }
  }
  h3:nth-of-type(2) {
    background-color: black;
    margin: 0;
  }
  .ingredients {
    border-bottom: 1px solid #999;
    background-color: black;
  }
  strong {
    color: #944317;
  }
  p {
    margin-block-start: 0;
    color: #5c9210;
  }
  .info {
    text-align: center;
    background-color: black;
    p {
      margin: 0;
    }
  }
`;

const OrderCard = ({ customer, id, ingredients }) => {
  let ingredientsObj = {};
  let uniqueIngredients = [...new Set(ingredients.map((e) => e.type))];
  uniqueIngredients.forEach((e) => (ingredientsObj[e] = 0));
  ingredients.forEach((e) => ingredientsObj[e.type]++);

  return (
    <>
      <CardWrap>
        <h3>
          <strong>Order:</strong> {id}
        </h3>
        <div className="ingredients">
          {uniqueIngredients.map((e) => (
            <p key={e}>
              <strong>{e}</strong>: {ingredientsObj[e]}
            </p>
          ))}
        </div>

        <h3>
          <strong>Customer info</strong>
        </h3>
        <div className="info">
          <p>
            <strong>Address:</strong> {customer.address} <strong>Name:</strong>{" "}
            {customer.firstName} {customer.lastName}
          </p>
        </div>
      </CardWrap>
    </>
  );
};

export default OrderCard;
