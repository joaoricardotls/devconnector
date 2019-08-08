webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.efb057e58f8793e21419.hot-update.js.map