import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { LandingPage } from './components/LandingPage';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';

// REDUX
import { Provider } from 'react-redux';
import store from "./store";

// TEST
import { TestComponent } from "./components/TestComponent";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faDoorOpen,
    faSignInAlt,
    faCode
} from "@fortawesome/free-solid-svg-icons";
library.add(faCode, faDoorOpen, faSignInAlt);

const App = () => {
    return (
    <Provider store={ store }>
        <Router>
            <>
                <Navigation/>

                <Switch>
                    <Route exact path="/" component={ LandingPage }/>
                    <Route exact path="/login" component={ Login }/>
                    <Route exact path="/register" component={ Register }/>
                </Switch>
            </>
        </Router>
    </Provider>
    )
}

export default App;