
import {
    ADD_CONSILBOARD,
    ADD_CONSILBOARD_FAILED,
    ADD_CONSILBOARD_SUCCESS, FETCH_CLIENTLIST, FETCH_CLIENTLIST_SUCCESS,
    FETCH_CONSILBOARD, FETCH_CONSILBOARD_FAILED, FETCH_CONSILBOARD_SUCCESS
} from "./ConsilBoardProvider";
import {getConsilBoard, getConsilBoardClients, putConsilBoard} from "../../utils/consilBoard-utils";
import {FETCH_CLIENTS_FAILED} from "../clients/client-actions";

export async function addConsilBoard(dispatch, consilBoardName) {
    dispatch({ type: ADD_CONSILBOARD });
    try {
        const consilboard = await putConsilBoard(consilBoardName);
        dispatch({ type: ADD_CONSILBOARD_SUCCESS, payload: consilboard });
    } catch (error) {
        dispatch({ type: ADD_CONSILBOARD_FAILED, payload: error });
    }
}

export async function getPersonalConsilBoard(dispatch) {
    dispatch({ type: FETCH_CONSILBOARD });
    try {
        const consilboard = await getConsilBoard();
        dispatch({ type: FETCH_CONSILBOARD_SUCCESS, payload: consilboard });
    } catch (error) {
        dispatch({ type: FETCH_CONSILBOARD_FAILED, payload: error });
    }
}

export async function getConsilBoardClientsList(dispatch) {
    dispatch({ type: FETCH_CLIENTLIST });
    try {
        const clientList = await getConsilBoardClients();
        dispatch({ type: FETCH_CLIENTLIST_SUCCESS, payload: clientList});
    } catch (error) {
        dispatch({ type: FETCH_CLIENTS_FAILED, payload: error });
    }
}

