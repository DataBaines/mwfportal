"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const react_table_1 = require("react-table");
const Table_1 = __importDefault(require("@material-ui/core/Table"));
const TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
const TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
const TableHead_1 = __importDefault(require("@material-ui/core/TableHead"));
const TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
//import makeData from './makeData'
exports.Styles = styled_components_1.default.div `
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
      font-size: 12px;

      :last-child {
        border-right: 0;
      }
    }

    th {
      background-color: dimgray;  
      color: azure;
    }
  }
`;
function BaseTable({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, } = react_table_1.useTable({
        columns,
        data,
    });
    // Render the UI for your table
    // return (
    //   <table {...getTableProps()}>
    //     <thead>
    //       {headerGroups.map(headerGroup => (
    //         <tr {...headerGroup.getHeaderGroupProps()}>
    //           {headerGroup.headers.map(column => (
    //             <th {...column.getHeaderProps()}>{column.render('Header')}</th>
    //           ))}
    //         </tr>
    //       ))}
    //     </thead>
    //     <tbody {...getTableBodyProps()}>
    //       {rows.map((row, i) => {
    //         prepareRow(row)
    //         return (
    //           <tr {...row.getRowProps()}>
    //             {row.cells.map(cell => {
    //               return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
    //             })}
    //           </tr>
    //         )
    //       })}
    //     </tbody>
    //   </table>
    return (react_1.default.createElement(Table_1.default, Object.assign({}, getTableProps()),
        react_1.default.createElement(TableHead_1.default, null, headerGroups.map(headerGroup => (react_1.default.createElement(TableRow_1.default, Object.assign({}, headerGroup.getHeaderGroupProps()), headerGroup.headers.map(column => (react_1.default.createElement(TableCell_1.default, Object.assign({}, column.getHeaderProps()), column.render('Header')))))))),
        react_1.default.createElement(TableBody_1.default, Object.assign({}, getTableBodyProps()), rows.map((row, i) => {
            prepareRow(row);
            return (react_1.default.createElement(TableRow_1.default, Object.assign({}, row.getRowProps()), row.cells.map(cell => {
                return react_1.default.createElement(TableCell_1.default, Object.assign({}, cell.getCellProps()), cell.render('Cell'));
            })));
        }))));
}
exports.default = BaseTable;
//# sourceMappingURL=BaseTable.js.map