export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';

export default function reducer(state, action){
    switch (action.type) {
        case SIGN_UP:
            return {...state, fetchStatus: 'PENDING'};
        case SIGN_UP_SUCCESS:
            return {...state, fetchStatus: 'SUCCESS', signUpData: action.payload};
        case SIGN_UP_FAIL:
            return {...state, fetchStatus: 'FAILED'};
        default:
            return state;
    }
}