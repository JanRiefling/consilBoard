import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React, {useContext, useEffect} from "react";
import ConsilBoard from "../components/ConsilBoard";
import {ClientDispatchContext, ClientStateContext} from "../context/clients/ClientContext";
import {fetchAllClients} from "../utils/clientCard-utils";

function ConsilBoardUserPage(){

    const { clients, fetchStatus } = useContext(ClientStateContext);
    const dispatch = useContext(ClientDispatchContext);

    useEffect(() => {
        if (!fetchStatus) {
            fetchAllClients(dispatch);
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