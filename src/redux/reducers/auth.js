const initialState = {
  token: null,
  userData: null,
  message: null,
  isError: false,
  errMessage: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_LOGIN': {
      state.token = action.payload;
      return { ...state };
    }
    case 'AUTH_LOGOUT': {
      return { ...initialState };
    }
    case 'GET_PROFILE': {
      state.userData = action.payload
      return { ...state };
    }
    case 'UPDATE_PROFILE': {
      state.userData = action.payload;
      state.message = action.payload.message;
      state.errMsg = null;
      state.isError = false;
      return { ...state };
    }
    case 'AUTH_ERROR': {
      state.token = null;
      state.isError = true;
      state.errMessage = action.payload;
      return { ...state };
    }
    case 'AUTH_CLEAR_ERR': {
      return { ...state, isError: false, errMessage: '' };
    }
    default: {
      return { ...state };
    }
  }
};

export default auth;
