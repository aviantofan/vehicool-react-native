const popularState = {
  popularVehicle: {},
  isLoading: false,
  err: false,
  errMsg: "",
  successMsg: null,
};

const popular = (state = popularState, action) => {
  switch (action.type) {
  case "GET_POPULAR": {
    state.popularVehicle = action.payload.results;
    return { ...state };
  }
  default: {
    return { ...state };
  }
  }
};

export default popular;