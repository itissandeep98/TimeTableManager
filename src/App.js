import React from 'react';
import Main from "./Components/Main";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
