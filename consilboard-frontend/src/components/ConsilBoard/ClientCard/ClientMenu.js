import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import BackspaceOutlinedIcon from '@material-ui/icons/BackspaceOutlined';
import {useHistory} from 'react-router-dom';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {deleteClientsFromConsilBoard} from "../../../context/consilboard/consilBoard-action";
import {ConsilBoardDispatchContext} from "../../../context/consilboard/ConsilBoardContext";
import AddCommentDialog from "./AddCommentDialog";
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';


const useStyles = makeStyles((theme) => ({
    removeCard: {
        marginLeft: "auto",
    }
}));

function ClientMenu({client}) {

    const classes = useStyles();
    const history = useHistory();
    const dispatch = useContext(ConsilBoardDispatchContext);
    const [commentDialog, setCommentDialog] = useState(false);


    return (
        <>
            <IconButton
                onClick={() => history.push(`/client/${client.id}`)}
                color="primary"
            >
                <AssignmentIndIcon/>
            </IconButton>
            <IconButton
                onClick={() => {
                    setCommentDialog(true)
                }}
            >
                <CreateOutlinedIcon/>
            </IconButton>
            <AddCommentDialog
                id={client.id}
                open={commentDialog}
                handleClose={() => setCommentDialog(false)}
            />
            <IconButton>
                <FolderOutlinedIcon/>
            </IconButton>
            <IconButton
                className={classes.removeCard}
                onClick={() => {
                    deleteClientsFromConsilBoard(dispatch, client);
                }}
            >
                <BackspaceOutlinedIcon/>
            </IconButton>
        </>
    );
}

export default ClientMenu;