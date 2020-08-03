import React, {useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import {useHistory} from 'react-router-dom';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import {deleteClientsFromConsilBoard} from "../../../context/consilboard/consilBoard-action";
import {ConsilBoardDispatchContext} from "../../../context/consilboard/ConsilBoardContext";
import consilBoardTheme from "../../../styling/muiTheme";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    clientCard: {
            width: "100%",
            height: "auto",
            backgroundColor: 'white',
            borderColor: consilBoardTheme.palette.primary.dark,
            borderWidth: 1,
            borderStyle: "solid",
            borderRadius: 5,
            boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.35)',
        },
    littleMenuContainer: {
        padding: 0,
    },

    titleHover: {
        '&:hover': {
            backgroundColor: 'rgba(7,177,77,0.42)',
        },
    },

    removeCard: {
        marginLeft: "auto",
    }
}));

function ClientCard({client}) {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useContext(ConsilBoardDispatchContext);


    return (
            <Card className={classes.clientCard}>
                        <CardHeader
                            title={client.clientname}
                            className={classes.titleHover}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Important tasks, notes related to your client.
                            </Typography>
                        </CardContent>
                        <Divider />
                            <CardActions disableSpacing>
                                    <IconButton
                                        onClick={() => history.push(`/client/${client.id}`)}
                                        color="primary"
                                    >
                                        <InfoOutlinedIcon/>
                                    </IconButton>
                                    <IconButton>
                                        <CreateOutlinedIcon/>
                                    </IconButton>
                                    <IconButton>
                                        <NoteAddOutlinedIcon/>
                                    </IconButton>
                                <IconButton
                                    className={classes.removeCard}
                                    onClick={() => {
                                        deleteClientsFromConsilBoard(dispatch, client);
                                    }}
                                >
                                    <BackspaceOutlinedIcon/>
                                </IconButton>
                            </ CardActions>
            </Card>
    );
}

export default ClientCard;