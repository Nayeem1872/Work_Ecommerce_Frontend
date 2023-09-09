"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
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

/***/ 1381:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(2758);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/Button.js
var Button = __webpack_require__(4759);
;// CONCATENATED MODULE: ./components/ButtonLink.js




const StyledLink = external_styled_components_default()((link_default())).withConfig({
    componentId: "sc-c65b3ffd-0"
})`
  ${Button/* ButtonStyle */.Z}
`;
function ButtonLink(props) {
    return /*#__PURE__*/ jsx_runtime.jsx(StyledLink, {
        ...props
    });
}

// EXTERNAL MODULE: ./components/icons/CartIcon.js
var CartIcon = __webpack_require__(8777);
// EXTERNAL MODULE: ./lib/colors.js
var colors = __webpack_require__(214);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(8551);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/FlyingButton.js






const FlyingButtonWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-b6453c20-0"
})`
  button {
    ${Button/* ButtonStyle */.Z};
    ${(props)=>props.main ? `
      background-color: ${colors/* primary */.T};
      color:white;
    ` : `
      background-color: transparent;
      border: 1px solid ${colors/* primary */.T};
      color:${colors/* primary */.T};
    `}
    ${(props)=>props.white && `
      background-color: white;
      border: 1px solid white;
      font-weight:500;
    `}
  }
  @keyframes fly {
    100% {
      top: 0;
      left: 65%;
      opacity: 0;
      display: none;
      max-width: 50px;
      max-height: 50px;
    }
  }
  img {
    display: none;
    max-width: 100px;
    max-height: 100px;
    opacity: 1;
    position: fixed;
    z-index: 5;
    animation: fly 1s;
    border-radius: 10px;
    
  }
`;
const FlyingButton = (props)=>{
    const { addProduct  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    const imgRef = (0,external_react_.useRef)();
    function sendImageToCart(ev) {
        imgRef.current.style.display = "inline-block";
        imgRef.current.style.left = ev.clientX - 50 + "px";
        imgRef.current.style.top = ev.clientY - 50 + "px";
        setTimeout(()=>{
            imgRef.current.style.display = "none";
        }, 1000);
    }
    (0,external_react_.useEffect)(()=>{
        const interval = setInterval(()=>{
            const reveal = imgRef.current?.closest("div[data-sr-id]");
            if (reveal?.style.opacity === "1") {
                // visible
                reveal.style.transform = "none";
            }
        }, 100);
        return ()=>clearInterval(interval);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(FlyingButtonWrapper, {
            white: props.white,
            main: props.main,
            onClick: ()=>addProduct(props._id),
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: props.src,
                    alt: "",
                    ref: imgRef
                }),
                /*#__PURE__*/ jsx_runtime.jsx("button", {
                    onClick: (ev)=>sendImageToCart(ev),
                    ...props
                })
            ]
        })
    });
};
FlyingButton.displayName = "FlyingButton";
/* harmony default export */ const components_FlyingButton = (FlyingButton);

// EXTERNAL MODULE: external "next-reveal"
var external_next_reveal_ = __webpack_require__(5807);
;// CONCATENATED MODULE: ./components/Featured.js







const Bg = external_styled_components_default().div.withConfig({
    componentId: "sc-ee863bc6-0"
})`
  background-color: #222;
  color: #fff;
  padding: 80px 0;
`;
const Title = external_styled_components_default().h1.withConfig({
    componentId: "sc-ee863bc6-1"
})`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;
const Desc = external_styled_components_default().p.withConfig({
    componentId: "sc-ee863bc6-2"
})`
  color: #aaa;
  font-size: 0.8rem;
`;
const ColumnsWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-ee863bc6-3"
})`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  img.main {
    max-width: 100%;
    max-height: 200px;
    display: block;
    margin: 0 auto;
    
  }

  div:nth-child(1) {
    order: 2;
    /* margin-left: auto; */
    margin-right: auto;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;

    & > div:nth-child(1) {
      order: 0;
    }

    img {
      max-width: 100%;
    }
  }
`;
const Column = external_styled_components_default().div.withConfig({
    componentId: "sc-ee863bc6-4"
})`
  display: flex;
  align-items: center;
`;
const ButtonsWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-ee863bc6-5"
})`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;
const CenterImg = external_styled_components_default().div.withConfig({
    componentId: "sc-ee863bc6-6"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  img {
    max-width: 100%;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;
const ImgColumn = external_styled_components_default()(Column).withConfig({
    componentId: "sc-ee863bc6-7"
})`
  & > div {
    width: 100%;
  }
`;
const Bb = external_styled_components_default().div.withConfig({
    componentId: "sc-ee863bc6-8"
})`
 padding: 10px;
`;
const ContentWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-ee863bc6-9"
})``;
function Featured({ product  }) {
    return /*#__PURE__*/ jsx_runtime.jsx(Bg, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Center/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnsWrapper, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Column, {
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime.jsx(external_next_reveal_.RevealWrapper, {
                                origin: "left",
                                delay: 0,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentWrapper, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(Title, {
                                            children: product.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(Desc, {
                                            children: product.description
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonsWrapper, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx(ButtonLink, {
                                                    href: "/product/" + product._id,
                                                    outline: 1,
                                                    white: 1,
                                                    title: "Read more about the product",
                                                    children: "Read more"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(components_FlyingButton, {
                                                    outline: 3,
                                                    white: 1,
                                                    _id: product._id,
                                                    src: product.images?.[0],
                                                    title: "Add to cart",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx(CartIcon/* default */.Z, {}),
                                                        "Add to cart"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(ImgColumn, {
                        children: /*#__PURE__*/ jsx_runtime.jsx(external_next_reveal_.RevealWrapper, {
                            delay: 0,
                            children: /*#__PURE__*/ jsx_runtime.jsx(CenterImg, {
                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                    className: "main",
                                    src: product.images?.[0],
                                    alt: ""
                                })
                            })
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./components/Header.js + 3 modules
var Header = __webpack_require__(2185);
// EXTERNAL MODULE: ./models/Products.js
var Products = __webpack_require__(5236);
// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(2336);
// EXTERNAL MODULE: ./components/ProductBox.js
var ProductBox = __webpack_require__(1690);
;// CONCATENATED MODULE: ./components/NewProducts.js




const ProductsGrid = external_styled_components_.styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding-top: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding-top: 10px;
  }
`;
const NewProducts_Title = external_styled_components_.styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 20px 0 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin: 15px 0 10px;
  }
`;
const ProductItem = external_styled_components_.styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
const ProductImage = external_styled_components_.styled.img`
  width: 100%;
  height: auto;
`;
const ProductName = external_styled_components_.styled.h3`
  font-size: 1.2rem;
  margin-top: 10px;
`;
const ProductPrice = external_styled_components_.styled.p`
  font-size: 1rem;
  color: #888;
  margin-top: 5px;
`;
const ProductDescription = external_styled_components_.styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-top: 5px;
`;
function NewProducts({ products  }) {
    console.log({
        products
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Center/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(NewProducts_Title, {
                children: "New Arrivals"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ProductsGrid, {
                children: products?.length > 0 && products.map((product)=>/*#__PURE__*/ jsx_runtime.jsx(ProductBox/* default */.Z, {
                        ...product
                    }, product.id))
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/AllProductsBox.js



// import Title from "./Title";




const ProductWrapper = external_styled_components_.styled.div`


`;
const Box = (0,external_styled_components_.styled)((link_default()))`
  background-color: #fff;
  padding: 10px;
  height: 180px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  img {
    max-width: 100%;
    max-height: 150px;
  }
`;
const AllProductsBox_Title = (0,external_styled_components_.styled)((link_default()))`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;
const ProductInfoBox = external_styled_components_.styled.div`
  margin-top: 5px;
`;
const PriceRow = external_styled_components_.styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Price = external_styled_components_.styled.div`
  font-size: 1.3rem;
  font-weight: bold;
`;
function AllProductBox({ _id , title , category , price , images  }) {
    const { addProduct  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    const url = "/product/" + _id;
    console.log(category);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ProductWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Box, {
                href: url,
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                        src: images[0],
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ProductInfoBox, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(AllProductsBox_Title, {
                        href: url,
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(PriceRow, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Price, {
                                children: [
                                    "৳",
                                    price
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(Button/* default */.C, {
                                onClick: ()=>addProduct(_id),
                                primary: true,
                                outline: true,
                                children: /*#__PURE__*/ jsx_runtime.jsx(CartIcon/* default */.Z, {
                                    alt: "Add to Cart"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/AllProducts.js





const AllProducts_ProductsGrid = external_styled_components_.styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  padding-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
const AllProducts_Title = external_styled_components_.styled.h2`
  font-size: 2rem;
  margin: 50px 0 20px;
  font-weight: normal;
`;
const ShowAllSquare = (0,external_styled_components_.styled)((link_default()))`
  background-color: #ddd;
  height: 60px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #555;
  text-decoration: none;
  margin-top: 40px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
function AllProducts_NewProducts({ products  }) {
    console.log({
        products
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Center/* default */.Z, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(AllProducts_Title, {
                children: "All Products"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(AllProducts_ProductsGrid, {
                children: products?.length > 0 && products.map((product)=>/*#__PURE__*/ jsx_runtime.jsx(AllProductBox, {
                        ...product
                    }, product.id))
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ShowAllSquare, {
                href: "/products",
                children: "Show all Products →"
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(765);
;// CONCATENATED MODULE: ./pages/index.js








// import NewProducts from "@/components/NewProducts";
// import { WishedProduct } from "@/models/WishedProduct";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import { Setting } from "@/models/Setting";
function HomePage({ product , newProducts , allProducts  }) {
    // console.log(product)
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Featured, {
                product: product
            }),
            /*#__PURE__*/ jsx_runtime.jsx(NewProducts, {
                products: newProducts
            }),
            /*#__PURE__*/ jsx_runtime.jsx(AllProducts_NewProducts, {
                products: allProducts
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
}
async function getServerSideProps() {
    const featuredProductId = "6498165c4993ae72741f5a16";
    await (0,mongoose/* mongooseConnect */.I)();
    const product = await Products/* Product.findById */.x.findById(featuredProductId);
    const newProducts = await Products/* Product.find */.x.find({}, null, {
        sort: {
            "_id": -1
        },
        limit: 4
    });
    const allProducts = await Products/* Product.find */.x.find({}, null, {
        sort: {
            "_id": 1
        },
        limit: 8
    });
    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
            newProducts: JSON.parse(JSON.stringify(newProducts)),
            allProducts: JSON.parse(JSON.stringify(allProducts))
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
var __webpack_exports__ = __webpack_require__.X(0, [893,664,551,185,759,765,690], () => (__webpack_exec__(1381)));
module.exports = __webpack_exports__;

})();