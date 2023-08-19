import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from '../Main/Main';
import NotFound from "../NotFound/NotFound";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";


function App() {
  return (
    <div className="root">
      <div className="root__content">
        <Routes>
          <Route path="/" element={<Main isAuthPage={false}/>}/>
          <Route path="/movies" element={<Movies isAuthPage={true}/>}/>
          <Route path="/saved-movies" element={<SavedMovies isAuthPage={true}/>}/>
          <Route path="/profile" element={<Profile isAuthPage={true}/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/*" element={<NotFound/>}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
