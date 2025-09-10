//Imports
import React from 'react'
import {Routes, Route} from 'react-router-dom';

//Page Imports
import Home from '../pages/Home.jsx';
import CreateBook from '../pages/createBook.jsx';
import ShowBook from '../pages/showBook.jsx';
import EditBook from '../pages/editBook.jsx';
import DeleteBook from '../pages/deleteBook.jsx';


//Css Import
import './App.css';

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>

  )
}

export default App