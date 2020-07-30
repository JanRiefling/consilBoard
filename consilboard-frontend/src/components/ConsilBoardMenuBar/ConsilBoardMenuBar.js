import React, {useContext, useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddClientDialog from "./AddClientMenu/AddClientDialog";
/*
import RemoveClientFromDbDialog from "./RemoveClientFromDbDialog";
*/
import SearchDialog from "./SearchClients/SearchDialog";
import AddNewConsilBoardDialog from "./AddNewConsilBoard/AddNewConsilBoardDialog";
import {FETCH_CONSILBOARD_SUCCESS} from "../../context/consilboard/ConsilBoardProvider";
import {ConsilBoardStateContext} from "../../context/consilboard/ConsilBoardContext";

function ConsilBoardMenuBar() {
    const [showAddDialog, setShowAddDialog] = useState(false);
    /*const [showRemoveDialog, setShowRemoveDialog] = useState(false);*/
    const [showSearchDialog, setShowSearchDialog] = useState(false);
    const [showConsilBoardDialog, setShowConsilBoardDialog] = useState(false);
    const [newConsilBoard, setNewConsilBoard] = useState(false);
    const {fetchBoardStatus} = useContext(ConsilBoardStateContext);

    useEffect(() => {
        if(FETCH_CONSILBOARD_SUCCESS){
            setNewConsilBoard(true);
        }
    },[fetchBoardStatus]);



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

            {fetchBoardStatus === 'FAILED' || fetchBoardStatus === 'PENDING'} <Button
                variant="outlined"
                color="primary"
                onClick={() => setShowConsilBoardDialog(true)}
                disabled={newConsilBoard}
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