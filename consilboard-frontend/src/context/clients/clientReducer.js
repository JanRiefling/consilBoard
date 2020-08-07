import {
    ADD_CLIENT,
    ADD_CLIENT_FAILED,
    ADD_CLIENT_SUCCESS,
    ADD_COMMENT, ADD_COMMENT_FAILED, ADD_COMMENT_SUCCESS, DELETE_CLIENT, DELETE_CLIENT_FAILED,
    DELETE_CLIENT_SUCCESS,
    FETCH_CLIENTS,
    FETCH_CLIENTS_FAILED,
    FETCH_CLIENTS_SUCCESS, FETCH_COMMENTS, FETCH_COMMENTS_FAILED, FETCH_COMMENTS_SUCCESS, REMOVE_COMMENT,
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
        case DELETE_CLIENT:
            return {...state, removeStatus: 'PENDING'};
        case DELETE_CLIENT_SUCCESS:
            return {
                ...state,
                removeStatus: 'SUCCESS',
                clients: state.clients.filter((client) => {
                    return client.id !== action.payload;
                }),
            };
        case DELETE_CLIENT_FAILED:
            return {...state, removeStatus: 'FAILED'};
        case FETCH_COMMENTS:
            return {...state, commentStatus: 'PENDING'};
        case FETCH_COMMENTS_SUCCESS:
            return {...state, commentStatus: 'SUCCESS', comments: action.payload};
        case FETCH_COMMENTS_FAILED:
            return {...state, commentStatus: 'FAILED'};
        case ADD_COMMENT:
            return {...state, addCommentStatus: 'PENDING'};
        case ADD_COMMENT_SUCCESS:
            return {...state, addCommentStatus: 'SUCCESS', comments:[...state.comments, action.payload], };
        case ADD_COMMENT_FAILED:
            return {...state, addCommentStatus: 'FAILED'};
        case REMOVE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter((comment) => {
                    return comment.id !== action.payload;
                }),
            };
        default:
            return state;
    }
}