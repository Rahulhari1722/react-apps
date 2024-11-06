import React, { useState } from 'react';
import './App.css';
import Progress from './Progress';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className='container'>
      {show ? <Progress /> : ""}
      <button onClick={() => setShow(!show)}>Toggle progress</button>
    </div>
  );
}

export default App;