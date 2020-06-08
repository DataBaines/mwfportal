"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_datepicker_1 = __importStar(require("react-datepicker"));
const en_GB_1 = __importDefault(require("date-fns/locale/en-GB"));
react_datepicker_1.registerLocale('en-GB', en_GB_1.default);
require("react-datepicker/dist/react-datepicker.css");
function ConfDespParams({ spParameters, submitHandler }) {
    // const handleInputChange = e => {
    //     const {name, value} = e.target
    //     setValues({...values, [name]: value})
    // }
    // const addItem = () => {
    //     const {name, quantity, unitCost} = values
    //     if(!name || !quantity || !unitCost) return
    //     saveItem(values)
    // }
    react_datepicker_1.setDefaultLocale('en-GB');
    const [values, setValues] = react_1.useState(spParameters);
    function mySubmitHandler(event) {
        event.preventDefault();
        submitHandler(event, values);
    }
    return (react_1.default.createElement("form", { onSubmit: mySubmitHandler },
        react_1.default.createElement("h3", null, "Confirmed Despatches Parameters: "),
        react_1.default.createElement("table", { className: 'paramtable' },
            react_1.default.createElement("tbody", null,
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("p", null, "Start Date:")),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement(react_datepicker_1.default, { selected: values.queryDate, onChange: date => setValues(Object.assign(Object.assign({}, values), { queryDate: date })), dateFormat: "dd MMM yyyy", className: 'datepicker' }))),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("p", null, "Matches:"),
                        react_1.default.createElement("p", null, "Filter on matched despatches to invoice")),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("select", { value: values.matched, onChange: event => setValues(Object.assign(Object.assign({}, values), { matched: event.target.value })) },
                            react_1.default.createElement("option", { value: "*" }, "All"),
                            react_1.default.createElement("option", { value: "M" }, "Matched"),
                            react_1.default.createElement("option", { value: "N" }, "Not Matched")))),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("p", null, "Customer:")),
                    react_1.default.createElement("td", null,
                        react_1.default.createElement("input", { type: 'text', value: values.customer, onChange: event => setValues(Object.assign(Object.assign({}, values), { customer: event.target.value })) }))))),
        react_1.default.createElement("input", { type: 'submit' })));
}
exports.default = ConfDespParams;
//# sourceMappingURL=ConfDespParams.js.map