import React, {useReducer} from "react";
import {ConsilBoardDispatchContext, ConsilBoardStateContext} from "./ConsilBoardContext";


export const FETCH_CONSILBOARD = 'FETCH_CONSILBOARD';
export const FETCH_CONSILBOARD_SUCCESS = 'FETCH_CONSILBOARD_SUCCESS';
export const FETCH_CONSILBOARD_FAILED = 'FETCH_CONSILBOARD_FAILED';
export const ADD_CONSILBOARD = 'ADD_CONSILBOARD';
export const ADD_CONSILBOARD_SUCCESS = 'ADD_CONSILBOARD_SUCCESS';
export const ADD_CONSILBOARD_FAILED = 'ADD_CONSILBOARD_FAILED';

const initialState = {
    fetchBoardStatus: undefined,
    addBoardStatus: undefined,
};

function consilBoardReducer(state, action) {
    switch(action.type) {
        case FETCH_CONSILBOARD:
            return {...state, fetchBoardStatus: 'PENDING'};
        case FETCH_CONSILBOARD_SUCCESS:
            return {...state, fetchBoardStatus: 'SUCCESS', consilboard: action.payload};
        case FETCH_CONSILBOARD_FAILED:
            return {...state, fetchBoardStatus: 'FAILED'};
        case ADD_CONSILBOARD:
            return { ...state, addBoardStatus: 'PENDING' };
        case ADD_CONSILBOARD_SUCCESS:
            return { ...state, addBoardStatus: 'SUCCESS', consilboard: [...state.consilboard, action.payload],};
        case ADD_CONSILBOARD_FAILED:
            return { ...state, addBoardStatus: 'FAILED' };
        default:
            return state;
    }
}

function ConsilBoardProvider({children}) {

    const [state, dispatch] = useReducer(consilBoardReducer, initialState);

    return (
        <ConsilBoardStateContext.Provider value={state}>
            <ConsilBoardDispatchContext.Provider value={dispatch}>
                {children}
            </ConsilBoardDispatchContext.Provider>
        </ConsilBoardStateContext.Provider>
    );

}

export default ConsilBoardProvider;


