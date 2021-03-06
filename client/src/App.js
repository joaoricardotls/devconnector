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
import Profiles from "./components/profile/Profiles";
import EditProfile from "./components/profile/EditProfile";
import AddEducation from './components/profile/AddEducation';
import AddExperience from './components/profile/AddExperience';
import UserProfile from "./components/userprofile/Profile";
import PrivateRoute from './components/routing/PrivateRoute';
import Posts from './components/posts/Posts';

// Redux
import { Provider } from 'react-redux';
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utilities/setAuthToken";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faUser,
    faUserMinus,
    faUsers,
    faDoorOpen,
    faSignInAlt,
    faCode,
    faSignOutAlt,
    faLaptopCode,
    faGlobe,
    faComments,
    faThumbsUp,
    faHandPointRight,
    faTimes
} from "@fortawesome/free-solid-svg-icons";
library.add(
    faUser,
    faUserMinus,
    faUsers,
    faDoorOpen,
    faSignInAlt,
    faCode,
    faSignOutAlt,
    faLaptopCode,
    faGlobe,
    faComments,
    faThumbsUp,
    faHandPointRight,
    faTimes
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
                    <Route exact path="/"
                           component={ LandingPage }/>
                    <Route exact path="/login"
                           component={ Login }/>
                    <Route exact path="/register"
                           component={ Register }/>
                    <Route exact path="/profiles"
                           component={ Profiles }/>
                    <Route exact path="/profile/:id"
                           component={ UserProfile }/>
                    <PrivateRoute exact path="/dashboard"
                                  component={ Dashboard }/>
                    <PrivateRoute exact path="/create-profile"
                                  component={ CreateProfile }/>
                    <PrivateRoute exact path="/edit-profile"
                                  component={ EditProfile }/>
                    <PrivateRoute exact path="/add-experience"
                                  component={ AddExperience }/>
                    <PrivateRoute exact path="/add-education"
                                  component={ AddEducation }/>
                    <PrivateRoute exact path="/posts"
                                  component={ Posts }/>
                </Switch>
                
        </Router>
    </Provider>
    </>
    )
};

export default App;