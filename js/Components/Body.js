"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DataGridBasic_1 = __importDefault(require("./DataGridBasic"));
function Body() {
    return (react_1.default.createElement("div", { className: 'mainbody' },
        react_1.default.createElement("h3", null, "Body"),
        react_1.default.createElement(DataGridBasic_1.default, null)));
}
exports.default = Body;
//# sourceMappingURL=Body.js.map