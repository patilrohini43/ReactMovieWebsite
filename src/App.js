import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Movie from './component/ShowMovie/Movie'
import NavBar from './component/NavBar/NavBar'


function App() {
    return (
      <Router>
        <Route path="/navbar"><NavBar /></Route>
        <Route path="/movie"><Movie /></Route>

      </Router>
      );
    
}

export default App;
