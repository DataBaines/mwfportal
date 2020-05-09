"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function SideMenu() {
    // const { dispatch } = props
    return (react_1.default.createElement("div", { className: 'sidemenu' },
        react_1.default.createElement("p", null, "Option 1"),
        react_1.default.createElement("p", null, "Option 2"),
        react_1.default.createElement("p", null, "Option 3")));
}
exports.default = SideMenu;
//# sourceMappingURL=SideMenu.js.map