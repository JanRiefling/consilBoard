import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React, {/*useContext, useEffect,*/ useState} from "react";
import AddClientDialog from "../components/AddClientDialog/AddClientDialog";
/*import {ClientDispatchContext, ClientStateContext} from "../context/clients/ClientContext";*/


function ConsilBoardUserPage(){

    const [showAddDialog, setShowAddDialog] = useState(false);

/*    const { client, addStatus } = useContext(ClientStateContext);
    const dispatch = useContext(ClientDispatchContext);*/

    return (
        <Grid
            container
            alignContent="center"
            justify="center"
        >
        <Typography>Hello User!</Typography>
        <Button>ConsilBoard</Button>
            <Button
                variant="outlined"
                color="primary"
                onClick={() => setShowAddDialog(true)}
            >
                Add Client
            </Button>

            <AddClientDialog
                open={showAddDialog}
                handleClose={() => setShowAddDialog(false)}
            />
        </Grid>
    );
}

export default ConsilBoardUserPage;