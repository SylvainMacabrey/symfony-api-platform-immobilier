import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Lots from './pages/Lots';

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center">Projet immobilier</h1>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Lots /> } />
          <Route element={ <NotFound /> } />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
