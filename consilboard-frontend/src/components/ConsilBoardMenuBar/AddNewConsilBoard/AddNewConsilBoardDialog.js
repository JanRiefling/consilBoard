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
import {addConsilBoard} from "../../../context/consilboard/consilBoard-action";

export default function AddNewConsilBoard({open, handleClose}) {


    const [consilBoardName, setConsilBoardName] = useState('');
    const {addBoardStatus} = useContext(ClientStateContext);
    const dispatch = useContext(ClientDispatchContext);


    useEffect(() => {
        if (addBoardStatus === 'SUCCESS') {
            setConsilBoardName('');
            handleClose();
        }
        // eslint-disable-next-line
    }, [addBoardStatus]);


    function handleSubmit() {
        addConsilBoard(dispatch, consilBoardName);
        handleClose();
    }

    function handleChange(event) {
        setConsilBoardName(event.target.value);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth={'sm'}
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title">Add Client</DialogTitle>
            <DialogContent>
                <DialogContentText>Add your client ;)</DialogContentText>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth={true}
                        multiline={true}
                        label="ConsilBoardName"
                        value={consilBoardName}
                        onChange={handleChange}
                        margin="normal"
                        error={consilBoardName.length < 2}
                        helperText={'min length 2'}
                        disabled={addBoardStatus === 'SUCCESS' && true}
                    />
                </form>
                {addBoardStatus === 'PENDING' && <CircularProgress/>}
                {addBoardStatus === 'FAILED' && (
                    <Typography variant="body1" component="p">
                        Add Board client failed
                    </Typography>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button
                    disabled={consilBoardName.length < 2}
                    onClick={handleSubmit}
                    color="primary"
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}