"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Logo_MWF_jpg_1 = __importDefault(require("../Resources/Logo-MWF.jpg"));
const react_router_dom_1 = require("react-router-dom");
function Header() {
    const linkStyle = {
        margin: '15px',
    };
    return (react_1.default.createElement("div", { className: 'header' },
        react_1.default.createElement("div", { id: "headerlogo" },
            react_1.default.createElement("img", { src: Logo_MWF_jpg_1.default, alt: 'website logo' })),
        react_1.default.createElement("p", { id: 'rbtitle' }, "Developed by Ralph Baines."),
        react_1.default.createElement("div", { className: 'navitem' },
            react_1.default.createElement(react_router_dom_1.Link, { className: 'link', to: "/" }, "Home"),
            react_1.default.createElement(react_router_dom_1.Link, { className: 'link', to: "/confdesp" }, "Confirmed Despatches"),
            react_1.default.createElement(react_router_dom_1.Link, { className: 'link', to: "/custwklydesps" }, "Customer Weekly Despatches"),
            react_1.default.createElement(react_router_dom_1.Link, { className: 'link', to: "/login" }, "Logout"))));
}
exports.default = Header;
//# sourceMappingURL=Header.js.map