"use strict";
(() => {
var exports = {};
exports.id = 300;
exports.ids = [300];
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

/***/ 3075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryPage),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2185);
/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9889);
/* harmony import */ var _components_Center__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2758);
/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(492);
/* harmony import */ var _models_Products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5236);
/* harmony import */ var _components_ProductsGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8807);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9648);
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9638);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_9__]);
axios__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const CategoryHeader = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-d81e3e43-0"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 1.5em;
  }
`;
const FiltersWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-d81e3e43-1"
})`
  display: flex;
  gap: 15px;
`;
const Filter = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div.withConfig({
    componentId: "sc-d81e3e43-2"
})`
  background-color: #ddd;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  gap: 5px;
  color: #444;
  select {
    background-color: transparent;
    border: 0;
    font-size: inherit;
    color: #444;
  }
`;
function CategoryPage({ category , subCategories , products: originalProducts  }) {
    const defaultSorting = "_id-desc";
    const defaultFilterValues = category.properties.map((p)=>({
            name: p.name,
            value: "all"
        }));
    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(originalProducts);
    const [filtersValues, setFiltersValues] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(defaultFilterValues);
    const [sort, setSort] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(defaultSorting);
    const [loadingProducts, setLoadingProducts] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [filtersChanged, setFiltersChanged] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    function handleFilterChange(filterName, filterValue) {
        setFiltersValues((prev)=>{
            return prev.map((p)=>({
                    name: p.name,
                    value: p.name === filterName ? filterValue : p.value
                }));
        });
        setFiltersChanged(true);
    }
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        if (!filtersChanged) {
            return;
        }
        setLoadingProducts(true);
        const catIds = [
            category._id,
            ...subCategories?.map((c)=>c._id) || []
        ];
        const params = new URLSearchParams();
        params.set("categories", catIds.join(","));
        params.set("sort", sort);
        filtersValues.forEach((f)=>{
            if (f.value !== "all") {
                params.set(f.name, f.value);
            }
        });
        const url = `/api/products?` + params.toString();
        axios__WEBPACK_IMPORTED_MODULE_9__["default"].get(url).then((res)=>{
            setProducts(res.data);
            setLoadingProducts(false);
        });
    }, [
        filtersValues,
        sort,
        filtersChanged
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Center__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CategoryHeader, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: category.name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FiltersWrapper, {
                                children: [
                                    category.properties.map((prop)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Filter, {
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        prop.name,
                                                        ":"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                    onChange: (ev)=>handleFilterChange(prop.name, ev.target.value),
                                                    value: filtersValues.find((f)=>f.name === prop.name).value,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: "all",
                                                            children: "All"
                                                        }),
                                                        prop.values.map((val)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: val,
                                                                children: val
                                                            }, val))
                                                    ]
                                                })
                                            ]
                                        }, prop.name)),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Filter, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "Sort:"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                value: sort,
                                                onChange: (ev)=>{
                                                    setSort(ev.target.value);
                                                    setFiltersChanged(true);
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "price-asc",
                                                        children: "price, lowest first"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "price-desc",
                                                        children: "price, highest first"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "_id-desc",
                                                        children: "newest first"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "_id-asc",
                                                        children: "oldest first"
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    loadingProducts && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Spinner__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        fullWidth: true
                    }),
                    !loadingProducts && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            products.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ProductsGrid__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                products: products
                            }),
                            products.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "Sorry, no products found"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    const category = await _models_Category__WEBPACK_IMPORTED_MODULE_4__/* .Category.findById */ .W.findById(context.query.id);
    const subCategories = await _models_Category__WEBPACK_IMPORTED_MODULE_4__/* .Category.find */ .W.find({
        parent: category._id
    });
    const catIds = [
        category._id,
        ...subCategories.map((c)=>c._id)
    ];
    const products = await _models_Products__WEBPACK_IMPORTED_MODULE_5__/* .Product.find */ .x.find({
        category: catIds
    });
    return {
        props: {
            category: JSON.parse(JSON.stringify(category)),
            subCategories: JSON.parse(JSON.stringify(subCategories)),
            products: JSON.parse(JSON.stringify(products))
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 8176:
/***/ ((module) => {

module.exports = require("react-spinners");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,551,185,759,690,462], () => (__webpack_exec__(3075)));
module.exports = __webpack_exports__;

})();