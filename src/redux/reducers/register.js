const initialState = {
  message: "",
  email: "",
  isSuccess: false,
  errMessage: "",
  isError: false,
};

const register = (state = initialState, action) => {
  switch (action.type) {
  case "REGISTER_CLEAR": {
    state.message = "";
    state.errMessage = "";
    state.email = "";
    state.isError = false;
    state.isSuccess = false;
    return { ...state };
  }
  case "AUTH_REGISTER": {
    return {
      ...state,
      message: action.payload.message,
      isSuccess: true,
    };
  }
  case "REGISTER_ERR": {
    state.isError = true;
    state.isSuccess = false;
    state.errMessage = action.payload;
    return { ...state };
  }
  default: {
    return { ...state };
  }
  }
};

export default register;
