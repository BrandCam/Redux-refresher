import React from "react";
import { Formik, Field, Form } from "formik";
import Button from "../UI/Button/Button";
import axios from "../../Axios-orders";
import ingredient from "../Burger/Ingredient/Ingredients";
import { resetSeclected } from "../../store/actions/actions";
import { connect } from "react-redux";

const OrderForm = ({ ingredients, history, resetSeclected, user }) => {
  return (
    <>
      <Formik
        resetSeclected={resetSeclected}
        ingredients={ingredients}
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          email: user.email,
          uid: user.uid,
        }}
        onSubmit={(data) => {
          const order = {};
          order.customer = data;
          order.ingredients = {};
          ingredients.forEach((e, i) => {
            order.ingredients[i] = e;
          });
          axios
            .post("/orders.json", order)
            .then(resetSeclected())
            .then(history.push("/custom"))
            .catch((err) => console.log(err));
        }}
      >
        {({ values }) => (
          <Form>
            <Field
              name="firstName"
              placeholder="First name"
              type="text"
            ></Field>
            <Field name="lastName" placeholder="Last name" type="text"></Field>
            <div>
              <Field name="address" placeholder="address" type="text"></Field>
            </div>

            <Button className="success" type="submit">
              Submit
            </Button>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{}</pre> */}
          </Form>
        )}
      </Formik>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    resetSeclected: () => dispatch(resetSeclected()),
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);
