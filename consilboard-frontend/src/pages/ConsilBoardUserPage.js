import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ConsilBoardMenuBar from "../components/ConsilBoardMenuBar/ConsilBoardMenuBar";
import {getDecodedJWTToken} from "../utils/jwt-utils";


function ConsilBoardUserPage(){

    return (
        <Grid
            container
            alignContent="center"
            justify="center"
        >
        <Typography>{'Hello ' + getDecodedJWTToken().sub}</Typography>
            <ConsilBoardMenuBar />
        </Grid>
    );
}

export default ConsilBoardUserPage;