import React from 'react';

import Header from './Components/Header';
import RouteHandler from './Components/Router/RouteHandler';
import './Styling/Global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <RouteHandler />
    </div>
  );
}

export default App;
