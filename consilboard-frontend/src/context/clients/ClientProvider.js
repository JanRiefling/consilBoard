import {ClientDispatchContext, ClientStateContext} from './ClientContext';
import React, {useReducer} from 'react';
import clientReducer from './clientReducer';

export default function ClientProvider({children}) {
    const [state, dispatch] = useReducer(clientReducer, {
        clients: [],
        comments: [],
        fetchStatus: undefined,
        addStatus: undefined,
        removeStatus: undefined,
        commentStatus: undefined,
        addCommentStatus: undefined,
    });

    return (
        <ClientStateContext.Provider value={state}>
            <ClientDispatchContext.Provider value={dispatch}>
                {children}
            </ClientDispatchContext.Provider>
        </ClientStateContext.Provider>
    );
}