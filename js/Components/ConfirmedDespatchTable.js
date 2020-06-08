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
const BaseTable_1 = __importStar(require("./BaseTable"));
const axios_1 = __importDefault(require("axios"));
const moment_1 = __importDefault(require("moment"));
const react_csv_1 = require("react-csv");
const authHelper_1 = require("../_helpers/authHelper");
const apiConf_1 = __importDefault(require("../_helpers/apiConf"));
const weekNumCalc_1 = require("../_helpers/weekNumCalc");
function ConfirmedDespatchTable({ queryDate, matched, customer }) {
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
                //const proxyurl = "https://cors-anywhere.herokuapp.com/";
                const result = yield axios_1.default(apiConf_1.default.url + 'sp/GetAllConfirmedDespatches' + query, { headers: authH });
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
        let query = '?parYearWeek=';
        query += weekNumCalc_1.getYearWeekString(queryDate);
        query += '&parMatched=';
        query += matched;
        query += '&parCustomer=';
        query += customer;
        return query;
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
                    Header: 'Ref1',
                    accessor: 'Ref1',
                },
                {
                    Header: 'Ref2',
                    accessor: 'Ref2',
                },
                {
                    Header: 'Ref3',
                    accessor: 'Ref3',
                },
                {
                    Header: 'Despatch Date',
                    accessor: d => {
                        return moment_1.default(d.DespDate)
                            .local()
                            .format("DD-MM-YYYY");
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
                    accessor: 'Totalqty',
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
                    accessor: 'PostageService',
                },
                {
                    Header: 'RegDate',
                    accessor: d => {
                        return moment_1.default(d.RegDate)
                            .local()
                            .format("DD-MM-YYYY");
                    },
                },
                {
                    Header: 'Cost',
                    accessor: 'Cost',
                },
                {
                    Header: 'Invoice Cost',
                    accessor: 'TotalCost',
                },
            ],
        },
    ], []);
    return (react_1.default.createElement("div", null,
        isError && react_1.default.createElement("div", null,
            "Something went wrong ... ",
            error),
        isLoading ? (react_1.default.createElement("div", null, "Loading ...")) :
            (react_1.default.createElement("div", { className: 'tabletitle' },
                react_1.default.createElement("span", { className: 'tableparams' },
                    "Customer: ",
                    customer,
                    " Week: ",
                    weekNumCalc_1.getYearWeekString(queryDate),
                    " (",
                    weekNumCalc_1.getSaturdayFridayString(queryDate),
                    ")"),
                react_1.default.createElement("span", { className: 'downloadlink' },
                    react_1.default.createElement(react_csv_1.CSVLink, { data: data, filename: "ConfirmedDespatch.csv" }, "Download as a csv file")),
                react_1.default.createElement(BaseTable_1.Styles, null,
                    react_1.default.createElement(BaseTable_1.default, { columns: columns, data: data }))))));
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
exports.default = ConfirmedDespatchTable;
//# sourceMappingURL=ConfirmedDespatchTable.js.map