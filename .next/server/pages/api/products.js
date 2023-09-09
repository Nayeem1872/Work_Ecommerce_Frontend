"use strict";
(() => {
var exports = {};
exports.id = 221;
exports.ids = [221];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5946:
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

/***/ 3787:
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

/***/ 3590:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var _lib_mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5946);
/* harmony import */ var _models_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3787);


async function handle(req, res) {
    await (0,_lib_mongoose__WEBPACK_IMPORTED_MODULE_0__/* .mongooseConnect */ .I)();
    const { categories , sort , phrase , ...filters } = req.query;
    let [sortField, sortOrder] = (sort || "_id-desc").split("-");
    const productsQuery = {};
    if (categories) {
        productsQuery.category = categories.split(",");
    }
    if (phrase) {
        productsQuery["$or"] = [
            {
                title: {
                    $regex: phrase,
                    $options: "i"
                }
            },
            {
                description: {
                    $regex: phrase,
                    $options: "i"
                }
            }
        ];
    }
    if (Object.keys(filters).length > 0) {
        Object.keys(filters).forEach((filterName)=>{
            productsQuery["properties." + filterName] = filters[filterName];
        });
    }
    console.log(productsQuery);
    res.json(await _models_Products__WEBPACK_IMPORTED_MODULE_1__/* .Product.find */ .x.find(productsQuery, null, {
        sort: {
            [sortField]: sortOrder === "asc" ? 1 : -1
        }
    }));
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3590));
module.exports = __webpack_exports__;

})();