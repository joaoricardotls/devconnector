import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navigation from "./components/Navigation";
import LandingPage from './components/LandingPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AlertComponent from "./components/AlertComponent";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/profile/CreateProfile";
import PrivateRoute from './components/routing/PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utilities/setAuthToken";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faUser,
    faDoorOpen,
    faSignInAlt,
    faCode,
    faSignOutAlt,
    faLaptopCode
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookSquare,
    faLinkedin,
    faInstagram,
    faYoutube,
    faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";
library.add(
    faUser,
    faDoorOpen,
    faSignInAlt,
    faCode,
    faSignOutAlt,
    faLaptopCode,
    faFacebookSquare,
    faLinkedin,
    faInstagram,
    faYoutube,
    faTwitterSquare
);

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    }, [])

    return (
    <>
    <Provider store={ store }>
        <Router>

                <Navigation/>

                <AlertComponent/>

                <Switch>
                    <Route exact path="/" component={ LandingPage }/>
                    <Route exact path="/login" component={ Login }/>
                    <Route exact path="/register" component={ Register }/>
                    <PrivateRoute exact path="/dashboard" component={ Dashboard }/>
                    <PrivateRoute exact path="/create-profile" component={ CreateProfile }/>
                </Switch>
                
        </Router>
    </Provider>
    </>
    )
};

export default App;