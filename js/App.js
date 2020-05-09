"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Header_1 = __importDefault(require("./Components/Header"));
const SideMenu_1 = __importDefault(require("./Components/SideMenu"));
function App() {
    return (react_1.default.createElement("div", { className: "App222" },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement("div", { id: "container" },
            react_1.default.createElement("div", { id: "left" },
                react_1.default.createElement(SideMenu_1.default, null)),
            react_1.default.createElement("div", { id: "middle" }))));
}
exports.default = App;
//# sourceMappingURL=App.js.map