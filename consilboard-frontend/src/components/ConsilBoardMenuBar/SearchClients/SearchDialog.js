import React, {useContext, useEffect, useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {ClientDispatchContext, ClientStateContext} from "../../../context/clients/ClientContext";
import {
    fetchClients
} from "../../../context/clients/client-actions";
import ClientSearchCard from "./ClientSearchCard";
import {fetchClientsByQuery} from "../../../utils/client-utils";


function SearchDialog({ open, handleClose }){

    const {clients, fetchStatus} = useContext(ClientStateContext);
    const dispatch = useContext(ClientDispatchContext);
    const [allClients, setAllClients] = useState(false);
    const [query, setQuery] = useState('');
    const [searchClients, setSearchClients] = useState([]);

      useEffect(() => {
        if (!fetchStatus) {
            fetchClients(dispatch);
        }
    }, [fetchStatus, dispatch]);


      useEffect(() => {
          if(query !== '') {
              fetchClientsByQuery(query)
                  .then((data) => {
                      setSearchClients(data)
                  })
                  .catch((e) => console.error(e));
          }
      },[query]);

    function showAllClients() {
        setAllClients(!allClients);
    }

    return (
        <>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            maxWidth={'sm'}
            fullWidth={true}
        >
            <DialogTitle id="form-dialog-title">Find Clients</DialogTitle>
            <DialogContent>
                <DialogContentText>Find a Client</DialogContentText>
                {!allClients && <form>
                    <TextField
                        fullWidth={true}
                        multiline={true}
                        label="Find Clients"
                        value={query}
                        onChange={(event) => {
                            setQuery(event.target.value)
                        }}
                        margin="normal"
                        /*error={}*/
                        helperText={'min length 2'}
                    />
                </form>}

            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button
                    disabled={false}
                    color="primary"
                    onClick={showAllClients}
                >
                    GET ALL CLIENTS
                </Button>
            </DialogActions>
            <DialogContent>
                <Grid container justify={'center'}>
                    {allClients ? clients.map((client) => (
                        <ClientSearchCard
                            key= {client.id}
                            client={client}
                        />
                    )) : []}
                </Grid>
                <Grid container justify={'center'}>
                    { searchClients != null && searchClients.map((client) => (
                        <ClientSearchCard
                            key= {client.id}
                            client={client}
                        />
                    ))}
                </Grid>
            </DialogContent>
        </Dialog>
        </>
    );

}

export default SearchDialog;