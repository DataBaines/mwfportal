"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
//import 'react-data-grid/dist/react-data-grid.css';
const defaultColumnProperties = {
    sortable: true
};
const cols = [
    { accessor: 'id', Header: 'ID' },
    { accessor: 'customer', Header: 'Customer' },
    { accessor: 'despdate', Header: 'Desp Date' },
    { accessor: 'weight', Header: 'Weight', Cell: props => react_1.default.createElement("span", { className: 'number' }, props.value) },
    { accessor: 'reg_date', Header: 'Reg Date' }
]; //.map(c => ({ ...c, ...defaultColumnProperties }));;
const columns = [
    {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
    },
    {
        Header: 'Age',
        accessor: 'age',
        Cell: props => react_1.default.createElement("span", { className: 'number' }, props.value) // Custom cell components!
    }
];
function DataGridBasic(props) {
    const { data } = props;
    const [error, setError] = react_1.useState(null);
    const [isLoaded, setIsLoaded] = react_1.useState(false);
    const [items, setItems] = react_1.useState([]);
    react_1.useEffect(() => {
        fetch("https://7k7zi7zooe.execute-api.eu-west-2.amazonaws.com/dev/basics", {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then((result) => {
            setIsLoaded(true);
            setItems(result);
        }, (error) => {
            setIsLoaded(true);
            setError(error);
        });
    }, []);
    if (error) {
        return react_1.default.createElement("div", null,
            "Error: ",
            error.message);
    }
    else if (!isLoaded) {
        return react_1.default.createElement("div", null, "Loading...");
    }
    else {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("p", null, JSON.stringify(items)),
            react_1.default.createElement("p", null, items.length)));
    }
}
const ROW_COUNT = 2;
//Test data
const rows = [{ id: 0, customer: 'C1', despdate: '2020-05-21', weight: 26.1, reg_date: '2020-05-21' },
    { id: 1, customer: 'C2', despdate: '2020-05-22', weight: 214.1, reg_date: '2020-05-23' }];
exports.default = DataGridBasic;
//# sourceMappingURL=DataGridBasic.js.map