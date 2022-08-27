import * as types from "./actionTypes";

const intialState = {
  isAuth: false,
  token: "",
  isError: false,
  isLoading: false,
};
export const reducer = (state = intialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.LOGIN_SUCCESS: {
      return { ...state, isLoading: false, isAuth: true, token: payload.id };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: "",
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
