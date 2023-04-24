import ReactDOM from "react-dom/client";
import React, { Component }  from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login'
import Catalogue from "./catalogue";
import Home from './home';
import Layout from "./layout";
import Digital from './digital';

export class App extends Component {
  render() {
    return (
      <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/digital" element={<Digital />} />
        </Route>
      </Routes>
    </BrowserRouter>
      </div>
    );
  }
}

export default App;