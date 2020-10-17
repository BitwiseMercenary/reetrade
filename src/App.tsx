import React, { useState } from 'react';
import './App.css';

function App() {
  const [symbol, setSymbol] = useState("");
  const [maxPain, setMaxPain] = useState("");

  const getMaxPain = async () => {
    try {
      // proxy isnt working for some reason
      const response = await fetch(`/api/max-pain?symbol=${symbol}`);
      const body = await response.text();

      setMaxPain(body);
    } catch (err) {
      console.log({ err });
    }
  }
  return (
    <div className="App">
      <input onChange={(e) => {
        setSymbol(e.target.value);
      }} value={symbol} />
  
      <button onClick={getMaxPain}>Max Pain</button>
    <div>{maxPain}</div>
    </div>
  );
}

export default App;
