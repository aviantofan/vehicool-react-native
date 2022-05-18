const initialState = {
  dataTransaction: [],
  histories: {},
  message: null,
  isSuccess: false,
  isError: false,
  errMessage: '',
};

const transaction = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_DATA_TRANSACTION': {
    state.dataTransaction = action.payload;
    return { ...state };
  }
  case 'INPUT_TRANSACTION': {
    state.message = action.payload.message;
    state.isSuccess = true;
    return { ...state };
  }
  case 'GET_HISTORY': {
    state.histories = action.payload;
    state.isSuccess = true;
    return { ...state };
  }
  case 'TRANSACTION_ERR': {
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

export default transaction;