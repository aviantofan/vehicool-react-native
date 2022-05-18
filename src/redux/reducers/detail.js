const initialState = {
  message: null,
  isError: false,
  errMsg: null,
  vehicle: [],
};

const detail = (state = initialState, action) => {
  switch (action.type) {

  case "GET_VEHICLE_DETAIL": {
    state.vehicle = action.payload;
    return { ...state };
  }
  case "UPDATE_VEHICLE_DETAIL": {
    state.vehicle = action.payload.result;
    state.message = action.payload.message;
    state.errMsg = null;
    state.isError = false;
    return { ...state };
  }
  case "VEHICLES_CLEAR": {
    state.vehicle = [];
    state.isError = false;
    state.errMsg = null;
    return { ...state };
  }
  default: {
    return { ...state };
  }
  }
};

export default detail;
