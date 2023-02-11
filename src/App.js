import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"; 
import {Home, About, Contact, Personal, Login, MyAccount, } from './Pages';
import { Footer, Header } from './Components';

function App() {
  return (
    <div className="App">
     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/personal" element={<Personal />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path='/my-account' element={<MyAccount/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
