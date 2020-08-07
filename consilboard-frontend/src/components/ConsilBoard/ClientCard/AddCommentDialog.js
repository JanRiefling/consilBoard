import React, {useContext, useEffect, useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import {ClientDispatchContext, ClientStateContext} from "../../../context/clients/ClientContext";
import {addComment} from "../../../context/clients/client-actions";

export default function AddCommentDialog({open, handleClose, id}) {
    const [comment, setComment] = useState('');

    const {addCommentStatus} = useContext(ClientStateContext);

    useEffect(() => {
        if (addCommentStatus === 'SUCCESS') {
            setComment('');
            handleClose();
        }
        // eslint-disable-next-line
    }, [addCommentStatus]);

    const dispatch = useContext(ClientDispatchContext);

    function handleSubmit() {
        console.log(id);
        addComment(dispatch, comment, id);
    }

    function handleChange(event) {
        setComment(event.target.value);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth={'sm'}
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title">Add a Comment</DialogTitle>
            <DialogContent>
                <DialogContentText></DialogContentText>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth={true}
                        multiline={true}
                        label="Comment"
                        value={comment}
                        onChange={handleChange}
                        margin="normal"
                        error={comment.length < 2}
                        helperText={'min length 2'}
                    />
                </form>
                {addCommentStatus === 'PENDING' && <CircularProgress/>}
                {addCommentStatus === 'FAILED' && (
                    <Typography variant="body1" component="p">
                        Add comment failed
                    </Typography>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button
                    disabled={comment.length < 2}
                    onClick={handleSubmit}
                    color="primary"
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}