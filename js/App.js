"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./Components/Header"));
const Home_1 = __importDefault(require("./Components/Home"));
const ConfDesp_1 = __importDefault(require("./Components/ConfDesp"));
const Invoice_1 = __importDefault(require("./Components/Invoice"));
const Error_1 = __importDefault(require("./Components/Error"));
const react_router_dom_1 = require("react-router-dom");
const Login_1 = __importDefault(require("./Components/Login"));
const PrivateRoute_1 = require("./Components/PrivateRoute");
const CustWklyDesps_1 = __importDefault(require("./Components/CustWklyDesps/CustWklyDesps"));
function App() {
    return (react_1.default.createElement("div", { className: "App222" },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("div", { id: "middle" },
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(PrivateRoute_1.PrivateRoute, { path: "/", component: Home_1.default, exact: true }),
                react_1.default.createElement(PrivateRoute_1.PrivateRoute, { path: "/confdesp", component: ConfDesp_1.default }),
                react_1.default.createElement(PrivateRoute_1.PrivateRoute, { path: "/custwklydesps", component: CustWklyDesps_1.default }),
                react_1.default.createElement(PrivateRoute_1.PrivateRoute, { path: "/invoice", component: Invoice_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/login", component: Login_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { component: Error_1.default })))));
}
exports.default = App;
//# sourceMappingURL=App.js.map