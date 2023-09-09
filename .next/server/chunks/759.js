"use strict";
exports.id = 759;
exports.ids = [759];
exports.modules = {

/***/ 4759:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ Button),
/* harmony export */   "Z": () => (/* binding */ ButtonStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(214);



const ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
  border:0;
  padding: 8px 12px;
  border-radius: 10px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight:500;
  svg{
    height: 25px;
    margin-right: 5px;
  }
  ${(props)=>props.block && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
    display: block;
    width: 100%;
  `}
  ${(props)=>props.white && !props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
    background-color: #fff;
    color: #000;
  `}
  ${(props)=>props.white && props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
    background-color: transparent;
    color: #fff;
    border: 1px solid #fff;
  `}
  ${(props)=>props.black && !props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
    background-color: #000;
    color: #fff;
  `}
  ${(props)=>props.black && props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
  `}
  ${(props)=>props.primary && !props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
    background-color: ${_lib_colors__WEBPACK_IMPORTED_MODULE_2__/* .primary */ .T};
    border: 1px solid ${_lib_colors__WEBPACK_IMPORTED_MODULE_2__/* .primary */ .T};
    color:#fff;
  `}
  ${(props)=>props.primary && props.outline && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
    background-color: transparent;
    border: 1px solid ${_lib_colors__WEBPACK_IMPORTED_MODULE_2__/* .primary */ .T};
    color:${_lib_colors__WEBPACK_IMPORTED_MODULE_2__/* .primary */ .T};
  `}
  ${(props)=>props.size === "l" && styled_components__WEBPACK_IMPORTED_MODULE_1__.css`
    font-size:1.2rem;
    padding: 10px 20px;
    svg{
      height: 20px;
    }
  `}
`;
const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default().button.withConfig({
    componentId: "sc-562aa9af-0"
})`
  ${ButtonStyle}
`;
function Button({ children , ...rest }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledButton, {
        ...rest,
        children: children
    });
}


/***/ }),

/***/ 214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ primary)
/* harmony export */ });
const primary = "#0D3D29";


/***/ })

};
;