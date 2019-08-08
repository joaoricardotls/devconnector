(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/style.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/styles/style.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* No CSS */", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Navigation */ "./src/components/Navigation.js");
/* harmony import */ var _components_LandingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/LandingPage */ "./src/components/LandingPage.js");
/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth/Login */ "./src/components/auth/Login.js");
/* harmony import */ var _components_auth_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/Register */ "./src/components/auth/Register.js");
/* harmony import */ var _components_AlertComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AlertComponent */ "./src/components/AlertComponent.js");
/* harmony import */ var _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/Dashboard */ "./src/components/dashboard/Dashboard.js");
/* harmony import */ var _components_profile_CreateProfile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/CreateProfile */ "./src/components/profile/CreateProfile.js");
/* harmony import */ var _components_profile_EditProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/EditProfile */ "./src/components/profile/EditProfile.js");
/* harmony import */ var _components_profile_AddEducation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/AddEducation */ "./src/components/profile/AddEducation.js");
/* harmony import */ var _components_profile_AddExperience__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/AddExperience */ "./src/components/profile/AddExperience.js");
/* harmony import */ var _components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/routing/PrivateRoute */ "./src/components/routing/PrivateRoute.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./actions/auth */ "./src/actions/auth.js");
/* harmony import */ var _utilities_setAuthToken__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./utilities/setAuthToken */ "./src/utilities/setAuthToken.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/App.js";

 // Components











 // Redux




 // Font Awesome




_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_17__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__["faUser"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__["faDoorOpen"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__["faSignInAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__["faCode"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__["faSignOutAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_18__["faLaptopCode"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_19__["faFacebookSquare"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_19__["faLinkedin"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_19__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_19__["faYoutube"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_19__["faTwitterSquare"]);
if (localStorage.token) Object(_utilities_setAuthToken__WEBPACK_IMPORTED_MODULE_16__["default"])(localStorage.token);

const App = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _store__WEBPACK_IMPORTED_MODULE_14__["default"].dispatch(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_15__["loadUser"])());
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_13__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_14__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AlertComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _components_LandingPage__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/login",
    component: _components_auth_Login__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/register",
    component: _components_auth_Register__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    exact: true,
    path: "/dashboard",
    component: _components_dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    exact: true,
    path: "/create-profile",
    component: _components_profile_CreateProfile__WEBPACK_IMPORTED_MODULE_8__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    exact: true,
    path: "/edit-profile",
    component: _components_profile_EditProfile__WEBPACK_IMPORTED_MODULE_9__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    exact: true,
    path: "/add-experience",
    component: _components_profile_AddExperience__WEBPACK_IMPORTED_MODULE_11__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_routing_PrivateRoute__WEBPACK_IMPORTED_MODULE_12__["default"], {
    exact: true,
    path: "/add-education",
    component: _components_profile_AddEducation__WEBPACK_IMPORTED_MODULE_10__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/actions/alert.js":
/*!******************************!*\
  !*** ./src/actions/alert.js ***!
  \******************************/
/*! exports provided: setAlert, clearAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAlert", function() { return setAlert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAlert", function() { return clearAlert; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");


const setAlert = (msg, alertType) => dispatch => {
  const id = uuid__WEBPACK_IMPORTED_MODULE_0___default.a.v4();
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["SET_ALERT"],
    payload: {
      msg,
      alertType,
      id
    }
  });
  setTimeout(() => dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["REMOVE_ALERT"],
    payload: id
  }), 5000);
};
const clearAlert = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_ALERT"]
  });
};

/***/ }),

/***/ "./src/actions/auth.js":
/*!*****************************!*\
  !*** ./src/actions/auth.js ***!
  \*****************************/
/*! exports provided: loadUser, login, logout, register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUser", function() { return loadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert */ "./src/actions/alert.js");
/* harmony import */ var _utilities_setAuthToken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/setAuthToken */ "./src/utilities/setAuthToken.js");



 // Load User

const loadUser = () => async dispatch => {
  if (localStorage.token) {
    Object(_utilities_setAuthToken__WEBPACK_IMPORTED_MODULE_3__["default"])(localStorage.token);
  }

  ;

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/auth');
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["USER_LOADED"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["AUTH_ERROR"]
    });
  }

  ;
}; // Log In

const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    email,
    password
  });

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/auth', body, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"],
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_2__["setAlert"])(error.msg, 'danger'));
      });
    }

    ;
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAIL"]
    });
  }
}; // Log Out / Clear Profile

const logout = () => dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT"]
  });
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_PROFILE"]
  });
}; // Register User

const register = ({
  name,
  email,
  password
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    name,
    email,
    password
  });

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/users', body, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["REGISTER_SUCCESS"],
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_2__["setAlert"])(error.msg, 'danger'));
      });
    }

    ;
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__["REGISTER_FAIL"]
    });
  }
};

/***/ }),

/***/ "./src/actions/profile.js":
/*!********************************!*\
  !*** ./src/actions/profile.js ***!
  \********************************/
/*! exports provided: getCurrentProfile, createProfile, addExperience, addEducation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentProfile", function() { return getCurrentProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfile", function() { return createProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExperience", function() { return addExperience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEducation", function() { return addEducation; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ "./src/actions/alert.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");


 // Get current users profile

const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/profile/me');
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE"],
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["PROFILE_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.status
      }
    });
  }

  ;
}; // Create or update profile

const createProfile = (formData, history, edit = false) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/profile', formData, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["GET_PROFILE"],
      payload: res.data
    });
    dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])(edit ? 'Profile Updated' : 'Profile Created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }

    ;
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])(error.msg, 'danger'));
      });
    }

    ;
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["PROFILE_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.status
      }
    });
  }

  ;
}; // Add Experience

const addExperience = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put('/api/profile/experience', formData, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_PROFILE"],
      payload: res.data
    });
    dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])('Experience Added', 'success'));
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])(error.msg, 'danger'));
      });
    }

    ;
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["PROFILE_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.status
      }
    });
  }

  ;
}; // Add Education

const addEducation = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put('/api/profile/education', formData, config);
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["UPDATE_PROFILE"],
      payload: res.data
    });
    dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])('Education Added', 'success'));
    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(Object(_alert__WEBPACK_IMPORTED_MODULE_1__["setAlert"])(error.msg, 'danger'));
      });
    }

    ;
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_2__["PROFILE_ERROR"],
      payload: {
        msg: err.response.statusText,
        status: err.status
      }
    });
  }

  ;
};

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: SET_ALERT, REMOVE_ALERT, CLEAR_ALERT, REGISTER_FAIL, REGISTER_SUCCESS, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT, GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALERT", function() { return SET_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALERT", function() { return REMOVE_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ALERT", function() { return CLEAR_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAIL", function() { return REGISTER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOADED", function() { return USER_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ERROR", function() { return AUTH_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT", function() { return LOG_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROFILE", function() { return GET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_ERROR", function() { return PROFILE_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_PROFILE", function() { return CLEAR_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_PROFILE", function() { return UPDATE_PROFILE; });
const SET_ALERT = 'SET_ALERT';
const REMOVE_ALERT = 'REMOVE_ALERT';
const CLEAR_ALERT = 'CLEAR_ALERT';
const REGISTER_FAIL = 'REGISTER_FAIL';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const USER_LOADED = 'USER_LOADED';
const AUTH_ERROR = 'AUTH_ERROR';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOG_OUT = 'LOG_OUT';
const GET_PROFILE = 'GET_PROFILE';
const PROFILE_ERROR = 'PROFILE_ERROR';
const CLEAR_PROFILE = 'CLEAR_PROFILE';
const UPDATE_PROFILE = 'UPDATE_PROFILE';

/***/ }),

/***/ "./src/components/AlertComponent.js":
/*!******************************************!*\
  !*** ./src/components/AlertComponent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/AlertComponent.js";





const AlertComponent = ({
  alerts
}) => {
  return alerts !== null && alerts.length > 0 && alerts.map(alert => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    variant: alert.alertType,
    key: alert.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, alert.msg));
};

AlertComponent.propTypes = {
  alerts: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(AlertComponent));

/***/ }),

/***/ "./src/components/LandingPage.js":
/*!***************************************!*\
  !*** ./src/components/LandingPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/LandingPage.js";






const LandingPage = ({
  isAuthenticated
}) => {
  if (isAuthenticated) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Jumbotron"], {
    className: "text-center",
    style: {
      marginTop: "10rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "DevConnector"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "p-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "A social network for webdevelopers of the world!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "lg",
    variant: "primary",
    className: "mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Sign Up!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "lg",
    variant: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Log In")))));
};

LandingPage.propTypes = {
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(LandingPage));

/***/ }),

/***/ "./src/components/Navigation.js":
/*!**************************************!*\
  !*** ./src/components/Navigation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/auth */ "./src/actions/auth.js");
var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/Navigation.js";








const Navigation = ({
  auth: {
    isAuthenticated,
    loading
  },
  logout
}) => {
  const handleLogout = () => {
    const confirm = window.confirm('We thank you for your participation. Confirm to sign out.');
    if (confirm) logout();
  };

  const authLinks = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/dashboard",
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "laptop-code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      marginLeft: "0.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Dashboard"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: () => handleLogout(),
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "sign-out-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      marginLeft: "0.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Log Out"))));
  const guestLinks = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/users",
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      marginLeft: "0.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Developers"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/login",
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "door-open",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      marginLeft: "0.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Log In"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    className: "ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/register",
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "sign-in-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      marginLeft: "0.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, "Register"))));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
    bg: "light",
    expand: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/",
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "DevConnector")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Toggle, {
    "aria-controls": "basic-navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
    id: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, !loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isAuthenticated ? authLinks : guestLinks)));
};

Navigation.propTypes = {
  auth: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  logout: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  logout: _actions_auth__WEBPACK_IMPORTED_MODULE_6__["logout"]
})(Navigation));

/***/ }),

/***/ "./src/components/auth/Login.js":
/*!**************************************!*\
  !*** ./src/components/auth/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/auth */ "./src/actions/auth.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");


var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/auth/Login.js";







const Login = ({
  isAuthenticated,
  login
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    email: "",
    password: ""
  }),
        _useState2 = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const email = formData.email,
        password = formData.password;

  const handleChange = event => {
    event.preventDefault();

    let newData = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData);

    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };

  const handleSubmit = event => {
    event.preventDefault();
    login(email, password);
  }; // Redirect if logged in


  if (isAuthenticated) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: "/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Container"], {
    className: "pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "text-center mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Log In"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    onSubmit: e => handleSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
    controlId: "formEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, "Email address"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
    type: "email",
    onChange: e => handleChange(e),
    placeholder: "Enter your email",
    value: formData.email,
    name: "email",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
    controlId: "formPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
    type: "password",
    onChange: e => handleChange(e),
    placeholder: "Password",
    value: formData.password,
    name: "password",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Row, {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "primary",
    size: "lg",
    type: "submit",
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, "Log In")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Text, {
    className: "mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Don't have an account yet? "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "Register!"))));
};

Login.propTypes = {
  login: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  login: _actions_auth__WEBPACK_IMPORTED_MODULE_6__["login"]
})(Login));

/***/ }),

/***/ "./src/components/auth/Register.js":
/*!*****************************************!*\
  !*** ./src/components/auth/Register.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/alert */ "./src/actions/alert.js");
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/auth */ "./src/actions/auth.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");


var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/auth/Register.js";








const Register = ({
  alerts,
  isAuthenticated,
  setAlert,
  clearAlert,
  register
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: "",
    email: "",
    password: "",
    password2: ""
  }),
        _useState2 = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const name = formData.name,
        email = formData.email,
        password = formData.password; // Clear alerts on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    return () => {
      if (alerts.length > 0) clearAlert();
    };
  }, []);

  const handleChange = event => {
    event.preventDefault();

    let newData = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData);

    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (formData.password.toString() === formData.password2.toString()) {
      if (alerts.length > 0) clearAlert();
      register({
        name,
        email,
        password
      });
    } else {
      let newAlert = 'Check your password';

      if (alerts.every(item => item.msg !== newAlert)) {
        setAlert(newAlert, 'danger');
      }

      ;
    }

    ;
  };

  if (isAuthenticated) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
      to: "/dashboard",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    });
  }

  ;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Container"], {
    className: "pt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "text-center mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Register"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
    onSubmit: e => handleSubmit(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
    controlId: "formName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    value: formData.name,
    placeholder: "Enter your name",
    name: "name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
    controlId: "formEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "Email address"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
    type: "email",
    onChange: e => handleChange(e),
    placeholder: "Enter email",
    value: formData.email,
    name: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "We'll never share your email with anyone else."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "This site uses Gravatar so, if you want a profile image, use a Gravatar email.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
    controlId: "formPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
    type: "password",
    onChange: e => handleChange(e),
    placeholder: "Password",
    value: formData.password,
    name: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
    controlId: "formPassword2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "Confirm Password"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
    type: "password",
    onChange: e => handleChange(e),
    placeholder: "Confirm your password",
    value: formData.password2,
    name: "password2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Row, {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "primary",
    size: "lg",
    type: "submit",
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, "Register")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Text, {
    className: "mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Already have an account? "), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "Log in!"))));
}; // };


Register.propTypes = {
  setAlert: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  clearAlert: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  register: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  alerts: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  isAuthenticated: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};

const mapStateToProps = state => ({
  alerts: state.alert,
  isAuthenticated: state.auth.isAuthenticated
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  setAlert: _actions_alert__WEBPACK_IMPORTED_MODULE_6__["setAlert"],
  clearAlert: _actions_alert__WEBPACK_IMPORTED_MODULE_6__["clearAlert"],
  register: _actions_auth__WEBPACK_IMPORTED_MODULE_7__["register"]
})(Register));

/***/ }),

/***/ "./src/components/dashboard/Dashboard.js":
/*!***********************************************!*\
  !*** ./src/components/dashboard/Dashboard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _SpinnerComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SpinnerComponent */ "./src/components/dashboard/SpinnerComponent.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/profile */ "./src/actions/profile.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _DashboardButtons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DashboardButtons */ "./src/components/dashboard/DashboardButtons.js");
var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/dashboard/Dashboard.js";










const Dashboard = ({
  auth: {
    user
  },
  profile: {
    profile,
    loading
  },
  getCurrentProfile
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getCurrentProfile();
  }, []);
  return loading && profile === null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SpinnerComponent__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "pt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "Dashboard"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    icon: "user",
    className: "mx-auto mt-3",
    style: {
      fontSize: '3rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "mx-auto mt-4 text-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Welcome", user && ", ".concat(user.name))), profile !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DashboardButtons__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "text-center mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "You have not yet set up a profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "text-center mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/create-profile",
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Create profile")))));
};

Dashboard.propTypes = {
  getCurrentProfile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  auth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  profile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, {
  getCurrentProfile: _actions_profile__WEBPACK_IMPORTED_MODULE_6__["getCurrentProfile"]
})(Dashboard));

/***/ }),

/***/ "./src/components/dashboard/DashboardButtons.js":
/*!******************************************************!*\
  !*** ./src/components/dashboard/DashboardButtons.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/dashboard/DashboardButtons.js";




const DashboardButtons = ({
  history
}) => {
  const handleEditProfile = event => {
    event.preventDefault();
    history.push('/edit-profile');
  };

  const handleAddExperience = event => {
    event.preventDefault();
    history.push('/add-experience');
  };

  const handleAddEducation = event => {
    event.preventDefault();
    history.push('/add-education');
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "text-center mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "secondary",
    className: "px-4",
    onClick: e => handleEditProfile(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Edit Profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "secondary",
    className: "px-4",
    onClick: e => handleAddExperience(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Add Experience"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "secondary",
    className: "px-4",
    onClick: e => handleAddEducation(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Add Education")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(DashboardButtons));

/***/ }),

/***/ "./src/components/dashboard/SpinnerComponent.js":
/*!******************************************************!*\
  !*** ./src/components/dashboard/SpinnerComponent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/dashboard/SpinnerComponent.js";


/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  className: "d-flex justify-content-center align-items-center",
  style: {
    height: "80vh"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
  animation: "border",
  variant: "primary",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}))));

/***/ }),

/***/ "./src/components/profile/AddEducation.js":
/*!************************************************!*\
  !*** ./src/components/profile/AddEducation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/profile */ "./src/actions/profile.js");


var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/profile/AddEducation.js";







const AddEducation = ({
  addEducation,
  history
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  }),
        _useState2 = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const school = formData.school,
        degree = formData.degree,
        fieldofstudy = formData.fieldofstudy,
        from = formData.from,
        to = formData.to,
        current = formData.current,
        description = formData.description;

  const handleChange = event => {
    event.preventDefault();

    let newData = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData);

    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };

  const handleCurrentChange = () => {
    let newData = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData);

    newData.current = !newData.current;

    if (newData.current) {
      newData.to = '';
    }

    ;
    setFormData(newData);
  };

  const handleSubmit = async event => {
    event.preventDefault();
  };

  const handleReset = event => {
    event.preventDefault();
    let newData = {
      school: '',
      degree: '',
      fieldofstudy: '',
      from: '',
      to: '',
      current: false,
      description: ''
    };
    setFormData(newData);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "text-center mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Add Education Information"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "text-center my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Tell us about your education")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    onSubmit: e => handleSubmit(e),
    onReset: e => handleReset(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, "* = Required field"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formSchool",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "School"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "* Enter school",
    value: school,
    name: "school",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formDegree",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, "Degree"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "* Enter degree",
    value: degree,
    name: "degree",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formFieldOfStudy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "Field Of Study"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "* Enter field of study",
    value: fieldofstudy,
    name: "fieldofstudy",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formFrom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "From:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "date",
    onChange: e => handleChange(e),
    placeholder: "* Date when job started",
    value: from,
    name: "from",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }))), !current && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formTo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, "To:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "date",
    onChange: e => handleChange(e),
    placeholder: "Date when job ended",
    value: to,
    name: "to",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formCurrent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, "Is this your current education?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Check, {
    type: "checkbox",
    label: current ? 'Yes' : 'No',
    onChange: () => handleCurrentChange(),
    checked: current,
    value: current,
    name: "current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    as: "textarea",
    rows: "3",
    onChange: e => handleChange(e),
    placeholder: "A short description on the job",
    value: description,
    name: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    className: "d-flex justify-content-center align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    className: "text-center my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "primary",
    size: "lg",
    type: "submit",
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "secondary",
    size: "lg",
    type: "reset",
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, "Reset"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/dashboard",
    className: "btn btn-secondary pt-2",
    style: {
      fontSize: '1.2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, "Get Back")))));
};

AddEducation.propTypes = {
  addEducation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, {
  addEducation: _actions_profile__WEBPACK_IMPORTED_MODULE_7__["addEducation"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(AddEducation)));

/***/ }),

/***/ "./src/components/profile/AddExperience.js":
/*!*************************************************!*\
  !*** ./src/components/profile/AddExperience.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/profile */ "./src/actions/profile.js");


var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/profile/AddExperience.js";







const AddExperience = ({
  addExperience,
  history
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    title: '',
    company: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  }),
        _useState2 = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const title = formData.title,
        company = formData.company,
        location = formData.location,
        from = formData.from,
        to = formData.to,
        current = formData.current,
        description = formData.description;

  const handleChange = event => {
    event.preventDefault();

    let newData = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData);

    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };

  const handleCurrentChange = () => {
    let newData = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData);

    newData.current = !newData.current;

    if (newData.current) {
      newData.to = '';
    }

    ;
    setFormData(newData);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(formData);
  };

  const handleReset = event => {
    event.preventDefault();
    let newData = {
      title: '',
      company: '',
      location: '',
      from: '',
      to: '',
      current: false,
      description: ''
    };
    setFormData(newData);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "text-center mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Add Carrer Experience Information"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "text-center my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, "Add any developer/programming positions that you have had in the past")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    onSubmit: e => handleSubmit(e),
    onReset: e => handleReset(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "* = Required field"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formJobTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "Job Title"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "* Enter job title",
    value: title,
    name: "title",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formJobTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Company"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "* Enter company",
    value: company,
    name: "company",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formLocation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Location"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter job location",
    value: location,
    name: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formFrom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "From:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "date",
    onChange: e => handleChange(e),
    placeholder: "* Date when job started",
    value: from,
    name: "from",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }))), !current && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formTo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, "To:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "date",
    onChange: e => handleChange(e),
    placeholder: "Date when job ended",
    value: to,
    name: "to",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formCurrent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, "Is it your current job?"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Check, {
    type: "checkbox",
    label: current ? 'Yes' : 'No',
    onChange: () => handleCurrentChange(),
    checked: current,
    value: current,
    name: "current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formDescription",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    as: "textarea",
    rows: "3",
    onChange: e => handleChange(e),
    placeholder: "A short description on the job",
    value: description,
    name: "description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    className: "d-flex justify-content-center align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    className: "text-center my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "primary",
    size: "lg",
    type: "submit",
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "secondary",
    size: "lg",
    type: "reset",
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: undefined
  }, "Reset"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/dashboard",
    className: "btn btn-secondary pt-2",
    style: {
      fontSize: '1.2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, "Get Back")))));
};

AddExperience.propTypes = {
  addExperience: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, {
  addExperience: _actions_profile__WEBPACK_IMPORTED_MODULE_7__["addExperience"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(AddExperience)));

/***/ }),

/***/ "./src/components/profile/BrandComponent.js":
/*!**************************************************!*\
  !*** ./src/components/profile/BrandComponent.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/profile/BrandComponent.js";


const BrandComponent = ({
  brand
}) => {
  switch (brand) {
    case 'twitter':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: undefined
      }, "twitter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: undefined
      }));

    case 'facebook':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: undefined
      }, "facebook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: undefined
      }));

    case 'linkedin':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: undefined
      }, "linkedin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: undefined
      }));

    case 'youtube':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: undefined
      }, "youtube"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: undefined
      }));

    case 'instagram':
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        width: "32",
        height: "32",
        viewBox: "0 0 32 32",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: undefined
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: undefined
      }, "instagram"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: undefined
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: undefined
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: undefined
      }));

    default:
      return null;
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (BrandComponent);

/***/ }),

/***/ "./src/components/profile/CreateProfile.js":
/*!*************************************************!*\
  !*** ./src/components/profile/CreateProfile.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _BrandComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BrandComponent */ "./src/components/profile/BrandComponent.js");
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/profile */ "./src/actions/profile.js");


var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/profile/CreateProfile.js";








const CreateProfile = ({
  createProfile,
  history
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  }),
        _useState2 = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const company = formData.company,
        website = formData.website,
        location = formData.location,
        status = formData.status,
        skills = formData.skills,
        githubusername = formData.githubusername,
        bio = formData.bio,
        twitter = formData.twitter,
        facebook = formData.facebook,
        linkedin = formData.linkedin,
        youtube = formData.youtube,
        instagram = formData.instagram;

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState4 = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        socialMedia = _useState4[0],
        setSocialMedia = _useState4[1];

  const handleChange = event => {
    event.preventDefault();

    let newData = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData);

    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    createProfile(formData, history);
    window.scrollTo(0, 0);
  };

  const handleReset = event => {
    event.preventDefault();
    let newData = {
      company: '',
      website: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: ''
    };
    setFormData(newData);
  };

  const handleSocialMeidaToggle = event => {
    event.preventDefault();
    setSocialMedia(state => !state);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "text-center mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "Create Your Profile"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "text-center my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Let's get some information to make your profile stand out!")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    onSubmit: e => handleSubmit(e),
    onReset: e => handleReset(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "* = Required field"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formStatus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "Professional Status"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter status",
    value: status,
    name: "status",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "* Give us an idea of where you are in your career")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formCompany",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Company"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter company",
    value: company,
    name: "company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "Could be your own company or one you work for")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formWebsite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "Website"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter website",
    value: website,
    name: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }, "Could be your own company or one you work for")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formLocation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, "Location"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter location",
    value: location,
    name: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, "City & State suggested (example: Boston, MA)")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formSkills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, "Skills"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter skills",
    value: skills,
    name: "skills",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, "* City & State suggested (example: Boston, MA)")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formGithubUsername",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  }, "Github Username"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter Github username",
    value: githubusername,
    name: "githubusername",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }, "If you want your latest repos and a Github link, include your username")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formBio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: undefined
  }, "Biography"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    as: "textarea",
    rows: "3",
    onChange: e => handleChange(e),
    placeholder: "A short bio on yourself",
    value: bio,
    name: "bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, "Tell us a little about yourself?")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    className: "d-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    size: "md",
    className: "text-center my-5 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "secondary",
    onClick: e => handleSocialMeidaToggle(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, "Add Social Media Network Links"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, "Optional"))), socialMedia && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formTwitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: "d-flex justify-content-end mr-2 align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BrandComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    brand: "twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Twitter URL",
    value: twitter,
    name: "twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formFacebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: "d-flex justify-content-end mr-2 align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BrandComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    brand: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Facebook URL",
    value: facebook,
    name: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formYouTube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: "d-flex justify-content-end mr-2 align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BrandComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    brand: "youtube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "YouTube URL",
    value: youtube,
    name: "youtube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formLinkedIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: "d-flex justify-content-end mr-2 align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BrandComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    brand: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "LinkedIn URL",
    value: linkedin,
    name: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formInstagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: "d-flex justify-content-end mr-2 align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BrandComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    brand: "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Instagram URL",
    value: instagram,
    name: "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: undefined
  }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    className: "d-flex justify-content-center align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    className: "text-center my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "primary",
    size: "lg",
    type: "submit",
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: undefined
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "secondary",
    size: "lg",
    type: "reset",
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: undefined
  }, "Reset"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/dashboard",
    className: "btn btn-secondary pt-2",
    style: {
      fontSize: '1.2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: undefined
  }, "Get Back")))));
};

CreateProfile.propTypes = {
  createProfile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, {
  createProfile: _actions_profile__WEBPACK_IMPORTED_MODULE_8__["createProfile"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(CreateProfile)));

/***/ }),

/***/ "./src/components/profile/EditProfile.js":
/*!***********************************************!*\
  !*** ./src/components/profile/EditProfile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _BrandComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BrandComponent */ "./src/components/profile/BrandComponent.js");
/* harmony import */ var _dashboard_SpinnerComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dashboard/SpinnerComponent */ "./src/components/dashboard/SpinnerComponent.js");
/* harmony import */ var _actions_profile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../actions/profile */ "./src/actions/profile.js");


var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/profile/EditProfile.js";









const EditProfile = ({
  profile: {
    profile,
    loading
  },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  }),
        _useState2 = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        formData = _useState2[0],
        setFormData = _useState2[1];

  const company = formData.company,
        website = formData.website,
        location = formData.location,
        status = formData.status,
        skills = formData.skills,
        githubusername = formData.githubusername,
        bio = formData.bio,
        twitter = formData.twitter,
        facebook = formData.facebook,
        linkedin = formData.linkedin,
        youtube = formData.youtube,
        instagram = formData.instagram;

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState4 = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        socialMedia = _useState4[0],
        setSocialMedia = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getCurrentProfile();
    let profileData = {
      company: loading || !profile.company ? '' : profile.company,
      website: loading || !profile.website ? '' : profile.website,
      location: loading || !profile.location ? '' : profile.location,
      status: loading || !profile.status ? '' : profile.status,
      skills: loading || !profile.skills ? '' : profile.skills.join(','),
      githubusername: loading || !profile.githubusername ? '' : profile.githubusername,
      bio: loading || !profile.bio ? '' : profile.bio,
      twitter: loading || !profile.social ? '' : profile.social.twitter ? profile.social.twitter : '',
      facebook: loading || !profile.social ? '' : profile.social.facebook ? profile.social.facebook : '',
      linkedin: loading || !profile.social ? '' : profile.social.linkedin ? profile.social.linkedin : '',
      youtube: loading || !profile.social ? '' : profile.social.youtube ? profile.social.youtube : '',
      instagram: loading || !profile.social ? '' : profile.social.instagram ? profile.social.instagram : ''
    };
    setFormData(profileData);
  }, [loading]);

  const handleChange = event => {
    event.preventDefault();

    let newData = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, formData);

    newData[event.target.name] = event.target.value;
    setFormData(newData);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    createProfile(formData, history, true);
    window.scrollTo(0, 0);
  };

  const handleReset = event => {
    event.preventDefault();
    let newData = {
      company: '',
      website: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: ''
    };
    setFormData(newData);
  };

  const handleSocialMeidaToggle = event => {
    event.preventDefault();
    setSocialMedia(state => !state);
  };

  return loading && profile === null ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_dashboard_SpinnerComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "py-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "text-center mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "Edit Your Profile"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "text-center my-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", {
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, "Add information to make your profile stand out!")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    onSubmit: e => handleSubmit(e),
    onReset: e => handleReset(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "* = Required field"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formStatus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, "Professional Status"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter status",
    value: status,
    name: "status",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, "* Give us an idea of where you are in your career")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formCompany",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "Company"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter company",
    value: company,
    name: "company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, "Could be your own company or one you work for")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formWebsite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, "Website"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter website",
    value: website,
    name: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, "Could be your own company or one you work for")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formLocation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, "Location"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter location",
    value: location,
    name: "location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, "City & State suggested (example: Boston, MA)")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formSkills",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: undefined
  }, "Skills"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter skills",
    value: skills,
    name: "skills",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, "* City & State suggested (example: Boston, MA)")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formGithubUsername",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, "Github Username"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Enter Github username",
    value: githubusername,
    name: "githubusername",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, "If you want your latest repos and a Github link, include your username")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formBio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }, "Biography"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    as: "textarea",
    rows: "3",
    onChange: e => handleChange(e),
    placeholder: "A short bio on yourself",
    value: bio,
    name: "bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Text, {
    className: "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, "Tell us a little about yourself?")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    className: "d-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    size: "md",
    className: "text-center my-5 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "secondary",
    onClick: e => handleSocialMeidaToggle(e),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }, "Add Social Media Network Links"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, "Optional"))), socialMedia && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formTwitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: "d-flex justify-content-end mr-2 align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BrandComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    brand: "twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Twitter URL",
    value: twitter,
    name: "twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formFacebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: "d-flex justify-content-end mr-2 align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BrandComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    brand: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Facebook URL",
    value: facebook,
    name: "facebook",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formYouTube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: "d-flex justify-content-end mr-2 align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BrandComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    brand: "youtube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "YouTube URL",
    value: youtube,
    name: "youtube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formLinkedIn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: "d-flex justify-content-end mr-2 align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BrandComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    brand: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "LinkedIn URL",
    value: linkedin,
    name: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: undefined
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formInstagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: "d-flex justify-content-end mr-2 align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_BrandComponent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    brand: "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    type: "text",
    onChange: e => handleChange(e),
    placeholder: "Instagram URL",
    value: instagram,
    name: "instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: undefined
  }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Row, {
    className: "d-flex justify-content-center align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    className: "text-center my-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "primary",
    size: "lg",
    type: "submit",
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: undefined
  }, "Submit"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "secondary",
    size: "lg",
    type: "reset",
    className: "mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: undefined
  }, "Reset"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: "/dashboard",
    className: "btn btn-secondary pt-2",
    style: {
      fontSize: '1.2rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: undefined
  }, "Get Back")))));
};

EditProfile.propTypes = {
  createProfile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  getCurrentProfile: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, {
  createProfile: _actions_profile__WEBPACK_IMPORTED_MODULE_9__["createProfile"],
  getCurrentProfile: _actions_profile__WEBPACK_IMPORTED_MODULE_9__["getCurrentProfile"]
})(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(EditProfile)));

/***/ }),

/***/ "./src/components/routing/PrivateRoute.js":
/*!************************************************!*\
  !*** ./src/components/routing/PrivateRoute.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/components/routing/PrivateRoute.js";





const PrivateRoute = (_ref) => {
  let Component = _ref.component,
      _ref$auth = _ref.auth,
      isAuthenticated = _ref$auth.isAuthenticated,
      loading = _ref$auth.loading,
      rest = Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component", "auth"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], Object.assign({}, rest, {
    render: props => !isAuthenticated && !loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: undefined
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }));
};

PrivateRoute.propTypes = {
  auth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(PrivateRoute));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/home/jrsouza/Codes/MERN/DevConnector/client/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/reducers/alert.js":
/*!*******************************!*\
  !*** ./src/reducers/alert.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");

const initialState = [];
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const type = action.type,
        payload = action.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SET_ALERT"]:
      return [...state, payload];

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ALERT"]:
      return state.filter(alert => alert.id !== payload);

    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ALERT"]:
      return initialState;

    default:
      return state;
  }

  ;
});
;

/***/ }),

/***/ "./src/reducers/auth.js":
/*!******************************!*\
  !*** ./src/reducers/auth.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");


const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const type = action.type,
        payload = action.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["USER_LOADED"]:
      return Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isAuthenticated: true,
        loading: false,
        user: payload
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["REGISTER_SUCCESS"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"]:
      localStorage.setItem('token', payload.token);
      return Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, payload, {
        isAuthenticated: true,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["REGISTER_FAIL"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["AUTH_ERROR"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAIL"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT"]:
      localStorage.removeItem('token');
      return Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        token: null,
        isAuthenticated: false,
        loading: false
      });

    default:
      return state;
  }

  ;
});
;

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert */ "./src/reducers/alert.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./src/reducers/auth.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile */ "./src/reducers/profile.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  alert: _alert__WEBPACK_IMPORTED_MODULE_1__["default"],
  auth: _auth__WEBPACK_IMPORTED_MODULE_2__["default"],
  profile: _profile__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./src/reducers/profile.js":
/*!*********************************!*\
  !*** ./src/reducers/profile.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");


const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initialState, action) {
  const type = action.type,
        payload = action.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_PROFILE"]:
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["GET_PROFILE"]:
      return Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        profile: payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["PROFILE_ERROR"]:
      return Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        error: payload,
        loading: false
      });

    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["CLEAR_PROFILE"]:
      return Object(_home_jrsouza_Codes_MERN_DevConnector_client_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        profile: null,
        repos: [],
        loading: false
      });

    default:
      return state;
  }

  ;
});
;

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");




const initialState = {};
const middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]];
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/style.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/style.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/style.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/utilities/setAuthToken.js":
/*!***************************************!*\
  !*** ./src/utilities/setAuthToken.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const setAuthToken = token => {
  if (token) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['x-auth-token'];
  }

  ;
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/jrsouza/Codes/MERN/DevConnector/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/jrsouza/Codes/MERN/DevConnector/client/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map