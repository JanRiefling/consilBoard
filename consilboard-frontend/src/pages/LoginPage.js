import React, {useContext, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {UserDispatchContext, UserStateContext,} from '../context/user/UserContext';
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS,} from '../context/user/UserContextProvider';
import {performLogin} from '../utils/auth-utils';
import {Redirect} from 'react-router-dom';
import {getDecodedJWTToken, setJWTToken} from '../utils/jwt-utils';
import {Grid, makeStyles} from '@material-ui/core';
import SignUpForm from "../components/SignUp/SignUpForm";
import SignUpProvider from "../context/user/SignUpProvider";
import consilBoardTheme from "../styling/muiTheme";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        paddingTop: theme.spacing(3),
        borderStyle: "solid",
        borderColor: consilBoardTheme.palette.primary.main,
        borderWidth: "1px",
        borderRadius: 10,
        height: "30rem",
        marginTop: "3rem",
        maxWidth: "500px",
        marginLeft: 2,
        marginRight: 2,
        width: "100%",
    },
    textField: {
        padding: 5
    },
    welcomeLogin: {
        colour: consilBoardTheme.palette.info.light,
        fontSize: "1.2rem",
        padding: "1rem"
    },
    loginButton: {
        colour: consilBoardTheme.palette.primary.main,
    },
    signUpButton: {
        colour: consilBoardTheme.palette.primary.main,
    },
    textGrid: {
        backgroundColor: consilBoardTheme.palette.primary.light,
        width: "100%",
        height: "auto",
    }

}));

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useContext(UserDispatchContext);

    const classes = useStyles();

    function login() {
        dispatch({type: LOGIN});
        performLogin(username, password)
            .then((data) => {
                setJWTToken(data);
                const userData = getDecodedJWTToken();
                dispatch({type: LOGIN_SUCCESS, payload: userData});
            })
            .catch(() => {
                dispatch({type: LOGIN_FAILED});
            });
    }

    const {authStatus} = useContext(UserStateContext);
    if (authStatus === 'SUCCESS') {
        return <Redirect to={'/api'}/>;
    }

    return (
        <SignUpProvider>
            <Grid
                className={classes.gridContainer}
                container
                alignContent="center"
                justify="center"
                direction="column"
                spacing={4}
            >
                <Grid item className={classes.textGrid}>
                    <Typography className={classes.welcomeLogin}>
                        LOGIN TO YOUR CONSILBOARD
                    </Typography>
                </Grid>
                <Grid item>
                    <div className={classes.textField}>
                        <TextField
                            label="Username"
                            type="text"
                            value={username}
                            variant="outlined"
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className={classes.textField}>
                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            variant="outlined"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                </Grid>

                <Grid item>
                    <Button onClick={login} variant="outlined" color="primary">Login</Button>
                </Grid>
                <Grid item>
                    <SignUpForm/>
                </Grid>
            </Grid>
        </SignUpProvider>
    );
}

export default LoginPage;