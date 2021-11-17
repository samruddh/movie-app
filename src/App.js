import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from"./Component/Home/Home"
import Header from"./Component/Header/Header"
import Footer from"./Component/Footer/Footer"
import PageNotFound from "./Component/PageNotFound/PageNotFound"
import MovieDetail from "./Component/MovieDetail/MovieDetail";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
        <Route path="/" exact component={Home}/>
        <Route path="/movie/:imdbID" component={MovieDetail}/>
        <Route component={PageNotFound}/> 
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
