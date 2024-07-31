import React  from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";

import './scss/app.scss';
import NotFoundBlock from "./components/NotFoundBlock";

function App() {


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<NotFoundBlock/>}/>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
