import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ConsilBoardMenuBar from "../components/ConsilBoardMenuBar/ConsilBoardMenuBar";
import {getDecodedJWTToken} from "../utils/jwt-utils";
import ConsilBoard from "../components/ConsilBoard/ConsilBoard";


function ConsilBoardUserPage(){

    return (
        <Grid
            container
            alignContent="center"
            justify="center"
        >
            <Grid item >
        <Typography>{'Hello ' + getDecodedJWTToken().sub}</Typography>
            </Grid>
            <Grid item >
            <ConsilBoardMenuBar />
            </Grid>
            <Grid item>
                <ConsilBoard />
            </Grid>
        </Grid>
    );
}

export default ConsilBoardUserPage;