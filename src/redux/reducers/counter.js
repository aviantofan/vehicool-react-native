const buttonsState = {
  value: 0,
};

const button = (state = buttonsState, action) => {
  switch (action.type) {
  case "COUNTER_INCREMENT": {
    state.value = state.value + 1;
    return { ...state };
  }
  case "COUNTER_DECREMENT": {
    if (state.value > 0) {
      state.value = state.value - 1;
      return { ...state };
    }
  }
  default: {
    return { ...state };
  }
  }
};

export default button;
