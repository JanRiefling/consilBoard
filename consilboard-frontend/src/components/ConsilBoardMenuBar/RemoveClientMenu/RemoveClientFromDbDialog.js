/*import React, {useContext, useEffect, useState} from "react";
import {ClientDispatchContext, ClientStateContext} from "../../../context/clients/ClientContext";
import {addClient} from "../../../context/clients/client-actions";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {removeClientFromDb} from "../../../utils/client-utils";*/

/*
export default function RemoveClientFromDbDialog({ open, handleClose }) {
    const [clientname, setClientname] = useState('');

    const { addStatus } = useContext(ClientStateContext);

    useEffect(() => {
        if (addStatus === 'SUCCESS') {
            setClientname('');
            handleClose();
        }
        // eslint-disable-next-line
    }, [addStatus]);

    const dispatch = useContext(ClientDispatchContext);

    function handleSubmit() {
        removeClientFromDb(dispatch, clientname);
    }

    function handleChange(event) {
        setClientname(event.target.value);
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
                        label="Clientname"
                        value={clientname}
                        onChange={handleChange}
                        margin="normal"
                        error={clientname.length < 2}
                        helperText={'min length 2'}
                    />
                </form>
                {addStatus === 'PENDING' && <CircularProgress />}
                {addStatus === 'FAILED' && (
                    <Typography variant="body1" component="p">
                        Add client failed
                    </Typography>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button
                    disabled={clientname.length < 2}
                    onClick={handleSubmit}
                    color="primary"
                >
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
}*/
