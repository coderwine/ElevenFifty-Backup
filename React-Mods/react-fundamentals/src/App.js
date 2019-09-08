import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from "./Components/site/Header";
import Footer from "./Components/site/Footer";
import Sidebar from "./Components/site/Sidebar";
import {
  BrowserRouter as Router,
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header/>
      <Router>
        <Sidebar />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
