import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddClientDialog from "./AddClientDialog";

function ConsilBoardMenuBar() {
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [showRemoveDialog, setShowRemoveDialog] = useState(false);


    return (
        <Grid
            container
            alignContent="center"
            justify="center"
        >
            <Typography>Hello User!</Typography>
            <Button
                variant="outlined"
                color="primary"
                onClick={() => setShowRemoveDialog(true)}
            >
                Remove Client from DB
            </Button>

            <RemoveClientFromDbDialog
            open={showRemoveDialog}
            handleClose={() => setShowRemoveDialog(false)}
            />

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

export default ConsilBoardMenuBar;