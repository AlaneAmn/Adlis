import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { AppProvider } from './context';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Booklist from './components/Booklist/Booklist';
import BookDetails from './components/BookDetails/BookDetails';
import Login from './pages/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />} >
            <Route path='about' element={<About/>}/>
            <Route path='book' element={<Booklist/>}/>
            <Route path='/book/:id' element={<BookDetails/>}/>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
  </AppProvider>
)
