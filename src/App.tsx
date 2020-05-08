import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import SideMenu from './Components/SideMenu';
import DataGridBasic from './Components/DataGridBasic';

function App() {
  
  return (
    <div className="App222">
      <Header />
      <div id = "container" >
        <div id ="left" >
          <SideMenu />
        </div>
        <div id = "middle" >
		      <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
