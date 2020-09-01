import axios from "../../Axios-orders";
import firebaseApp from "../../firbaseSetup";

export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_ORDERS = "UPDATE_ORDERS";
export const RESET_SELECTED = "RESET_SELECTED";
export const LOG_IN_USER = "LOG_IN_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";
export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";
//ACTION CREATORS
export const setUser = (user) => {
  return {
    type: SET_LOGGED_IN_USER,
    user: user,
  };
};

export const addIngredient = (selected) => {
  return {
    type: ADD_INGREDIENT,
    ing: selected,
  };
};
export const removeIngredient = (selected) => {
  return {
    type: REMOVE_INGREDIENT,
    ing: selected,
  };
};

export const resetSeclected = () => {
  return {
    type: RESET_SELECTED,
  };
};

//THUNKS
export const fetchIngredients = () => {
  return (dispatch) => asyncUpdateIngredients(dispatch);
};

export const fetchOrders = () => {
  return (dispatch) => asyncUpdateOrders(dispatch);
};
export const logUserOut = () => {
  return (dispatch) => asyncLogUserOut(dispatch);
};
export const logUserIn = (email, password) => {
  return (dispatch) => asyncLogUserIn(dispatch, email, password);
};

//ASYNC FUNCS
async function asyncLogUserIn(dispatch, email, password) {
  try {
    let res = await firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password);
    dispatch({
      type: LOG_IN_USER,
      user: res.user,
    });
  } catch (e) {
    console.log(e.message);
  }
}
async function asyncLogUserOut(dispatch) {
  try {
    let res = await firebaseApp.auth().signOut();
    dispatch({
      type: LOG_OUT_USER,
    });
  } catch (e) {
    console.log(e.message);
  }
}
async function asyncUpdateIngredients(dispatch) {
  try {
    const data = await axios.get("/ingredients.json").then((res) => res.data);
    dispatch({
      type: UPDATE_INGREDIENTS,
      data: data.filter((val) => val),
    });
  } catch (err) {
    console.log(err);
  }
}
async function asyncUpdateOrders(dispatch) {
  try {
    const data = await axios
      .get("/orders.json")
      .then((res) => res.data)
      .then((data) => {
        let newOrders = [];
        for (let key in data) {
          newOrders.push({
            ...data[key],
            id: key,
          });
        }

        return newOrders;
      });
    console.log("DATA", data);
    dispatch({
      type: UPDATE_ORDERS,
      data: data,
    });
  } catch (err) {
    console.log(err);
  }
}
