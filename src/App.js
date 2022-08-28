import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import {useEffect } from "react";
import DatePicker from 'react-date-picker';
function App() {

const [count, setCount] = useState(0);

  useEffect(() => {

     let timer=setTimeout(()=>{setCount(count+1);
   }, [count]);

     return () => clearTimeout(timer)
     }, []);

const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <DatePicker onChange={onChange} value={value} />
         <h1>I have rendered {count} times!</h1>

         <button onClick={() => setCount((c) => c + 1)}>+</button>


      </header>


    </div>
  );
}

export default App;
