"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_data_grid_1 = __importDefault(require("react-data-grid"));
require("react-data-grid/dist/react-data-grid.css");
const cols = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'count', name: 'Count' }
];
const rows = [{ id: 0, title: 'row1', count: 20 }, { id: 1, title: 'row2', count: 40 }, { id: 2, title: 'row3', count: 60 }];
function DataGridBasic() {
    return (react_1.default.createElement(react_data_grid_1.default, { columns: cols, rows: rows }));
}
exports.default = DataGridBasic;
//# sourceMappingURL=DataGridBasic.js.map