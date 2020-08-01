import React, {useContext, useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import {performSignUp} from "../../utils/auth-utils";
import {SignUpUserDispatchContext, SignUpUserStateContext} from "../../context/user/SignUpContext";
import {SIGN_UP, SIGN_UP_FAILED, SIGN_UP_SUCCESS} from "../../context/user/SignUpProvider";
import {Redirect} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core";
import consilBoardTheme from "../../styling/muiTheme";
import Typography from "@material-ui/core/Typography";




const useStyles = makeStyles((theme) => ({

    signUpButton: {
        fontSize: 13,
        '&:hover': {
            backgroundColor: 'rgb(7, 177, 77, 0.42)',
            style: "pointer"
        },
    },

    welcomeLogin: {
        colour: "white",
        fontSize: "1.2rem",
        padding: "1rem"
    },
    loginButton: {
        colour: consilBoardTheme.palette.primary.main,
    },
    textGrid: {
        backgroundColor: consilBoardTheme.palette.primary.light,
        width: "100%",
        height: "auto",
    }

}));




function SignUpForm(){

    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [notSamePassword, setNotSamePassword] = useState('');

    const dispatch = useContext(SignUpUserDispatchContext);

    function signUp() {
        dispatch({type: SIGN_UP});
        if (password !== checkPassword || password.length <= 0 || username.length <= 0){
            dispatch({type: SIGN_UP_FAILED});
            return setNotSamePassword("Passwords dont match!");
        }

        performSignUp(username, password)
            .then((data) => {
                console.log(data)
                const signUpData = localStorage.getItem(username);
                dispatch({type: SIGN_UP_SUCCESS, payload: signUpData})
            })
            .catch(() => {
                dispatch({type: SIGN_UP_FAILED});
                });
    }


    const {signUpStatus} = useContext(SignUpUserStateContext);
    if(signUpStatus === 'SUCCESS'){
        return <Redirect to={'/'} />;
    }

    return (
        <div>
            <Button onClick={handleClickOpen} className={classes.signUpButton}>
               Not registered? Sign Up!
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="signup-dialog-title">
                <DialogTitle id="signup-dialog-title">SignUp</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We will send updates
                        occasionally.
                    </DialogContentText>
                    <DialogContentText>{notSamePassword}</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        value = {password}
                        onChange={(event) => setPassword(event.target.value)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="checkPassword"
                        label="Repeat Password"
                        type="password"
                        value = {checkPassword}
                        onChange={(event) => setCheckPassword(event.target.value)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={signUp} color="primary">
                        Subscribe
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default SignUpForm;