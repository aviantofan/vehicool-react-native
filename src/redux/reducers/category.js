const categoryState = {
  cars: {},
  motorbike: {},
  bike: {},
  isLoading: false,
  err: false,
  errMsg: '',
  successMsg: null,
};

const category = (state = categoryState, action) => {
  switch (action.type) {
    case 'GET_CARS': {
      state.cars = action.payload.results;
      return { ...state };
    }
    case 'GET_MOTORBIKE': {
      state.motorbike = action.payload.results;
      return { ...state };
    }
    case 'GET_BIKE': {
      state.bike = action.payload.results;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export default category;
