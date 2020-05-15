import React, { useEffect, useState } from 'react';
import ReactDataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';


const cols = [
  { key: 'id', name: 'ID' },
  { key: 'customer', name: 'Title' },
  { key: 'despdate', name: 'Desp Date' },
  { key: 'weight', name: 'Weight' },
  { key: 'reg_date', name: 'Reg Date' } ];

const rows = [{id: 0, customer: 'C1', despdate: '2020-05-21', weight: 26.1, reg_date: '2020-05-21'}, 
{id: 1, customer: 'C2', despdate: '2020-05-22', weight: 214.1, reg_date: '2020-05-23'}];

function DataGridBasic(props) {
  const {data} = props

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch("https://7k7zi7zooe.execute-api.eu-west-2.amazonaws.com/dev/basics", {
          method: 'get',
          headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
          }
        }
      )
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

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
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      //<p>{JSON.stringify(items)}</p>
       <ReactDataGrid  columns={cols}  rows={items}    />
    );
  }
}


export default DataGridBasic