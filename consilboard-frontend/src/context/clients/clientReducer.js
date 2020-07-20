import {
    FETCH_CLIENTS,
    FETCH_CLIENTS_FAILED,
    FETCH_CLIENTS_SUCCESS
} from './client-actions';

export default function clientReducer(state, action) {
    switch (action.type) {
        case FETCH_CLIENTS:
            return { ...state, fetchStatus: 'PENDING' };
        case FETCH_CLIENTS_SUCCESS:
            return { ...state, fetchStatus: 'SUCCESS', ideas: action.payload };
        case FETCH_CLIENTS_FAILED:
            return { ...state, fetchStatus: 'FAILED' };
        default:
            return state;
    }
}