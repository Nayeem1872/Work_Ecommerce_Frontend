"use strict";
(() => {
var exports = {};
exports.id = 534;
exports.ids = [534];
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

/***/ 3857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handle)
});

// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(5946);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
;// CONCATENATED MODULE: ./models/Review.js

const reviewSchema = new external_mongoose_.Schema({
    title: String,
    description: String,
    stars: Number,
    product: {
        type: external_mongoose_.Schema.Types.ObjectId
    }
}, {
    timestamps: true
});
const Review = external_mongoose_.models?.Review || (0,external_mongoose_.model)("Review", reviewSchema);

;// CONCATENATED MODULE: ./pages/api/reviews.js


async function handle(req, res) {
    await (0,mongoose/* mongooseConnect */.I)();
    if (req.method === "POST") {
        const { title , description , stars , product  } = req.body;
        res.json(await Review.create({
            title,
            description,
            stars,
            product
        }));
    }
    if (req.method === "GET") {
        const { product  } = req.query;
        res.json(await Review.find({
            product
        }, null, {
            sort: {
                createdAt: -1
            }
        }));
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3857));
module.exports = __webpack_exports__;

})();