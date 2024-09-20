import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";

function App() {

const [valor, setValor] = useState(0);

useEffect(() => {
  document.title = `Contador: ${valor}`;
}, [valor]);

const sumar = () =>{
  setValor(valor+1);
}

const restar = () =>{
  if (valor>0){
    setValor(valor-1);
  }
  
}

  return (
    <div className="App">
      <h1>Contador</h1>
      <h2>{valor}</h2>
      <button onClick={sumar}>Aumentar</button>
      <button onClick={restar}>Decrementar</button>
    </div>
  );
}

export default App;