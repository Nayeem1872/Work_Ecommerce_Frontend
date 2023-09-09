"use strict";
exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


// import logo from "https://www.rpl.rootmpl.com/img/core-img/logo2.png"
const FooterContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().footer.withConfig({
    componentId: "sc-31eea3ae-0"
})`
  background-color: #222;
  color: #fff;
  padding: 20px;
  margin-top: auto; /* Make the footer stick to the bottom */
`;
const FooterContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-31eea3ae-1"
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const FooterColumn = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-31eea3ae-2"
})`
  flex: 1 0 100%;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    flex: 1 0 33.33%;
    margin-bottom: 0;
  }
`;
const FooterInfo = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-31eea3ae-3"
})`
  /* text-align: left; */
`;
const FooterCompanyName = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h3.withConfig({
    componentId: "sc-31eea3ae-4"
})`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;
const FooterAddress = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-31eea3ae-5"
})`
  margin: 0;
`;
const FooterPhone = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-31eea3ae-6"
})`
  margin: 0;
`;
const FooterLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default().a.withConfig({
    componentId: "sc-31eea3ae-7"
})`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
const MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-31eea3ae-8"
})`
  display: flex;
  flex-direction: column;
   min-height: 40vh; /* Make the main container take up the full viewport height */
`;
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
    componentId: "sc-31eea3ae-9"
})`
  flex: 1 0 auto; /* Allow the content to grow and fill the remaining vertical space */
`;
const AllRightsReserved = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p.withConfig({
    componentId: "sc-31eea3ae-10"
})`
  text-align: center;
  font-size: 0.9rem;
  color: #aaa;
  margin-top: 20px;
`;
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MainContainer, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentWrapper, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterContainer, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FooterContent, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterColumn, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FooterInfo, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterCompanyName, {
                                            children: "Root Bangladesh"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterAddress, {
                                            children: "Plot#237,House#41,North Badda Satarkul Road, Dhaka-1214,Bangladesh"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterPhone, {
                                            children: "+8801627172028(Hotline)"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FooterColumn, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterLink, {
                                        href: "/",
                                        children: "Home"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterLink, {
                                        href: "/products",
                                        children: "Products"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterLink, {
                                        href: "/categories",
                                        children: "Categories"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterColumn, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AllRightsReserved, {
                                    children: [
                                        "\xa9 ",
                                        currentYear,
                                        " All rights reserved to Root Bangladesh"
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}


/***/ })

};
;