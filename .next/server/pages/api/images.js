"use strict";
(() => {
var exports = {};
exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 9816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const images = [
    {
        id: 1,
        title: "Image 1",
        location: "/images.jpeg"
    },
    {
        id: 2,
        title: "Image 2",
        location: "/1.webp"
    },
    {
        id: 2,
        title: "Image 2",
        location: "/1.webp"
    },
    {
        id: 2,
        title: "Image 2",
        location: "/1.webp"
    },
    {
        id: 2,
        title: "Image 2",
        location: "/1.webp"
    },
    {
        id: 2,
        title: "Image 2",
        location: "/1.webp"
    }
];
function handler(req, res) {
    res.status(200).json(images);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9816));
module.exports = __webpack_exports__;

})();