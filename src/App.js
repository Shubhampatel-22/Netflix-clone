import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Home';
import MovieInfo from './MovieInfo';
import './App.css';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movieInfo' element={<MovieInfo/>}/>
          <Route path='/searchmovie' element={<Search/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
