const initialState = {
  vehicle: null,
  message: null,
  isError: false,
  errMessage: '',
};

const addVehicle = (state = initialState, action) => {
  switch (action.type) {
  case 'ADD_VEHICLE': {
    state.vehicle = action.payload;
    state.message = action.payload.message;
    state.errMsg = null;
    state.isError = false;
    return { ...state };
  }
  case 'VEHICLES_ERROR': {
    state.message = null;
    state.isError = true;
    state.errMsg = action.payload;
    return { ...state };
  }
  case 'VEHICLES_CLEAR': {
    state.message = null;
    state.isError = false;
    state.errMsg = null;
    return { ...state };
  }
  default: {
    return { ...state };
  }
  }
};