import {
    ADD_CLIENT_TO_CLIENTLIST,
    ADD_CLIENT_TO_CLIENTLIST_FAILED,
    ADD_CLIENT_TO_CLIENTLIST_SUCCESS,
    ADD_CONSILBOARD,
    ADD_CONSILBOARD_FAILED,
    ADD_CONSILBOARD_SUCCESS,
    DELETE_CLIENT_FROM_LIST,
    DELETE_CLIENT_FROM_LIST_FAILED,
    DELETE_CLIENT_FROM_LIST_SUCCESS,
    FETCH_CLIENTLIST,
    FETCH_CLIENTLIST_FAILED,
    FETCH_CLIENTLIST_SUCCESS,
    FETCH_CONSILBOARD,
    FETCH_CONSILBOARD_FAILED,
    FETCH_CONSILBOARD_SUCCESS
} from "./ConsilBoardProvider";
import {
    getConsilBoard,
    getConsilBoardClients,
    putClientToConsilBoard,
    putConsilBoard,
    removeClientFromConsilBoard
} from "../../utils/consilBoard-utils";

export async function addConsilBoard(dispatch, consilBoardName) {
    dispatch({type: ADD_CONSILBOARD});
    try {
        const consilboard = await putConsilBoard(consilBoardName);
        dispatch({type: ADD_CONSILBOARD_SUCCESS, payload: consilboard});
    } catch (error) {
        dispatch({type: ADD_CONSILBOARD_FAILED, payload: error});
    }
}

export async function getPersonalConsilBoard(dispatch) {
    dispatch({type: FETCH_CONSILBOARD});
    try {
        const consilboard = await getConsilBoard();
        dispatch({type: FETCH_CONSILBOARD_SUCCESS, payload: consilboard});
    } catch (error) {
        dispatch({type: FETCH_CONSILBOARD_FAILED, payload: error});
    }
}

export async function getConsilBoardClientsList(dispatch) {
    dispatch({type: FETCH_CLIENTLIST});
    try {
        const clientList = await getConsilBoardClients();
        dispatch({type: FETCH_CLIENTLIST_SUCCESS, payload: clientList});
    } catch (error) {
        dispatch({type: FETCH_CLIENTLIST_FAILED, payload: error});
    }

}

export async function deleteClientsFromConsilBoard(dispatch, client) {
    dispatch({type: DELETE_CLIENT_FROM_LIST});
    try {
        await removeClientFromConsilBoard(client);
        dispatch({type: DELETE_CLIENT_FROM_LIST_SUCCESS, payload: client});
    } catch (error) {
        dispatch({type: DELETE_CLIENT_FROM_LIST_FAILED, payload: error});
    }
}

export async function addClientToConsilBoard(dispatch, client) {
    dispatch({type: ADD_CLIENT_TO_CLIENTLIST});
    try {
        await putClientToConsilBoard(client);
        dispatch({type: ADD_CLIENT_TO_CLIENTLIST_SUCCESS, payload: client});
    } catch (error) {
        dispatch({type: ADD_CLIENT_TO_CLIENTLIST_FAILED, payload: error});
    }
}

