import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from './game';
import Home from './home';
import Layout from './layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Game' element={<Game />} />
        </Route>
      </Routes>

    </BrowserRouter>

  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
