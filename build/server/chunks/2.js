"use strict";
exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 8002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Layouts_RootLayout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/utils/helper.js
const categories = [
    {
        "CPU / Processor": "/cpu"
    },
    {
        Motherboard: "/motherboard"
    },
    {
        RAM: "/ram"
    },
    {
        "Power Supply Unit": "/powersupply"
    },
    {
        "Storage device": "/storage"
    },
    {
        Monitor: "/monitor"
    },
    {
        Others: "/others"
    }
];
async function getUsers() {
    // Fetch data from an external API endpoint
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) throw new Error("failed to fetch data");
    return res.json();
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Navbar/Navbar.js




const Navbar = ()=>{
    const categoryHandler = (categories)=>{
        let array = [];
        categories.map((data, index)=>{
            array.push(/*#__PURE__*/ jsx_runtime.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: `${Object.values(data).map((item)=>item)}`,
                    children: Object.keys(data).map((item)=>item)
                })
            }, index));
        });
        return array;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "navbar bg-base-100",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "navbar-start",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "dropdown",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                tabIndex: 0,
                                className: "btn btn-ghost lg:hidden",
                                children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M4 6h16M4 12h8m-8 6h16"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                tabIndex: 0,
                                className: "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                children: "Categories"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                                className: "p-2 z-50",
                                                children: categoryHandler(categories)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        className: "btn btn-ghost normal-case text-xl"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                        className: "btn btn-ghost normal-case text-xl",
                        href: "/",
                        children: "Build your PC"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "navbar-center hidden lg:flex",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                    className: "menu menu-horizontal px-1",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "/",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("li", {
                            tabIndex: 0,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("details", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("summary", {
                                        children: "Categories"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                        className: "p-0 z-50",
                                        children: categoryHandler(categories)
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "navbar-end",
                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                    className: "btn",
                    children: "PC Builder"
                })
            })
        ]
    });
};
/* harmony default export */ const Navbar_Navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/Layouts/RootLayout.js


const RootLayout = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime.jsx(Navbar_Navbar, {})
            }),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime.jsx("h1", {
                    children: "Footer"
                })
            })
        ]
    });
};
/* harmony default export */ const Layouts_RootLayout = (RootLayout);


/***/ })

};
;