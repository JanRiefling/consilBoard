import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClientCard from "./ClientCard/ClientCard";
import {ConsilBoardStateContext} from "../../context/consilboard/ConsilBoardContext";
import Grid from "@material-ui/core/Grid";
import BackgroundBoard from "../../images/BackgroundBoardFour.png";


const useStyles = makeStyles((theme) => ({
    consilBoard: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        borderRadius: 5,
/*
        backgroundImage: `url(${BackgroundBoard})`,
*/
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        borderColor: "black",
        borderWidth: "1px",
        padding: "1rem",
        minHeight: "20rem",


    },
    cardSetting: {
        padding: "1rem",
    },
}));


export default function ConsilBoard(){

    const classes = useStyles();
    const {clientList} = useContext(ConsilBoardStateContext);

    return (
        <Grid item className={classes.consilBoard}>
                {clientList.map((client) => (
                    <Grid item key={client} className={classes.cardSetting} >
                        <ClientCard
                            client={client}
                        />
                    </Grid>
                ))}

        </Grid>
    );
}