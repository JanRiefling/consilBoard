import React, {useContext, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserContextProvider, {
    LOGIN_SUCCESS,
} from './context/user/UserContextProvider';
import { UserDispatchContext } from './context/user/UserContext';
import { getDecodedJWTToken, isJWTTokenValid } from './utils/jwt-utils';
import { Container } from '@material-ui/core';
import ConsilBoardUserPage from "./pages/ConsilBoardUserPage";
import ConsilBoardAppBar from "./components/ConsilBoardAppBar/ConsilBoardAppBar";
import ClientProvider from "./context/clients/ClientProvider";

function Navigation() {
    const dispatch = useContext(UserDispatchContext);

    useEffect(() => {
        if (isJWTTokenValid()) {
            dispatch({ type: LOGIN_SUCCESS, payload: getDecodedJWTToken() });
        }
    }, [dispatch]);



    return (
        <BrowserRouter>
            <ConsilBoardAppBar />
            <Container maxWidth={'md'} component="main">
                <Switch>
                    <Route path="/api" component={ConsilBoardUserPage} exact />
                    <Route path="/" exact>
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
            <ClientProvider>
                <Navigation />
            </ClientProvider>
        </UserContextProvider>
    );
}

export default App;