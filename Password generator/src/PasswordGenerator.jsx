import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState();
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()-_=+[{]};:\'",.<>/?';

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  const copy = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
  };

  return (
    <div className="password-generator">
      <h2>Strong Password Generator</h2>
      <div className="input-group">
        <label htmlFor="num">Password Length</label>
        <input type="number" id="num" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id="upper" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} />
        <label htmlFor="upper">Include Uppercase</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id="lower" checked={lowercase} onChange={(e) => setLowercase(e.target.checked)} />
        <label htmlFor="lower">Include Lowercase</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id="numbers" checked={numbers} onChange={(e) => setNumbers(e.target.checked)} />
        <label htmlFor="numbers">Include Numbers</label>
      </div>
      <div className="checkbox-group">
        <input type="checkbox" id="symbols" checked={symbols} onChange={(e) => setSymbols(e.target.checked)} />
        <label htmlFor="symbols">Include Symbol</label>
      </div>
      <button className="generate-btn" onClick={generatePassword}>Generate Password</button>
      <div className="generate-password">
        <input type="text" readOnly value={password} />
        <button className="copy-btn" onClick={copy}>Copy</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;


