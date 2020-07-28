import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddClientDialog from "./AddClientMenu/AddClientDialog";
/*
import RemoveClientFromDbDialog from "./RemoveClientFromDbDialog";
*/
import SearchDialog from "./SearchClients/SearchDialog";
import AddNewConsilBoardDialog from "./AddNewConsilBoard/AddNewConsilBoardDialog";

function ConsilBoardMenuBar() {
    const [showAddDialog, setShowAddDialog] = useState(false);
    /*const [showRemoveDialog, setShowRemoveDialog] = useState(false);*/
    const [showSearchDialog, setShowSearchDialog] = useState(false);
    const [showConsilBoardDialog, setShowConsilBoardDialog] = useState(false);


    return (
        <Grid
            container
            alignContent="center"
            justify="center"
        >
{/*            <Button
                variant="outlined"
                color="primary"
                onClick={() => setShowRemoveDialog(true)}
            >
                Remove Client from DB
            </Button>

            <RemoveClientFromDbDialog
            open={showRemoveDialog}
            handleClose={() => setShowRemoveDialog(false)}
            />*/}

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

            <Button
                variant="outlined"
                color="primary"
                onClick={() => setShowSearchDialog(true)}
            >

                Find Client!
            </Button>


            <SearchDialog
                open={showSearchDialog}
                handleClose={() => setShowSearchDialog(false)}
            />

            <Button
                variant="outlined"
                color="primary"
                onClick={() => setShowConsilBoardDialog(true)}
            >

                Create ConsilBoard!
            </Button>


            <AddNewConsilBoardDialog
                open={showConsilBoardDialog}
                handleClose={() => setShowConsilBoardDialog(false)}
            />

        </Grid>
    );
}

export default ConsilBoardMenuBar;