import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";

//const Index = React.lazy(() => import("./components/layout/Index"));

function App() {
  //<Route path='/' element={<Home/>} />

  /*
    
      <React.Fragment>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/" element={<Index />} />
        </Routes>
      </React.Fragment>
  */


  return (
<React.Fragment>
  <Navbar />

    <Router>
       <Routes>
       <Route exact path="/" element={<Index />} />
       </Routes>
       </Router>
  </React.Fragment>
  );
}

export default App;
