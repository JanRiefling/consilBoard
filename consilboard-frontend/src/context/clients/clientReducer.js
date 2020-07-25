import {
    ADD_CLIENT,
    ADD_CLIENT_FAILED,
    ADD_CLIENT_SUCCESS, DELETE_CLIENT_SUCCESS
} from './client-actions';

export default function clientReducer(state, action) {
    switch (action.type) {
        case ADD_CLIENT:
            return { ...state, addStatus: 'PENDING' };
        case ADD_CLIENT_SUCCESS:
            return { ...state, addStatus: 'SUCCESS', client: [...state.clients, action.payload],};
        case ADD_CLIENT_FAILED:
            return { ...state, addStatus: 'FAILED' };
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