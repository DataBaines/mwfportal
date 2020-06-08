"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function CustomerLink(props) {
    return (react_1.default.createElement("div", { className: 'customerlink' },
        react_1.default.createElement("p", null, props.customerName)));
}
exports.default = CustomerLink;
//# sourceMappingURL=CustomerLink.js.map