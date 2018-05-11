const initialAuthState = { isLoggedIn: false };

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

const AuthReducer = (state = initialAuthState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLoggedIn: true };
        case LOGIN_FAILURE:
            return { ...state, isLoggedIn: false };
        case LOGOUT:
            return { ...state, isLoggedIn: false };
        default:
            return state;
    }
}

export const LoggingIn = (data) => {
    if (data && data.pin) {
        return { type: LOGIN_SUCCESS }
    } else {
        return { type: LOGIN_FAILURE }
    }
}

export default AuthReducer;