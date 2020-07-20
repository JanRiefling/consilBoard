import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React, {useContext, useEffect} from "react";
import ConsilBoard from "../components/ConsilBoard";
import {fetchClients} from "../context/clients/client-actions";
import {ClientDispatchContext, ClientStateContext} from "../context/clients/ClientContext";

function ConsilBoardUserPage(){

    const { clients, fetchStatus } = useContext(ClientStateContext);
    const dispatch = useContext(ClientDispatchContext);

    useEffect(() => {
        if (!fetchStatus) {
            fetchClients(dispatch);
        }
    }, [fetchStatus, dispatch]);

    return (
        <Grid
            container
            alignContent="center"
            justify="center"
        >
        <Typography>Hello User!</Typography>
        <Button>ConsilBoard</Button>
        <Button>Clients</Button>
            <ConsilBoard/>
            {clients}
        </Grid>
    );
}

export default ConsilBoardUserPage;