import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ClientCard from "./ClientCard/ClientCard";
import {ConsilBoardStateContext} from "../../context/consilboard/ConsilBoardContext";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    consilBoard: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        borderRadius: 5,
        borderColor: "black",
        borderWidth: "1px",
        padding: "2rem",
        minHeight: "80vh",
        minWidth: "80vw",
    },

    consilCard: {
        padding: 20,
    },
}));


export default function ConsilBoard() {

    const classes = useStyles();
    const {clientList} = useContext(ConsilBoardStateContext);


    return (
        <Grid container className={classes.consilBoard}>
            {clientList.map((client) => (
                <Grid item className={classes.consilCard} xs={12} sm={6} lg={4} xl={3} >
                    <ClientCard
                        key={client}
                        client={client}
                    />
                </Grid>
            ))}

        </Grid>
    );
}