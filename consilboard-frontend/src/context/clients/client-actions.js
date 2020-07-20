import { fetchAllClients} from '../../utils/clientCard-utils';

export const FETCH_CLIENTS = 'FETCH_IDEAS';
export const FETCH_CLIENTS_SUCCESS = 'FETCH_IDEAS_SUCCESS';
export const FETCH_CLIENTS_FAILED = 'FETCH_IDEAS_FAILED';


export async function fetchClients(dispatch) {
    dispatch({ type: FETCH_CLIENTS });
    try {
        const clients = await fetchAllClients();
        dispatch({ type: FETCH_CLIENTS_SUCCESS, payload: clients });
    } catch (error) {
        dispatch({ type: FETCH_CLIENTS_FAILED, payload: error });
    }
}