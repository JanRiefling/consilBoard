import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import ClientCard from "./ClientCard/ClientCard";
import {ConsilBoardStateContext} from "../../context/consilboard/ConsilBoardContext";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
}));


export default function ConsilBoard(){

    const classes = useStyles();
    const {clientList} = useContext(ConsilBoardStateContext);

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {clientList.map((client) => (
                <ClientCard
                    key= {client}
                    client={client}
                />
                ))}
            </GridList>
        </div>
    );
}