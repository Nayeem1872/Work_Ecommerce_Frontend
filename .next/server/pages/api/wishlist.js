"use strict";
(() => {
var exports = {};
exports.id = 560;
exports.ids = [560,748];
exports.modules = {

/***/ 166:
/***/ ((module) => {

module.exports = require("@next-auth/mongodb-adapter");

/***/ }),

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 3598:
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

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

/***/ 8522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handle)
});

// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(5946);
// EXTERNAL MODULE: external "next-auth"
var external_next_auth_ = __webpack_require__(3227);
// EXTERNAL MODULE: ./pages/api/auth/[...nextauth].js + 1 modules
var _nextauth_ = __webpack_require__(8730);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
// EXTERNAL MODULE: ./models/Products.js
var Products = __webpack_require__(3787);
;// CONCATENATED MODULE: ./models/WishedProduct.js


const WishedProductSchema = new external_mongoose_.Schema({
    userEmail: {
        type: String,
        required: true
    },
    product: {
        type: external_mongoose_.Schema.Types.ObjectId,
        ref: Products/* Product */.x
    }
});
const WishedProduct = external_mongoose_.models?.WishedProduct || (0,external_mongoose_.model)("WishedProduct", WishedProductSchema);

;// CONCATENATED MODULE: ./pages/api/wishlist.js




async function handle(req, res) {
    await (0,mongoose/* mongooseConnect */.I)();
    const { user  } = await (0,external_next_auth_.getServerSession)(req, res, _nextauth_.authOptions);
    if (req.method === "POST") {
        const { product  } = req.body;
        const wishedDoc = await WishedProduct.findOne({
            userEmail: user.email,
            product
        });
        if (wishedDoc) {
            await WishedProduct.findByIdAndDelete(wishedDoc._id);
            res.json({
                wishedDoc
            });
        } else {
            await WishedProduct.create({
                userEmail: user.email,
                product
            });
            res.json("created");
        }
    }
    if (req.method === "GET") {
        res.json(await WishedProduct.find({
            userEmail: user.email
        }).populate("product"));
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730], () => (__webpack_exec__(8522)));
module.exports = __webpack_exports__;

})();