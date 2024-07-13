import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light")
  const [alert, setalert] = useState(null);
  const showAlert = (message, type)=>{
       setalert({
        msg: message,
        type: type
       })
       setTimeout(() => {
        setalert(null);
       }, 1500);

  }
      const toggleMode = ()=>{
      if( mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#082858'
        showAlert("Dark mode is Enable", "Success");
        document.title = 'TextUtlis - Dark mode';
        // setInterval (() => {
        //   document.title = 'Install Textutlis now';
        // }, 2000);
        // setInterval (() => {
        //   document.title = 'Textutils is amazing';
        // }, 1500);
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white'
        showAlert("Light mode is Enable", "Success");
        document.title = 'TextUtlis - Light mode';
      }
    }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element= {<About/>}>
          </Route>
          <Route exact path="/" element={<Textform heading="Enter the text to Analyze Below" showAlert={showAlert} mode={mode}/>}>
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
