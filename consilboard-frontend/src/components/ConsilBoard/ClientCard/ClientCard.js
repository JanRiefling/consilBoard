import React, {useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import {deleteClientsFromConsilBoard} from "../../../context/consilboard/consilBoard-action";
import {ConsilBoardDispatchContext} from "../../../context/consilboard/ConsilBoardContext";

const useStyles = makeStyles((theme) => ({
    clientCard: {
        margin: 10,
        backgroundColor: 'white',
        borderColor: "green",
        borderWidth: 10,
        width: "100%",
        '&:hover': {
            backgroundColor: 'rgba(7,177,77,0.42)',
        },
    },
}));

function ClientCard({ client }) {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useContext(ConsilBoardDispatchContext);


    return (
        <Grid item className={classes.clientCard}>

            <Card>
                <Grid container direction="row" wrap="nowrap">
                <CardContent>
                    <Grid item>
                    <Typography variant="body1" component="p">
                        {client.clientname}
                    </Typography>
                    </Grid>
                    <Grid item>
                    <IconButton
                        onClick={() => {
                            deleteClientsFromConsilBoard(dispatch, client);
                        }}
                    >
                        <BackspaceOutlinedIcon />
                    </IconButton>
                    <IconButton
                        onClick={() => history.push(`/client/${client.id}`)}
                    >
                        <InfoOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <CreateOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <NoteAddOutlinedIcon />
                    </IconButton>
                        </ Grid>
                </CardContent>
                </Grid>
            </Card>
        </Grid>
    );
}

export default ClientCard;