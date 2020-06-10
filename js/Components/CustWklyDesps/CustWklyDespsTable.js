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
const BaseTable_1 = __importStar(require("../BaseTable"));
const axios_1 = __importDefault(require("axios"));
const react_csv_1 = require("react-csv");
const authHelper_1 = require("../../_helpers/authHelper");
const apiConf_1 = __importDefault(require("../../_helpers/apiConf"));
const weekNumCalc_1 = require("../../_helpers/weekNumCalc");
function CustWklyDespsTable({ yearWeek, customer, selDate }) {
    const [data, setData] = react_1.useState([]);
    const [query, setQuery] = react_1.useState(buildQuery);
    const [isLoading, setIsLoading] = react_1.useState(false);
    const [isError, setIsError] = react_1.useState(false);
    const [error, setError] = react_1.useState('');
    react_1.useEffect(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            setIsError(false);
            setIsLoading(true);
            try {
                let authH = authHelper_1.authHeader();
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                const result = yield axios_1.default(apiConf_1.default.url + 'sp/GetCustWeeklyDespatchSummary' + query, { headers: authH });
                setData(result.data[0]);
            }
            catch (error) {
                setIsError(true);
                setError(error);
            }
            setIsLoading(false);
        });
        fetchData();
    }, [query]);
    function buildQuery() {
        let qu = '?parYearWeek=';
        qu += yearWeek;
        qu += '&parCustomer=';
        qu += customer;
        return qu;
    }
    const columns = react_1.default.useMemo(() => [
        {
            Header: 'Name',
            columns: [
            //none    
            ],
        },
        {
            Header: 'Info',
            columns: [
                {
                    Header: 'Customer',
                    accessor: 'Customer',
                },
                {
                    Header: 'Order Ref',
                    accessor: 'OrderRef',
                },
                {
                    Header: 'Ref1',
                    accessor: 'Ref1',
                },
                {
                    Header: 'Despatch Date',
                    accessor: d => {
                        return d.DespDate.substring(0, 10);
                    },
                },
                {
                    Header: 'Packages',
                    accessor: 'Packages',
                },
                {
                    Header: 'Products',
                    accessor: 'Products',
                },
                {
                    Header: 'Total Qty',
                    accessor: d => {
                        return d.Qty ? d.Qty.toFixed(2) : '0.00';
                    },
                },
                {
                    Header: 'Postcode',
                    accessor: 'Postcode',
                },
                {
                    Header: 'Delivery Name',
                    accessor: 'DeliveryName',
                },
                {
                    Header: 'Postage Carrier',
                    accessor: 'PostageCarrier',
                },
                {
                    Header: 'Postage Service',
                    accessor: 'ServiceName',
                },
                {
                    Header: 'Order Price',
                    accessor: d => {
                        return d.OrderPrice ? d.OrderPrice.toFixed(2) : '0.00';
                    },
                },
                {
                    Header: 'Additions',
                    accessor: d => {
                        return d.Additions ? d.Additions.toFixed(2) : '0.00';
                    },
                },
            ],
        },
    ], []);
    return (react_1.default.createElement("div", null,
        isError && react_1.default.createElement("div", null,
            "Something went wrong ... ",
            error),
        isLoading ? (react_1.default.createElement("div", null, "Loading ...")) :
            (react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: 'tabletitle' },
                    react_1.default.createElement("span", { className: 'tableparams' },
                        "Customer: ",
                        customer,
                        " Week: ",
                        yearWeek,
                        " (",
                        weekNumCalc_1.getSaturdayFridayString(selDate),
                        ")"),
                    react_1.default.createElement("span", { className: 'downloadlink' },
                        react_1.default.createElement(react_csv_1.CSVLink, { data: data, filename: 'WeeklyDespatches_' + customer + '_' + yearWeek + '.csv' }, "Download as a csv file")),
                    react_1.default.createElement(BaseTable_1.Styles, null,
                        react_1.default.createElement(BaseTable_1.default, { columns: columns, data: data })))))));
}
const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};
const newPerson = () => {
    const statusChance = Math.random();
    return {
        firstName: "Ralph",
        lastName: "Baines",
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status: statusChance > 0.66
            ? 'relationship'
            : statusChance > 0.33
                ? 'complicated'
                : 'single',
    };
};
function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map(d => {
            return Object.assign(Object.assign({}, newPerson()), { subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined });
        });
    };
    return makeDataLevel();
}
exports.default = CustWklyDespsTable;
//# sourceMappingURL=CustWklyDespsTable.js.map