import * as actionTypes from "../actions/actions";

const initailState = {
  selectedIngredients: [],
  total: 0,
  ingredients: [],
  orders: [],
  user: null,
};

//helpers
const totalSet = (arr) => {
  if (arr.length !== 0 && arr !== undefined) {
    return arr.map((e) => e.price).reduce((acc, c) => acc + c);
  }
  return 0;
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT: {
      const newIng = [...state.selectedIngredients, action.ing];
      return {
        ...state,
        selectedIngredients: newIng,
        total: totalSet(newIng),
      };
    }

    case actionTypes.REMOVE_INGREDIENT: {
      let oldState = [...state.selectedIngredients];
      let indexOfTop = oldState.findIndex((i) => i.type === action.ing.type);
      if (indexOfTop > -1 && oldState.length === 1) {
        oldState.splice(indexOfTop, 1);
        return {
          ...state,
          selectedIngredients: [...oldState],
          total: totalSet(oldState),
        };
      }

      if (indexOfTop > -1) {
        oldState.splice(indexOfTop, 1);
        return {
          ...state,
          selectedIngredients: oldState,
          total: totalSet(oldState),
        };
      }
      return state;
    }

    case actionTypes.UPDATE_INGREDIENTS: {
      return {
        ...state,
        ingredients: action.data,
      };
    }

    case actionTypes.UPDATE_ORDERS: {
      return {
        ...state,
        orders: action.data,
      };
    }

    case actionTypes.RESET_SELECTED: {
      return {
        ...state,
        selectedIngredients: [],
        total: 0,
      };
    }
    case actionTypes.LOG_IN_USER: {
      return {
        ...state,
        user: action.user,
      };
    }

    case actionTypes.LOG_OUT_USER: {
      return {
        ...state,
        user: null,
      };
    }
    case actionTypes.SET_LOGGED_IN_USER: {
      return {
        ...state,
        user: action.user,
      };
    }
    default:
      return state;
  }
};

export default reducer;
