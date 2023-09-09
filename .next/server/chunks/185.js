"use strict";
exports.id = 185;
exports.ids = [185];
exports.modules = {

/***/ 2758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Center)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_1__.styled.div`
    max-width:1200px;
    margin: 0 auto;
    padding : 0 20px
`;
function Center({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDiv, {
        children: children
    });
}


/***/ }),

/***/ 2185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Center.js
var Center = __webpack_require__(2758);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/CartContext.js
var CartContext = __webpack_require__(8551);
;// CONCATENATED MODULE: ./components/icons/Bars.js

function BarsIcon({ className ="w-6 h-6"  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        })
    });
}

;// CONCATENATED MODULE: ./components/icons/SearchIcon.js

function SearchIcon({ className ="w-6 h-6"  }) {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        className: className,
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        })
    });
}

;// CONCATENATED MODULE: ./components/icons/User.js

function User() {
    return /*#__PURE__*/ jsx_runtime.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        class: "w-6 h-6 px-3",
        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        })
    });
}

// EXTERNAL MODULE: external "@clerk/nextjs"
var nextjs_ = __webpack_require__(3300);
;// CONCATENATED MODULE: ./components/Header.js










const StyleHeader = external_styled_components_default().header.withConfig({
    componentId: "sc-65bf7dcd-0"
})`
  background-color: #222;
`;
const Logo = external_styled_components_default()((link_default())).withConfig({
    componentId: "sc-65bf7dcd-1"
})`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
  margin-bottom: -5px;
`;
const Wrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-65bf7dcd-2"
})`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = external_styled_components_default().nav.withConfig({
    componentId: "sc-65bf7dcd-3"
})`
  ${(props)=>props.mobileNavActive ? `
    display: block;
    z-index: 4;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  margin-bottom: -15px;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
    align-items: center; /* Add this line to align items vertically */
  }
`;
const NavLink = external_styled_components_default()((link_default())).withConfig({
    componentId: "sc-65bf7dcd-4"
})`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
  &:hover {
    color: #fff; 
  }
`;
const NavButton = external_styled_components_default().button.withConfig({
    componentId: "sc-65bf7dcd-5"
})`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const SideIcons = external_styled_components_default().div.withConfig({
    componentId: "sc-65bf7dcd-6"
})`
  display: flex;
  align-items: center;
  margin-bottom: -15px;
  
  a {
    display: inline-block;
    min-width: 20px;
    color: white;
    svg {
      width: 18px;
      height: 18px;
    }
  }
  a:first-child {
    margin-right: 10px; /* You can adjust the value as needed */
  }
`;
const LogoImage = external_styled_components_default().img.withConfig({
    componentId: "sc-65bf7dcd-7"
})`
  width: 40px; /* Adjust the width and height as per your logo's size */
  height: auto;
  margin-right: 10px;
  margin-bottom: -10px;
  border-radius: 50%;

  /* Add some margin to separate the logo from the text */
`;
function Header() {
    const { cartProducts  } = (0,external_react_.useContext)(CartContext/* CartContext */.A);
    const [mobileNavActive, setMobileNavActive] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime.jsx(StyleHeader, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Center/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Wrapper, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Logo, {
                        href: "/",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(LogoImage, {
                                src: "/2.jpg",
                                alt: "Logo"
                            }),
                            "Ecommerce"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(StyledNav, {
                        mobileNavActive: mobileNavActive,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(NavLink, {
                                href: "/",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(NavLink, {
                                href: "/categories",
                                children: "Product List"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(NavLink, {
                                href: "/certificate",
                                children: "Orders"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(NavLink, {
                                href: "/cart",
                                children: [
                                    "Cart(",
                                    cartProducts.length,
                                    ")"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(SideIcons, {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/search",
                                children: /*#__PURE__*/ jsx_runtime.jsx(SearchIcon, {
                                    size: 32
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(nextjs_.SignedOut, {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "sign-in",
                                    children: /*#__PURE__*/ jsx_runtime.jsx(User, {})
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(nextjs_.SignedIn, {
                                children: /*#__PURE__*/ jsx_runtime.jsx(nextjs_.UserButton, {
                                    afterSignOutUrl: "/"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(NavButton, {
                                onClick: ()=>setMobileNavActive((prev)=>!prev),
                                children: /*#__PURE__*/ jsx_runtime.jsx(BarsIcon, {})
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ })

};
;