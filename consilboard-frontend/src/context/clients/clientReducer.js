import {
    ADD_CLIENT,
    ADD_CLIENT_FAILED,
    ADD_CLIENT_SUCCESS,
    ADD_CLIENT_TO_CONSILBOARD,
    ADD_CLIENT_TO_CONSILBOARD_FAILED,
    ADD_CLIENT_TO_CONSILBOARD_SUCCESS,
    DELETE_CLIENT_SUCCESS,
    FETCH_CLIENTS,
    FETCH_CLIENTS_FAILED,
    FETCH_CLIENTS_SUCCESS,
    REMOVE_CLIENT_FROM_CONSILBOARD
} from './client-actions';

export default function clientReducer(state, action) {
    switch (action.type) {
        case FETCH_CLIENTS:
            return {...state, fetchStatus: 'PENDING'};
        case FETCH_CLIENTS_SUCCESS:
            return {...state, fetchStatus: 'SUCCESS', clients: action.payload};
        case FETCH_CLIENTS_FAILED:
            return {...state, fetchStatus: 'FAILED'};
        case ADD_CLIENT:
            return {...state, addStatus: 'PENDING'};
        case ADD_CLIENT_SUCCESS:
            return {...state, addStatus: 'SUCCESS', clients: [...state.clients, action.payload],};
        case ADD_CLIENT_FAILED:
            return {...state, addStatus: 'FAILED'};
        case ADD_CLIENT_TO_CONSILBOARD:
            return {...state, addToBoardStatus: 'PENDING'};
        case ADD_CLIENT_TO_CONSILBOARD_SUCCESS:
            return {...state, addToBoardStatus: 'SUCCESS', clientsToBoard: [...state.clientsToBoard, action.payload],};
        case ADD_CLIENT_TO_CONSILBOARD_FAILED:
            return {...state, addAddToBoardStatus: 'FAILED'};
        case REMOVE_CLIENT_FROM_CONSILBOARD:
            return {
                ...state, clientsToBoard: state.clientsToBoard.filter((client) => {
                    return client.id !== action.payload;
                }),
            };
        case DELETE_CLIENT_SUCCESS:
            return {
                ...state,
                clients: state.clients.filter((client) => {
                    return client.id !== action.payload;
                }),
            };
        default:
            return state;
    }
}