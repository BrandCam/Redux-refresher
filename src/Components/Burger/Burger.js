import React from "react";

import Ingredient from "./Ingredient/Ingredients";

const Burger = (props) => {
  const hasIngredients = props.ingredients;
  let burger = null;
  if (hasIngredients) {
    burger = props.ingredients.map((e, i) => {
      return <Ingredient key={i} class={e.class} type={e.type} />;
    });
  }
  return (
    <div className={props.className}>
      <Ingredient type="BreadTop" />
      {burger}
      <Ingredient type="BreadBottom" />
    </div>
  );
};

export default Burger;
