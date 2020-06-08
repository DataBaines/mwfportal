"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Home() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Home"),
        react_1.default.createElement("p", null,
            react_1.default.createElement(react_router_dom_1.Link, { to: "/login" }, "Logout"))));
}
exports.default = Home;
//# sourceMappingURL=Home.js.map