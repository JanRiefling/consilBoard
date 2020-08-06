import Grid from "@material-ui/core/Grid";
import React, {useContext, useEffect} from "react";
import ConsilBoard from "../components/ConsilBoard/ConsilBoard";
import {getConsilBoardClientsList, getPersonalConsilBoard} from "../context/consilboard/consilBoard-action";
import {ConsilBoardDispatchContext} from "../context/consilboard/ConsilBoardContext";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ConsilBoardMenu from "../components/ConsilBoardMenuBar/ConsilBoardMenu";

const useStyles = makeStyles((theme) => ({
    consilBoardSetting: {
        padding: "0.3rem",
        borderRadius: 5,
        /*boxShadow: '0px 10px 12px -10px rgba(0,0,0,0.35)',*/
    },

    menuButtons: {
        paddingTop: 40,
    }
}));

function ConsilBoardUserPage() {
    const classes = useStyles();
    const dispatch = useContext(ConsilBoardDispatchContext);

    useEffect(() => {
        getPersonalConsilBoard(dispatch);
        getConsilBoardClientsList(dispatch);
    }, [dispatch])


    return (
        <Grid
            container
            alignContent="center"
            justify="center"
            direction="column"
        >
            <Grid item className={classes.menuButtons}>
                <ConsilBoardMenu />
            </Grid>
            <Grid item className={classes.consilBoardSetting}>
                <Paper elevation={5}>
                    <ConsilBoard/>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default ConsilBoardUserPage;