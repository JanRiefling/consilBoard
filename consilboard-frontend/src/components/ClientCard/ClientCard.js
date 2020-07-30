import React, {useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
/*
import { useHistory } from 'react-router-dom';
*/
import { Grid } from '@material-ui/core';
import {ClientDispatchContext} from "../../context/clients/ClientContext";
import {REMOVE_CLIENT_FROM_CONSILBOARD} from "../../context/clients/client-actions";

const useStyles = makeStyles({
    root: {
        margin: 10,
        backgroundColor: 'lightgray',
        '&:hover': {
            backgroundColor: 'rgba(7,177,77,0.42)',
        },
    },
});

function ClientCard({ client }) {

    const classes = useStyles();
    /*const history = useHistory();*/
    const dispatch = useContext(ClientDispatchContext);


    return (
        <Grid item xs={10} sm={6} lg={3}>
            <Card
                className={classes.root}
                /*onClick={() => history.push(`/client/${client.id}`)}*/
            >
                <CardContent>
                    <Typography variant="body1" component="p">
                        {client.clientname}
                    </Typography>
                    <IconButton
                        onClick={() => {
                            dispatch({type: REMOVE_CLIENT_FROM_CONSILBOARD, payload: client.id});
                            console.log(client.clientname);
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ClientCard;