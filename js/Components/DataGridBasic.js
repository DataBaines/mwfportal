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
const react_data_grid_1 = __importDefault(require("react-data-grid"));
require("react-data-grid/dist/react-data-grid.css");
const cols = [
    { key: 'id', name: 'ID' },
    { key: 'customer', name: 'Title' },
    { key: 'despdate', name: 'Desp Date' },
    { key: 'weight', name: 'Weight' },
    { key: 'reg_date', name: 'Reg Date' }
];
const rows = [{ id: 0, customer: 'C1', despdate: '2020-05-21', weight: 26.1, reg_date: '2020-05-21' },
    { id: 1, customer: 'C2', despdate: '2020-05-22', weight: 214.1, reg_date: '2020-05-23' }];
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
        }, 
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            setIsLoaded(true);
            setError(error);
        });
    }, []);
    // useEffect(() => {
    //   fetch("https://7k7zi7zooe.execute-api.eu-west-2.amazonaws.com/dev/basics", {
    //     method: 'get',
    //     headers: {
    //        'Accept': 'application/json',
    //        'Content-Type': 'application/json'
    //     }
    //   }
    //   )
    //   .then((res) => {
    //     console.log(res)
    //     return res.json()
    //   })
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setItems(result.items);
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   )
    // }, [])
    if (error) {
        return react_1.default.createElement("div", null,
            "Error: ",
            error.message);
    }
    else if (!isLoaded) {
        return react_1.default.createElement("div", null, "Loading...");
    }
    else {
        return (
        //<p>{JSON.stringify(items)}</p>
        react_1.default.createElement(react_data_grid_1.default, { columns: cols, rows: items }));
    }
}
exports.default = DataGridBasic;
//# sourceMappingURL=DataGridBasic.js.map