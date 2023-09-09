"use strict";
(() => {
var exports = {};
exports.id = 385;
exports.ids = [385];
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

/***/ 7321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(5946);
;// CONCATENATED MODULE: ./models/CashOnDelivery.js
const { Schema , model , models  } = __webpack_require__(1185);
const CashOnDeliverySchema = new Schema({
    line_items: Object,
    name: String,
    email: String,
    city: String,
    postalCode: String,
    address: String,
    mobile: Number,
    paid: Boolean
}, {
    timestamps: true
});
const CashOnDelivery = models?.CashOnDelivery || model("CashOnDelivery", CashOnDeliverySchema);

// EXTERNAL MODULE: ./models/Products.js
var Products = __webpack_require__(3787);
;// CONCATENATED MODULE: ./pages/api/cashOnDelivery.js



async function handler(req, res) {
    await (0,mongoose/* mongooseConnect */.I)();
    if (req.method === "POST") {
        // Handle the POST request here
        const { name , email , city , postalCode , address , mobile , cartProducts  } = req.body;
        const productsIds = cartProducts;
        const unquieIds = [
            ...new Set(productsIds)
        ];
        const productsInfos = await Products/* Product.find */.x.find({
            _id: unquieIds
        });
        let line_items = [];
        for (const productId of unquieIds){
            const productInfo = productsInfos.find((p)=>p._id.toString() === productId);
            const quantity = productsIds.filter((id)=>id === productId)?.length || 0;
            if (quantity > 0 && productInfo) {
                line_items.push({
                    quantity,
                    price_data: {
                        currency: "BDT",
                        product_data: {
                            name: productInfo.title
                        },
                        unit_amount: productInfo.price * 100
                    }
                });
            }
        }
        const orderDoc = await CashOnDelivery.create({
            line_items,
            name,
            email,
            city,
            postalCode,
            address,
            mobile,
            paid: false
        });
        const response = {
            status: "success",
            message: "Cash on delivery request received"
        };
        res.status(200).json(response);
    } else {
        // Method Not Allowed
        res.status(405).json({
            message: "Method Not Allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7321));
module.exports = __webpack_exports__;

})();