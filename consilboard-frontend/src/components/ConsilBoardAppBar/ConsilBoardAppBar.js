import React, {useContext} from "react";
import {UserDispatchContext, UserStateContext} from "../../context/user/UserContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {removeJWTToken} from "../../utils/jwt-utils";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {LOGOUT} from "../../context/user/UserContextProvider";
import {Redirect} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import {ConsilBoardDispatchContext} from "../../context/consilboard/ConsilBoardContext";
import PersonIcon from '@material-ui/icons/Person';


const useStyles = makeStyles(() => ({
    logo: {
        padding: 3,
        marginRight: "auto",
    },
    logoutButton: {
        marginLeft: "auto",
    },
    appBar: {
        backgroundColor: 'white',
        margin: "auto",
        boxShadow: "none",
    },
}));



function ConsilBoardAppBar() {

    const classes = useStyles();
    const {authStatus} = useContext(UserStateContext);
    const dispatch = useContext(UserDispatchContext);
    const dispatchBoard = useContext(ConsilBoardDispatchContext);



    function redirectToLoginPage() {
        return ( <Redirect to={'/login'} />);
    }


    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <img className={classes.logo}
                    onClick={() => console.log('onClick')}
                    src={require("../../images/ConsilBoardLogo.png")}
                    alt={"Consil Board Logo, few squares and text"}
                />
                {authStatus === 'SUCCESS' && (
                    <Button
                        color="inherit"
                        onClick={() => {
                            dispatch({ type: LOGOUT });
                            removeJWTToken();
                            redirectToLoginPage();
                            dispatchBoard({type: 'RESET'}); //Write RESet REDucer state
                        }}
                    >
                        Logout
                    </Button>
                )}
                {authStatus === 'SUCCESS' && (
                    <IconButton
                        color="inherit"
                        onClick={() => {
                            console.log("Here i want to see a menu");
                        }}
                    >
                        <PersonIcon />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default ConsilBoardAppBar;