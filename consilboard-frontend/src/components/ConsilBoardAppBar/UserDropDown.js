import React, {useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import {LOGOUT} from "../../context/user/UserContextProvider";
import {removeJWTToken} from "../../utils/jwt-utils";
import {UserDispatchContext} from "../../context/user/UserContext";
import {ConsilBoardDispatchContext} from "../../context/consilboard/ConsilBoardContext";
import {Redirect} from "react-router-dom";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: "white",
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.black,
            },
        },
    },
}))(MenuItem);

export default function UserDropDown() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useContext(UserDispatchContext);
    const dispatchBoard = useContext(ConsilBoardDispatchContext);

    function redirectToLoginPage() {
        return (<Redirect to={'/login'}/>);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-controls="customized-menu"
                aria-haspopup="true"
                color="black"
                onClick={handleClick}
            >
                <PersonIcon fontSize="large" variant="outlined" />
            </IconButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem>
                    <ListItemText primary="Settings" />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemText primary="Community" />
                </StyledMenuItem>
                <StyledMenuItem
                    onClick={() => {
                        dispatch({type: LOGOUT});
                        removeJWTToken();
                        redirectToLoginPage();
                        dispatchBoard({type: 'RESET'}); //Write RESet REDucer state
                    }}
                >
                    <ListItemText primary="Logout" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}
