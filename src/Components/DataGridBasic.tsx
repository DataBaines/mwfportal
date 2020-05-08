import React from 'react';
import ReactDataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';


const cols = [
  { key: 'id', name: 'ID' },
  { key: 'title', name: 'Title' },
  { key: 'count', name: 'Count' } ];

const rows = [{id: 0, title: 'row1', count: 20}, {id: 1, title: 'row2', count: 40}, {id: 2, title: 'row3', count: 60}];

function DataGridBasic() {
  return (<ReactDataGrid
   columns={cols}
   rows={rows}
    />);
}

export default DataGridBasic