const initialState = {
  message: null,
  isError: false,
  vehicle: [],
};

const detail = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_VEHICLE_DETAIL': {
      state.vehicle = action.payload;
      return { ...state };
    }
    case 'VEHICLES_CLEAR': {
      state.isError = false;
      state.errMsg = null;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default detail
