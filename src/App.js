import React from 'react';
import Welcome from "./components/settins/Welcome"
import AppBar from "./components/AppBar"
import {AppProvider }from "./components/AppProvider"
import './App.css';

function App() {
  return (
    <div className="App">
      <AppProvider>
      <AppBar/>
      <Welcome/>
      </AppProvider>
     
      
    </div>
  );
}

export default App;
