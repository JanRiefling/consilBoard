import React, {useContext} from "react";
import {UserStateContext} from "../../context/user/UserContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import UserDropDown from "./UserDropDown";

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


    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                {authStatus !== 'SUCCESS' && (
                    <img className={classes.logo}
                         onClick={() => console.log('onClick')}
                         src={require("../../images/ConsilBoardLogoWithTextSVG.svg")}
                         alt={"Consil Board Logo, few squares and text"}
                    />
                )}
                {authStatus === 'SUCCESS' && (
                    <img className={classes.logo}
                         onClick={() => console.log('onClick')}
                         src={require("../../images/LogoWithoutText.svg")}
                         alt={"Consil Board Logo, few squares and without text"}
                    />
                )}
                {authStatus === 'SUCCESS' && (
                    <UserDropDown/>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default ConsilBoardAppBar;