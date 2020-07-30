import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React, {useContext, useEffect} from "react";
import ConsilBoardMenuBar from "../components/ConsilBoardMenuBar/ConsilBoardMenuBar";
import {getDecodedJWTToken} from "../utils/jwt-utils";
import ConsilBoard from "../components/ConsilBoard/ConsilBoard";
import {getConsilBoardClientsList, getPersonalConsilBoard} from "../context/consilboard/consilBoard-action";
import {ConsilBoardDispatchContext} from "../context/consilboard/ConsilBoardContext";


function ConsilBoardUserPage(){

    const dispatch = useContext(ConsilBoardDispatchContext);

    useEffect(() => {
        getPersonalConsilBoard(dispatch);
        getConsilBoardClientsList(dispatch);
    },[dispatch])


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