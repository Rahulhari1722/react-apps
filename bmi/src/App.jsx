import { useState } from 'react'

import './App.css'

function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState(null)
  const [status, setStatus] = useState('')
  const[error, setError] = useState("")

  const calcuateBmi = () => {
    const isValidHeight=/^\d+$/.test(height)
    const isValidWeight=/^\d+$/.test(weight)               // \d-digit only
    
    if(isValidHeight && isValidWeight){
      const heightInMeters=height/100
      const bmiValue=weight/(heightInMeters*heightInMeters)
      setBmi(bmiValue.toFixed(2))

      if(bmiValue<18.5){
        setStatus('UnderWeight')
      }
      else if(bmiValue>=18.5 && bmiValue<25){
        setStatus('Normal')
      }
      else if(bmiValue>=25 && bmiValue<30){
        setStatus('OverWeight')
      }
      else{
        setStatus('Obese')
      }
      setError("")
    }
    else{
      setBmi(nul)
      setStatus("")
      setError("Please enter a vaild height and weight")
    }
  }
const clearAll = () => {
    setHeight('')
    setWeight('')
    setBmi(null)
    setStatus('')
    setError("")
}

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
         {error && <p className='error'>{error}</p>}
          <div className="input-container">
            <label htmlFor="height">height(cm)</label>
            <input type="text" id="height" value={height}
            onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor="weight">weight(kg)</label>
            <input type="text" id="weight" value={weight}
            onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button onClick={calcuateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear all</button>
          {bmi!==null&&(
            <div className="result">
            <p>Your BMI is:{bmi}</p>
            <p>Status:{status}</p>
          </div>
          )

          }
        </div>
      </div>
    </>
  )
}

export default App
