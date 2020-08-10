import {fetchAllClients, getComments, putClient, putComment, removeClientFromDb} from '../../utils/client-utils';

export const FETCH_CLIENTS = 'FETCH_CLIENTS';
export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS';
export const FETCH_CLIENTS_FAILED = 'FETCH_CLIENTS_FAILED';
export const ADD_CLIENT = 'ADD_CLIENT';
export const ADD_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS';
export const ADD_CLIENT_FAILED = 'ADD_CLIENT_FAILED';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const DELETE_CLIENT_SUCCESS = 'DELETE_CLIENT_SUCCESS';
export const DELETE_CLIENT_FAILED = 'DELETE_CLIENT_FAILED';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILED = 'FETCH_COMMENTS_FAILED';
export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILED = 'ADD_COMMENT_FAILED';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


export async function fetchClients(dispatch) {
    dispatch({type: FETCH_CLIENTS});
    try {
        const clients = await fetchAllClients();
        dispatch({type: FETCH_CLIENTS_SUCCESS, payload: clients});
    } catch (error) {
        dispatch({type: FETCH_CLIENTS_FAILED, payload: error});
    }
}

export async function addClient(dispatch, clientname) {
    dispatch({type: ADD_CLIENT});
    try {
        const client = await putClient(clientname);
        dispatch({type: ADD_CLIENT_SUCCESS, payload: client});
    } catch (error) {
        dispatch({type: ADD_CLIENT_FAILED, payload: error});
    }
}

export async function deleteClientFromDB(dispatch, clientname) {
    dispatch({type: DELETE_CLIENT});
    try {
        await removeClientFromDb(clientname);
        dispatch({type: DELETE_CLIENT_SUCCESS});
    } catch (error) {
        dispatch({type: DELETE_CLIENT_FAILED});
    }
}

export async function addComment(dispatch, comment, id) {
    dispatch({type: ADD_COMMENT});
    try {
        const comments = await putComment(comment, id);
        dispatch({type: ADD_COMMENT_SUCCESS, payload: comments});
    } catch (error) {
        dispatch({type: ADD_COMMENT_FAILED});
    }
}

export async function fetchComments(dispatch, id) {
    dispatch({type: FETCH_COMMENTS});
    try {
        const comments = await getComments(id);
        dispatch({type: FETCH_COMMENTS_SUCCESS, payload: comments});
    } catch (error) {
        dispatch({type: FETCH_CLIENTS_FAILED, payload: error});
    }
}








