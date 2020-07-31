import Grid from "@material-ui/core/Grid";
import React, {useContext, useEffect} from "react";
import ConsilBoardMenuBar from "../components/ConsilBoardMenuBar/ConsilBoardMenuBar";
import ConsilBoard from "../components/ConsilBoard/ConsilBoard";
import {getConsilBoardClientsList, getPersonalConsilBoard} from "../context/consilboard/consilBoard-action";
import {ConsilBoardDispatchContext} from "../context/consilboard/ConsilBoardContext";
import {makeStyles} from "@material-ui/core/styles";




const useStyles = makeStyles((theme) => ({
    consilBoardPage: {

    },
    consilBoardSetting: {
        padding: "0.3rem",
        /*boxShadow: '18px 20px 26px -17px rgba(0,0,0,0.35)',*/
    },
}));

function ConsilBoardUserPage(){
    const classes = useStyles();
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
            direction="column"
        >
            <Grid item>
                <ConsilBoardMenuBar />
            </Grid>
            <Grid item className={classes.consilBoardSetting}>
                <ConsilBoard />
            </Grid>
        </Grid>
    );
}

export default ConsilBoardUserPage;