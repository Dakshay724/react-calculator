import React from 'react';
import { useState } from 'react';
import './App.css';
export default function App() {
  const [result, setResult] = useState('');

  const handleclick = (e) => {
    setResult(result.concat(e.target.name));
  };
  const clear = (e) => {
    setResult('');
  };
  const backspace = () => {
    setResult(result.slice(0, -1)); // (result.slice(0,result.length -1))
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult('Error');
    }
  };
  return (
    <div className="App">
      <div className="parent">
        <input
          className="child output"
          type="text"
          value={result}
          style={{ fontSize: '32px', fontWeight: '600' }}
        />
        <button className="child dark-gray" onClick={clear} id="clear">
          AC{' '}
        </button>
        <button className="child dark-gray" onClick={backspace} id="backspace">
          C
        </button>
        <button name="%" className="child dark-gray" onClick={handleclick}>
          %{' '}
        </button>
        <button name="/" className="child orange" onClick={handleclick}>
          {' '}
          /{' '}
        </button>
        <button name="7" className="child light-gray" onClick={handleclick}>
          7{' '}
        </button>
        <button name="8" className="child light-gray" onClick={handleclick}>
          8{' '}
        </button>
        <button name="9" className="child light-gray" onClick={handleclick}>
          9{' '}
        </button>
        <button name="*" className="child orange" onClick={handleclick}>
          *{' '}
        </button>
        <button name="4" className="child light-gray" onClick={handleclick}>
          4{' '}
        </button>
        <button name="5" className="child light-gray" onClick={handleclick}>
          5{' '}
        </button>
        <button name="6" className="child light-gray" onClick={handleclick}>
          6{' '}
        </button>
        <button name="-" className="child orange" onClick={handleclick}>
          -{' '}
        </button>
        <button name="1" className="child light-gray" onClick={handleclick}>
          1{' '}
        </button>
        <button name="2" className="child light-gray" onClick={handleclick}>
          2{' '}
        </button>
        <button name="3" className="child light-gray" onClick={handleclick}>
          3{' '}
        </button>
        <button name="+" className="child orange" onClick={handleclick}>
          +{' '}
        </button>
        <button
          name="0"
          className="child zero light-gray"
          onClick={handleclick}
        >
          0{' '}
        </button>
        <button name="." className="child light-gray" onClick={handleclick}>
          .{' '}
        </button>
        <button className="child orange" onClick={calculate}>
          ={' '}
        </button>
      </div>
    </div>
  );
}
