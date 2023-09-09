"use strict";
(() => {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

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

/***/ 3632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ Order)
/* harmony export */ });
const { Schema , model , models  } = __webpack_require__(1185);
const OrderSchema = new Schema({
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
const Order = models?.Order || model("Order", OrderSchema);


/***/ }),

/***/ 439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(5946);
;// CONCATENATED MODULE: external "micro"
const external_micro_namespaceObject = require("micro");
// EXTERNAL MODULE: ./models/Order.js
var Order = __webpack_require__(3632);
;// CONCATENATED MODULE: ./pages/api/webhook.js

const stripe = __webpack_require__(8174)(process.env.STRIPE_SK);


const endpointSecret = "whsec_a2eaa7d132c808a98a00d23223e548baa947295b62ed9b07bacf0254abd4f3d8";
async function handler(req, res) {
    await (0,mongoose/* mongooseConnect */.I)();
    const sig = req.headers["stripe-signature"];
    let event;
    try {
        event = stripe.webhooks.constructEvent(await (0,external_micro_namespaceObject.buffer)(req), sig, endpointSecret);
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }
    // Handle the event
    switch(event.type){
        case "checkout.session.completed":
            const data = event.data.object;
            const orderId = data.metadata.orderId;
            const paid = data.payment_status === "paid";
            if (orderId && paid) {
                await Order/* Order.findByIdAndUpdate */.K.findByIdAndUpdate(orderId, {
                    paid: true
                });
            }
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    res.status(200).send("ok");
}
const config = {
    api: {
        bodyParser: false
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(439));
module.exports = __webpack_exports__;

})();