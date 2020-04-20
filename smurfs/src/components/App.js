import React from "react";
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm'

import "./App.css";

function App() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }

export default App;
