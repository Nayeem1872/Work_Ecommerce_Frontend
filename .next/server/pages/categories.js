"use strict";
(() => {
var exports = {};
exports.id = 161;
exports.ids = [161];
exports.modules = {

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

/***/ 492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const CategorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId),
        ref: "Category"
    },
    properties: [
        {
            type: Object
        }
    ]
});
const Category = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.Category || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Category", CategorySchema);


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

/***/ 4925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoriesPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2185);
/* harmony import */ var _components_Center__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2758);
/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(492);
/* harmony import */ var _models_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5236);
/* harmony import */ var _components_ProductBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1690);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_reveal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5807);
/* harmony import */ var next_reveal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_reveal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2336);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(765);











// import { getServerSession } from "next-auth";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import { WishedProduct } from "@/models/WishedProduct";
const CategoryGrid = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
    componentId: "sc-a5f253df-0"
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
const CategoryTitle = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
    componentId: "sc-a5f253df-1"
})`
  display: flex;
  margin-top: 10px;
  margin-bottom: 0;
  align-items: center;
  gap: 10px;
  h2 {
    margin-bottom: 10px;
    margin-top: 10px;
  }
  a {
    color: #555;
    display: inline-block;
  }
`;
const CategoryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default().div.withConfig({
    componentId: "sc-a5f253df-2"
})`
  margin-bottom: 40px;
`;
const ShowAllSquare = styled_components__WEBPACK_IMPORTED_MODULE_6___default()((next_link__WEBPACK_IMPORTED_MODULE_7___default())).withConfig({
    componentId: "sc-a5f253df-3"
})`
  background-color: #ddd;
  height: 160px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #555;
  text-decoration: none;
`;
function CategoriesPage({ mainCategories , categoriesProducts , wishedProducts =[]  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Center__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: mainCategories.map((cat)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CategoryWrapper, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CategoryTitle, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        children: cat.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                                            href: "/category/" + cat._id,
                                            children: "Show all"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CategoryGrid, {
                                children: [
                                    categoriesProducts[cat._id].map((p, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_reveal__WEBPACK_IMPORTED_MODULE_8__.RevealWrapper, {
                                            delay: index * 50,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProductBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                ...p,
                                                wished: wishedProducts.includes(p._id)
                                            })
                                        }, index)),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_reveal__WEBPACK_IMPORTED_MODULE_8__.RevealWrapper, {
                                        delay: categoriesProducts[cat._id].length * 50,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShowAllSquare, {
                                            href: "/category/" + cat._id,
                                            children: "Show all →"
                                        })
                                    })
                                ]
                            })
                        ]
                    }, cat._id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        ]
    });
}
async function getServerSideProps(ctx) {
    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_9__/* .mongooseConnect */ .I)();
    const categories = await _models_Category__WEBPACK_IMPORTED_MODULE_3__/* .Category.find */ .W.find();
    const mainCategories = categories.filter((c)=>!c.parent);
    const categoriesProducts = {}; // catId => [products]
    const allFetchedProductsId = [];
    for (const mainCat of mainCategories){
        const mainCatId = mainCat._id.toString();
        const childCatIds = categories.filter((c)=>c?.parent?.toString() === mainCatId).map((c)=>c._id.toString());
        const categoriesIds = [
            mainCatId,
            ...childCatIds
        ];
        const products = await _models_Products__WEBPACK_IMPORTED_MODULE_4__/* .Product.find */ .x.find({
            category: categoriesIds
        }, null, {
            limit: 3,
            sort: {
                _id: -1
            }
        });
        allFetchedProductsId.push(...products.map((p)=>p._id.toString()));
        categoriesProducts[mainCat._id] = products;
    }
    // const session = await getServerSession(ctx.req, ctx.res, authOptions);
    // const wishedProducts = session?.user
    //   ? await WishedProduct.find({
    //       userEmail: session?.user.email,
    //       product: allFetchedProductsId,
    //     })
    //   : [];
    return {
        props: {
            mainCategories: JSON.parse(JSON.stringify(mainCategories)),
            categoriesProducts: JSON.parse(JSON.stringify(categoriesProducts))
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

/***/ 5807:
/***/ ((module) => {

module.exports = require("next-reveal");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,551,185,759,765,690], () => (__webpack_exec__(4925)));
module.exports = __webpack_exports__;

})();