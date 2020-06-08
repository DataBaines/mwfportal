"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const apiConf_1 = __importDefault(require("../../_helpers/apiConf"));
const axios_1 = __importDefault(require("axios"));
const authHelper_1 = require("../../_helpers/authHelper");
const weekNumCalc_1 = require("../../_helpers/weekNumCalc");
const react_datepicker_1 = __importDefault(require("react-datepicker"));
function CustWklyDespsParams({ spParameters, selectedHandler }) {
    const [queryDate, setQueryDate] = react_1.useState(spParameters.queryDate);
    const [customers, setCustomers] = react_1.useState([]);
    const [customer, setCustomer] = react_1.useState('');
    react_1.useEffect(() => {
        fetchCustomers();
    }, [queryDate]);
    const fetchCustomers = () => __awaiter(this, void 0, void 0, function* () {
        try {
            let authH = authHelper_1.authHeader();
            let yrWk = weekNumCalc_1.getYearWeekString(queryDate);
            let query = buildCustomerQuery(yrWk);
            let fullUrl = apiConf_1.default.url + 'sp/GetCustomers' + query;
            console.log(JSON.stringify(authH) + ':' + yrWk + ':' + fullUrl);
            let result = yield axios_1.default(fullUrl, { headers: authH });
            setCustomers(result.data[0]);
        }
        catch (error) {
            alert('Error fetching customers:' + error);
        }
    });
    function buildCustomerQuery(yearWk) {
        let query = '?parYearWeek=';
        query += yearWk;
        return query;
    }
    // function getAllCustomers(yearWk: string) {
    //   fetch(ApiConf.url + 'sp/GetCustomers' + buildCustomerQuery(yearWk))
    //     .then(response => {
    //       response.blob().then(blob => {
    //         let url = window.URL.createObjectURL(blob);
    //         let a = document.createElement('a');
    //         a.href = url;
    //         a.download = 'employees.json';
    //         a.click();
    //       });
    //       //window.location.href = response.url;
    //   });
    // }
    const handler = function (e) {
        e.preventDefault();
        let cus = e.target.getAttribute("data-index");
        console.log(cus); //will log the index of the clicked item
        selectedHandler(cus, queryDate, weekNumCalc_1.getYearWeekString(queryDate));
        setCustomer(cus);
        console.log(customer); //will log the index of the clicked item
    };
    let listCustomersA = customers.map(function (item, index) {
        return (react_1.default.createElement("button", { className: 'custbutton', key: index, "data-index": item.Customer, onClick: handler }, item.Customer));
    });
    let range = weekNumCalc_1.getSaturdayFridayString(queryDate);
    return (react_1.default.createElement("div", { className: 'mainbody' },
        react_1.default.createElement("span", null, "Date : "),
        react_1.default.createElement(react_datepicker_1.default, { selected: queryDate, onChange: (date) => setQueryDate(date), dateFormat: "dd MMM yyyy", className: 'datepicker' }),
        react_1.default.createElement("p", { className: 'datedetail' },
            " Year/Week : ",
            weekNumCalc_1.getYearWeekString(queryDate),
            " : (",
            range,
            ")"),
        customers ? (react_1.default.createElement("div", null, listCustomersA)) : (react_1.default.createElement("div", null,
            react_1.default.createElement("p", null, "No Customers to display")))));
}
exports.default = CustWklyDespsParams;
//# sourceMappingURL=CustWklyDespsParams.js.map