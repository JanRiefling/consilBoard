import React, {useContext, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import {ClientDispatchContext, ClientStateContext} from "../../context/clients/ClientContext";
import ClientCard from "../ClientCard/ClientCard";
import {fetchClients} from "../../context/clients/client-actions";

export default function ConsilBoard(){


    const { clients, fetchStatus } = useContext(ClientStateContext);
    const dispatch = useContext(ClientDispatchContext);

    useEffect(() => {
        if (!fetchStatus) {
            fetchClients(dispatch);
        }
    }, [fetchStatus, dispatch]);

    return (
        <Grid>
            {clients.map((client) => (
                <ClientCard
                    key={client.id}
                    client={client}
                    onDeleteSuccess={() => console.log('delete')}
                />
            ))}
        </Grid>
    )
}