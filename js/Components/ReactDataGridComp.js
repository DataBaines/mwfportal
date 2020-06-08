"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_table_1 = require("react-table");
const makeData_1 = __importDefault(require("./makeData"));
const Styles = styled_components_1.default.div `
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = react_table_1.useTable({
        columns,
        data,
    });
    // Render the UI for your table
    return (react_1.default.createElement("table", Object.assign({}, getTableProps()),
        react_1.default.createElement("thead", null, headerGroups.map(headerGroup => (react_1.default.createElement("tr", Object.assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(column => (react_1.default.createElement("th", Object.assign({}, column.getHeaderProps()), column.render('Header')))))))),
        react_1.default.createElement("tbody", Object.assign({}, getTableBodyProps()), rows.map((row, i) => {
            prepareRow(row);
            return (react_1.default.createElement("tr", Object.assign({}, row.getRowProps()), row.cells.map(cell => {
                return react_1.default.createElement("td", Object.assign({}, cell.getCellProps()), cell.render('Cell'));
            })));
        }))));
}
function Example() {
    const columns = react_1.default.useMemo(() => [
        {
            Header: 'Name',
            columns: [
                {
                    Header: 'First Name',
                    accessor: 'firstName',
                },
                {
                    Header: 'Last Name',
                    accessor: 'lastName',
                },
            ],
        },
        {
            Header: 'Info',
            columns: [
                {
                    Header: 'Age',
                    accessor: 'age',
                },
                {
                    Header: 'Visits',
                    accessor: 'visits',
                },
                {
                    Header: 'Status',
                    accessor: 'status',
                },
                {
                    Header: 'Profile Progress',
                    accessor: 'progress',
                },
            ],
        },
    ], []);
    const data = react_1.default.useMemo(() => makeData_1.default(20), []);
    return (react_1.default.createElement(Styles, null,
        react_1.default.createElement(Table, { columns: columns, data: data })));
}
exports.default = Example;
//# sourceMappingURL=ReactDataGridComp.js.map