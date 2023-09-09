"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(8551);
;// CONCATENATED MODULE: external "react-helmet"
const external_react_helmet_namespaceObject = require("react-helmet");
// EXTERNAL MODULE: external "@clerk/nextjs"
var nextjs_ = __webpack_require__(3300);
;// CONCATENATED MODULE: ./pages/_app.js




const metadata = {
    title: "Ecommerce",
    description: "Ecommerce"
};
function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(nextjs_.ClerkProvider, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_helmet_namespaceObject.Helmet, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("title", {
                            children: metadata.title
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("meta", {
                            name: "description",
                            content: metadata.description
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("link", {
                            href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
                            rel: "stylesheet"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("style", {
                            children: `
          body {
            background-color: #eee;
            padding: 0;
            margin: 0;
            font-family: 'Poppins', sans-serif;
          }
        `
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "/2.jpg",
                            alt: "Logo"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx(CartContext/* CartContextProvider */.G, {
                    children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                        ...pageProps
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 3300:
/***/ ((module) => {

module.exports = require("@clerk/nextjs");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,551], () => (__webpack_exec__(486)));
module.exports = __webpack_exports__;

})();