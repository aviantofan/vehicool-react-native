const initialState = {
  isLoading: false,
  err: false,
  errMsg: '',
  successMsg: null,
  list: {},
};

const listVehicle = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_VEHICLE_LIST': {
    state.list = action.payload.results;
    return { ...state };
  }
  default: {
    return { ...state };
  }
  }
};

export default listVehicle;