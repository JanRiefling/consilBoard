import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserContextProvider, {
    LOGIN_SUCCESS,
} from './context/user/UserContextProvider';
import { UserDispatchContext } from './context/user/UserContext';
import { getDecodedJWTToken, isJWTTokenValid } from './utils/jwt-utils';
import { Container } from '@material-ui/core';
import Typography from "@material-ui/core/Typography";

function Navigation() {
    const dispatch = useContext(UserDispatchContext);

    useEffect(() => {
        if (isJWTTokenValid()) {
            dispatch({ type: LOGIN_SUCCESS, payload: getDecodedJWTToken() });
        }
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Container maxWidth={'md'} component="main">
                <Switch>
                    <Route path="/login" exact>
                        <Typography>consilBoard</Typography>
                        <LoginPage />
                    </Route>
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

function App() {
    return (
        <UserContextProvider>
                <Navigation />
        </UserContextProvider>
    );
}

export default App;