import React from "react";
import Calculator from "./components/Calculator"; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator /> {/* Integrating the Calculator component */}
      </header>
    </div>
  );
}

export default App;
