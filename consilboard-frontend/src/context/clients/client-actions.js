import {fetchAllClients, putClient} from '../../utils/client-utils';

export const FETCH_CLIENTS = 'FETCH_CLIENTS';
export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS';
export const FETCH_CLIENTS_FAILED = 'FETCH_CLIENTS_FAILED';
export const ADD_CLIENT = 'ADD_CLIENT';
export const ADD_CLIENT_SUCCESS = 'ADD_CLIENT_SUCCESS';
export const ADD_CLIENT_FAILED = 'ADD_CLIENT_FAILED';
export const ADD_CLIENT_TO_CONSILBOARD = 'ADD_CLIENT_TO_CONSILBOARD';
export const ADD_CLIENT_TO_CONSILBOARD_SUCCESS = 'ADD_CLIENT_TO_CONSILBOARD_SUCCESS';
export const ADD_CLIENT_TO_CONSILBOARD_FAILED = 'ADD_CLIENT_TO_CONSILBOARD_FAILED';
export const REMOVE_CLIENT_FROM_CONSILBOARD = 'REMOVE_CLIENT_FROM_CONSILBOARD';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const DELETE_CLIENT_SUCCESS = 'DELETE_CLIENT_SUCCESS';
export const DELETE_CLIENT_FAILED = 'DELETE_CLIENT_FAILED';


export async function fetchClients(dispatch) {
    dispatch({ type: FETCH_CLIENTS });
    try {
        const clients = await fetchAllClients();
        dispatch({ type: FETCH_CLIENTS_SUCCESS, payload: clients });
    } catch (error) {
        dispatch({ type: FETCH_CLIENTS_FAILED, payload: error });
    }
}

export async function addClient(dispatch, clientname) {
    dispatch({ type: ADD_CLIENT });
    try {
        const client = await putClient(clientname);
        dispatch({ type: ADD_CLIENT_SUCCESS, payload: client });
    } catch (error) {
        dispatch({ type: ADD_CLIENT_FAILED, payload: error });
    }
}






