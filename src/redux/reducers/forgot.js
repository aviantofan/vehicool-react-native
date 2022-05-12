const initialState = {
    message: null,
    isError: false,
    isSuccess: false,
    errMessage: '',
};

const forgot = (state = initialState, action) => {
    switch (action.type) {
    case 'FORGOT_CLEAR': {
        state.message = '';
        state.errMessage = '';
        state.email = '';
        state.isError = false;
        state.isSuccess = false;
        return { ...state };
    }
    case 'AUTH_FORGOT': {
        state.message = action.payload.message;
        state.isSuccess = true;
        return { ...state };
    }
    case 'AUTH_CHANGE_PASSWORD': {
        state.message = action.payload.message;
        state.isSuccess = true;
        return { ...state };
    }
    case 'AUTH_ERROR': {
        state.isError = true;
        state.errMessage = action.payload;
        return { ...state };
    }
    case 'AUTH_CLEAR_ERR': {
        return {
            ...state,
            isError: false,
            errMessage: ''
        };
    }
    default: {
        return { ...state };
    }
    }
};

export default forgot;