import React, {useReducer} from "react";
import {SignUpUserDispatchContext, SignUpUserStateContext} from "./SignUpContext";

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILED = 'SIGN_UP_FAILED';

const initialState = {
    authStatus: undefined,
};

function reducer(state, action){
    switch (action.type) {
        case SIGN_UP:
            return {...state, authStatus: 'PENDING'};
        case SIGN_UP_SUCCESS:
            return {...state, authStatus: 'SUCCESS', signUpData: action.payload};
        case SIGN_UP_FAILED:
            return {...state, authStatus: 'FAILED'};
        default:
            return state;
    }
}

function SignUpUserContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <SignUpUserStateContext.Provider value={state}>
            <SignUpUserDispatchContext.Provider value={dispatch}>
                {children}
            </SignUpUserDispatchContext.Provider>
        </SignUpUserStateContext.Provider>
    );
}

export default SignUpUserContextProvider;