
import {
    ADD_CONSILBOARD,
    ADD_CONSILBOARD_FAILED,
    ADD_CONSILBOARD_SUCCESS,
    FETCH_CONSILBOARD, FETCH_CONSILBOARD_FAILED, FETCH_CONSILBOARD_SUCCESS
} from "./ConsilBoardProvider";
import {getConsilBoard, putConsilBoard} from "../../utils/consilBoard-utils";

export async function addConsilBoard(dispatch, consilBoardName) {
    dispatch({ type: ADD_CONSILBOARD });
    try {
        const consilboard = await putConsilBoard(consilBoardName);
        dispatch({ type: ADD_CONSILBOARD_SUCCESS, payload: consilboard });
    } catch (error) {
        dispatch({ type: ADD_CONSILBOARD_FAILED, payload: error });
    }
}

export async function getPersonalConsilBoard(dispatch, consilBoardName) {
    dispatch({ type: FETCH_CONSILBOARD });
    try {
        const consilboard = await getConsilBoard(consilBoardName);
        dispatch({ type: FETCH_CONSILBOARD_SUCCESS, payload: consilboard });
    } catch (error) {
        dispatch({ type: FETCH_CONSILBOARD_FAILED, payload: error });
    }
}

