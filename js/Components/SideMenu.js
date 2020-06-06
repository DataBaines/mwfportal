"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function SideMenu() {
    // const { dispatch } = props
    return (react_1.default.createElement("div", { className: 'sidemenu' },
        react_1.default.createElement("div", { className: 'navitem' },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
        react_1.default.createElement("div", { className: 'navitem' },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/confdesp" }, "Confirmed Despatches")),
        react_1.default.createElement("div", { className: 'navitem' },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/custwklydesps" }, "Customer Weekly Despatches")),
        react_1.default.createElement("div", { className: 'navitem' },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/login" }, "Logout"))));
}
exports.default = SideMenu;
//# sourceMappingURL=SideMenu.js.map