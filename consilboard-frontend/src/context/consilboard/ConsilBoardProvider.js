import React, {useReducer} from "react";
import {ConsilBoardDispatchContext, ConsilBoardStateContext} from "./ConsilBoardContext";



export const FETCH_CONSILBOARD = 'FETCH_CONSILBOARD';
export const FETCH_CONSILBOARD_SUCCESS = 'FETCH_CONSILBOARD_SUCCESS';
export const FETCH_CONSILBOARD_FAILED = 'FETCH_CONSILBOARD_FAILED';
export const ADD_CONSILBOARD = 'ADD_CONSILBOARD';
export const ADD_CONSILBOARD_SUCCESS = 'ADD_CONSILBOARD_SUCCESS';
export const ADD_CONSILBOARD_FAILED = 'ADD_CONSILBOARD_FAILED';
export const FETCH_CLIENTLIST = 'FETCH_CLIENTLIST';
export const FETCH_CLIENTLIST_SUCCESS = 'FETCH_CLIENTLIST_SUCCESS';
export const FETCH_CLIENTLIST_FAILED = 'FETCH_CLIENTLIST_FAILED';
export const ADD_CLIENT_TO_CLIENTLIST = 'ADD_CLIENT_TO_CLIENTLIST';
export const ADD_CLIENT_TO_CLIENTLIST_SUCCESS = 'ADD_CLIENT_TO_CLIENTLIST_SUCCESS';
export const ADD_CLIENT_TO_CLIENTLIST_FAILED = 'ADD_CLIENT_TO_CLIENTLIST_FAILED';
export const DELETE_CLIENT_FROM_LIST = 'DELETE_CLIENT_FROM_LIST';
export const DELETE_CLIENT_FROM_LIST_FAILED = 'DELETE_CLIENT_FROM_LIST_FAILED';
export const DELETE_CLIENT_FROM_LIST_SUCCESS = 'DELETE_CLIENT_FROM_LIST_SUCCESS';



const initialState = {
    fetchBoardStatus: undefined,
    addBoardStatus: undefined,
    fetchClientListStatus: undefined,
    addClientToBoardStatus: undefined,
    consilboard: [],
    clientList: [],
};

function consilBoardReducer(state, action) {
    switch(action.type) {
        case FETCH_CONSILBOARD:
            return {...state, fetchBoardStatus: 'PENDING'};
        case FETCH_CONSILBOARD_SUCCESS:
            return {...state, fetchBoardStatus: 'SUCCESS', consilboard: action.payload};
        case FETCH_CONSILBOARD_FAILED:
            return {...state, fetchBoardStatus: 'FAILED'};
        case FETCH_CLIENTLIST:
            return {...state, fetchClientListStatus: 'PENDING'};
        case FETCH_CLIENTLIST_SUCCESS:
            return {...state, fetchClientListStatus: 'SUCCESS', clientList: action.payload};
        case FETCH_CLIENTLIST_FAILED:
            return {...state, fetchClientListStatus: 'FAILED'};
        case ADD_CLIENT_TO_CLIENTLIST:
            return { ...state, addClientToBoardStatus: 'PENDING' };
        case ADD_CLIENT_TO_CLIENTLIST_SUCCESS:
            return { ...state, addClientToBoardStatus: 'SUCCESS', clientList: [...state.clientList, action.payload],};
        case ADD_CLIENT_TO_CLIENTLIST_FAILED:
            return { ...state, addClientToBoardStatus: 'FAILED' };
        case DELETE_CLIENT_FROM_LIST:
            return {...state, deleteFromListStatus: 'PENDING'};
        case DELETE_CLIENT_FROM_LIST_SUCCESS:
            return {...state, clientList: state.clientList.filter((client) =>{
                    return client !== action.payload;
                }),
            };
        case DELETE_CLIENT_FROM_LIST_FAILED:
            return {...state, deleteFromListStatus: 'FAILED'};
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


