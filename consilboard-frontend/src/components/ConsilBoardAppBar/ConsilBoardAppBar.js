import React, {useContext} from "react";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {removeJWTToken} from "../../utils/jwt-utils";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {LOGOUT} from "../../context/user/UserContextProvider";
import {Redirect} from "react-router-dom";
import {ConsilBoardDispatchContext} from "../../context/consilboard/ConsilBoardContext";

const useStyles = makeStyles(() => ({
    title: {
        flexGrow: 1,
    },
    background: {backgroundColor: 'grey'},
}));

function ConsilBoardAppBar() {

    const classes = useStyles();
    const {authStatus, userData} = useContext(UserStateContext);
    const dispatch = useContext(UserDispatchContext);
/*    const dispatchClients = useContext(ClientDispatchContext);
    const dispatchBoard = useContext(ConsilBoardDispatchContext);*/


    function redirectToLoginPage() {
        return ( <Redirect to={'/login'} />);
    }


    return (
        <AppBar position="static" className={classes.background}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    ConsilBoard {userData && userData.displayName}
                </Typography>
                {authStatus === 'SUCCESS' && (
                    <Button
                        color="inherit"
                        onClick={() => {
                            dispatch({ type: LOGOUT });
                            removeJWTToken();
                            redirectToLoginPage();
                        }}
                    >
                        Logout
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default ConsilBoardAppBar;