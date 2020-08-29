import React from 'react';
import './App.css';
import Routing from './Components/Routing';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
