"use strict";
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 8730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "authOptions": () => (/* binding */ authOptions),
  "default": () => (/* binding */ _nextauth_)
});

// EXTERNAL MODULE: external "next-auth"
var external_next_auth_ = __webpack_require__(3227);
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_);
// EXTERNAL MODULE: external "next-auth/providers/google"
var google_ = __webpack_require__(3598);
var google_default = /*#__PURE__*/__webpack_require__.n(google_);
// EXTERNAL MODULE: external "@next-auth/mongodb-adapter"
var mongodb_adapter_ = __webpack_require__(166);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
;// CONCATENATED MODULE: ./lib/mongodb.js
// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}
const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise;
if (false) {} else {
    // In production mode, it's best to not use a global variable.
    client = new external_mongodb_.MongoClient(uri, options);
    clientPromise = client.connect();
}
// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
/* harmony default export */ const mongodb = (clientPromise);

;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js




const authOptions = {
    gajelas: process.env.SECRET_ASAL,
    secret: process.env.SECRET,
    providers: [
        google_default()({
            clientId: process.env.GOOGLE_FRONT_ID,
            clientSecret: process.env.GOOGLE_FRONT_SECRET
        })
    ],
    adapter: (0,mongodb_adapter_.MongoDBAdapter)(mongodb)
};
/* harmony default export */ const _nextauth_ = (external_next_auth_default()(authOptions));


/***/ })

};
;