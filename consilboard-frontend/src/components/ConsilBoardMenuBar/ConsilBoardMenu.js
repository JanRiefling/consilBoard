import React, {useContext, useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import SearchDialog from "./SearchClients/SearchDialog";
import {ConsilBoardStateContext} from "../../context/consilboard/ConsilBoardContext";
import {FETCH_CONSILBOARD_SUCCESS} from "../../context/consilboard/ConsilBoardProvider";
import AddClientDialog from "./AddClient/AddClientDialog";
import AddNewConsilBoardDialog from "./AddNewConsilBoard/AddNewConsilBoardDialog";
import RemoveClientFromDbDialog from "./RemoveClient/RemoveClientFromDbDialog";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
        zIndex: 100,
    },
}));

export default function ConsilBoardMenu() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [showSearchDialog, setShowSearchDialog] = useState(false);
    const [showConsilBoardDialog, setShowConsilBoardDialog] = useState(false);
    const [newConsilBoard, setNewConsilBoard] = useState(false);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const {fetchBoardStatus} = useContext(ConsilBoardStateContext);

    useEffect(() => {
        if (FETCH_CONSILBOARD_SUCCESS) {
            setNewConsilBoard(true);
        }
    }, [fetchBoardStatus]);


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

/*    function handleDelete() {

        console.log(dispatch, client.id);
        /!*     event.stopPropagation();
             removeClientFromDb(dispatch, client.id)*!/
    }*/

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    return (
        <div className={classes.root}>
            <div>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                   <MenuOpenIcon/>
                    Menu
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem
                                            onClick={() => setShowSearchDialog(true)}
                                        >
                                            Find 'n' Add Client
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem onClick={handleClose}>Calendar</MenuItem>
                                        <MenuItem onClick={handleClose}>Share Client</MenuItem>
                                        <Divider />
                                        <MenuItem
                                                onClick={() => {
                                                    setShowAddDialog(true)
                                                }}
                                            >
                                                Create Client
                                        </MenuItem>
                                        {!newConsilBoard && <>
                                        <MenuItem
                                                    onClick={() => setShowConsilBoardDialog(true)}
                                                >
                                                    Create ConsilBoard!
                                        </MenuItem>
                                            </>}
                                        <MenuItem
                                            /*onClick={() => setShowRemoveDialog(true)}*/
                                        >
                                            Remove Client Forever :(
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
                <SearchDialog
                    open={showSearchDialog}
                    handleClose={() => setShowSearchDialog(false)}
                />
                <AddClientDialog
                    open={showAddDialog}
                    handleClose={() => setShowAddDialog(false)}
                />
                <AddNewConsilBoardDialog
                    open={showConsilBoardDialog}
                    handleClose={() => setShowConsilBoardDialog(false)}
                />
                <RemoveClientFromDbDialog
                    /*open={showRemoveDialog}
                    handleClose={() => setShowRemoveDialog(false)}*/
                />
            </div>
        </div>
    );
}