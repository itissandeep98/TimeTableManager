import React from 'react';
import './App.css';
import Routing from './Components/Routing';
import { BrowserRouter } from 'react-router-dom';
// import fire from './config/fire';

function App() {
  // React.useEffect(() => {
  //   const msg=fire.messaging();
  //   msg.requestPermission().then(()=>{
  //     return msg.getToken();
  //   }).then((data)=>{
  //     console.warn("token",data)
  //   })
  // })

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routing />
      </div>
    </BrowserRouter>
  );
}

export default App;
