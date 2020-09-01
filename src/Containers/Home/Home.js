import React from "react";
import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import { TextField } from "@material-ui/core";
import firebaseApp from "../../firbaseSetup";
import { connect } from "react-redux";
import { logUserOut, logUserIn } from "../../store/actions/actions";
import { Button } from "@material-ui/core";
import * as yup from "yup";

const SignIn = (props) => {
  let SignInSchema = yup.object().shape({
    email: yup.string().email().required("This field is required."),
    password: yup.string().required("This field is required."),
  });

  const callFb = async (email, pass) => {
    try {
      let res = await firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, pass);
      console.log(res.user);
    } catch (e) {
      console.log(e.message);
    }
  };
  let content;

  content = !props.user ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {}}
      >
        {({ values, errors, handleChange, touched }) => (
          <Form>
            <div style={{ margin: "10px 0px" }}>
              <TextField
                style={{ marginBottom: "20px" }}
                error={errors.email && touched.email}
                autoComplete="email"
                name="email"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                id="email"
                label="Email"
                autoFocus
                helperText={errors.email && touched.email ? errors.email : null}
              />
              <TextField
                error={errors.password && touched.password}
                name="password"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                type="password"
                id="password"
                label="Password"
                autoFocus
                helperText={
                  errors.password && touched.password ? errors.password : null
                }
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "50%",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => props.logUserIn(values.email, values.password)}
              >
                Log In
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={() => callFb(values.email, values.password)}
              >
                Sign Up
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Button
        variant="contained"
        color="secondary"
        type="button"
        onClick={() => props.logUserOut()}
      >
        Sign Out
      </Button>
    </div>
  );
  return content;
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToPrps = (dispatch) => {
  return {
    logUserIn: (email, password) => dispatch(logUserIn(email, password)),
    logUserOut: () => dispatch(logUserOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToPrps)(SignIn);
