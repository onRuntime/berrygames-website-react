import React from 'react';
import {
  BrowserRouter as Router, Route
} from "react-router-dom";
import './App.css';

import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Home from './routes/Home';
import Rules from './routes/Rules';
import Tos from './routes/Tos';

const base = '/:locale(en|fr)?';

function App() {
  return (
    <Router>
      <Route path={base} component={Header} />
      <div className="content">
        <Route exact path={base} component={Home} />
        <Route path={`${base}/rules`} component={Rules} />
        <Route path={`${base}/tos`} component={Tos} />
      </div>
      <Route path={base} component={NavBar} />
    </Router>
  );
}

export default App;
