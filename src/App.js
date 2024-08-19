import {createContext, useState} from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"

import './scss/app.scss';
import NotFoundBlock from "./components/NotFoundBlock";
import Cart from "./pages/Cart";

export const SearchContext = createContext()

function App() {
    const [searchValue, setSearchValue] = useState('')


  return (
    <div className="wrapper">
      <SearchContext.Provider  value={{searchValue, setSearchValue}}>
          <Header />
          <div className="content">
              <div className="container">
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/cart" element={<Cart/>}/>
                      <Route path="*" element={<NotFoundBlock/>}/>
                  </Routes>
              </div>
          </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
