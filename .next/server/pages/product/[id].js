"use strict";
(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 9889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h1.withConfig({
    componentId: "sc-aa9cfb0-0"
})`
  font-size: 1.5em;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);


/***/ }),

/***/ 8777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CartIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function CartIcon({ className ="w-6 h-6"  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        })
    });
}


/***/ }),

/***/ 2336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ mongooseConnect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

function mongooseConnect() {
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();
    } else {
        const uri = process.env.MONGODB_URI;
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);
    }
}


/***/ }),

/***/ 5236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const ProductSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    category: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),
        ref: "Category"
    },
    properties: {
        type: Object
    }
}, {
    timestamps: true
});
const Product = mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Product || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Product", ProductSchema);


/***/ }),

/***/ 6550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProductPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(4759);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(8551);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(2758);
// EXTERNAL MODULE: ./components/Header.js + 3 modules
var Header = __webpack_require__(2185);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ProductImages.js



const Image = external_styled_components_default().img.withConfig({
    componentId: "sc-47b902ff-0"
})`
    max-width: 100%;
    max-height: 100%;
  `;
const BigImage = external_styled_components_default().img.withConfig({
    componentId: "sc-47b902ff-1"
})`
   max-width: 250;
  max-height: 500px;
`;
const ImageButtons = external_styled_components_default().div.withConfig({
    componentId: "sc-47b902ff-2"
})`
    display: flex;
    gap: 10px;
    flex-grow: 0;
    margin-top: 10px;
  `;
const ImageButton = external_styled_components_default().div.withConfig({
    componentId: "sc-47b902ff-3"
})`
    border: 2px solid #ccc;
    ${(props)=>props.active ? `
      border-color: #ccc;
    ` : `
      border-color: transparent;
    `}
    height: 70px;
    padding: 2px;
    cursor: pointer;
    border-radius: 5px;
  `;
const BigImageWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-47b902ff-4"
})`
  text-align: center;
`;
function ProductImages({ images  }) {
    const [activeImage, setActiveImage] = (0,external_react_.useState)(images?.[0]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(BigImageWrapper, {
                children: /*#__PURE__*/ jsx_runtime.jsx(BigImage, {
                    src: activeImage
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ImageButtons, {
                children: images.map((image)=>/*#__PURE__*/ jsx_runtime.jsx(ImageButton, {
                        active: image === activeImage,
                        onClick: ()=>setActiveImage(image),
                        children: /*#__PURE__*/ jsx_runtime.jsx(Image, {
                            src: image,
                            alt: ""
                        })
                    }, image))
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/Title.js
var Title = __webpack_require__(9889);
;// CONCATENATED MODULE: ./components/WhiteBox.js

const WhiteBox = external_styled_components_default().div.withConfig({
    componentId: "sc-20cc032c-0"
})`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box-shadow */
  border: 1px solid #ccc; /* Add a border */
`;
/* harmony default export */ const components_WhiteBox = (WhiteBox);

// EXTERNAL MODULE: ./components/icons/CartIcon.js
var CartIcon = __webpack_require__(8777);
// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(2336);
// EXTERNAL MODULE: ./models/Products.js
var Products = __webpack_require__(5236);
;// CONCATENATED MODULE: ./pages/product/[id].js













const ColWrapper = external_styled_components_.styled.div`
  display: flex;
  grid-template-columns: 1fr;
  flex-direction: column;
  gap: 40px;
  margin-top: 50px ;
  

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
`;
const Price = external_styled_components_.styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #555;
`;
const Pb = external_styled_components_.styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  
  color: #888;
  margin-bottom: 40px;
`;
const PA = external_styled_components_.styled.div`
display: flex;
gap: 20px;

`;
function ProductPage({ product  }) {
    const { addProduct  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Center/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColWrapper, {
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(components_WhiteBox, {
                            children: /*#__PURE__*/ jsx_runtime.jsx(ProductImages, {
                                images: product.images
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Pb, {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx(Title/* default */.Z, {
                                    children: product.title
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: product.description
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(PA, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Price, {
                                            children: [
                                                "Price:৳",
                                                product.price
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.C, {
                                            primary: true,
                                            onClick: ()=>addProduct(product._id),
                                            children: [
                                                " ",
                                                /*#__PURE__*/ jsx_runtime.jsx(CartIcon/* default */.Z, {}),
                                                " Add to cart"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
async function getServerSideProps(context) {
    await (0,mongoose/* mongooseConnect */.I)();
    const { id  } = context.query;
    const product = await Products/* Product.findById */.x.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    };
}


/***/ }),

/***/ 3300:
/***/ ((module) => {

module.exports = require("@clerk/nextjs");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,551,185,759], () => (__webpack_exec__(6550)));
module.exports = __webpack_exports__;

})();