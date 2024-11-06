import { useEffect,useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState(null)
  const [exchange, setExchange] = useState(null)
 
  useEffect(() => {
    const getExchangeRate = async()=>{
    try{
      let url=`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      const res= await axios.get(url)
     // console.log(response)
      setExchange(res.data.rates[toCurrency])
    }
  catch(error){
    console.error('Error fetching exchange rate:', error)
  }
}

  getExchangeRate()
},[fromCurrency,toCurrency])

useEffect(()=>{
  if(exchange!==null){
    setConvertedAmount((amount * exchange).toFixed(2))
  }
},[amount,exchange])

const handleAmountChange = (e)=>{
  const value=parseFloat(e.target.value)
  setAmount(isNaN(value) ? 0 : value)     //is not an number
}

const handleFromCurrencyChange = (e)=>{
  setFromCurrency(e.target.value)
  
}

const handleToCurrencyChange = (e)=>{
  setToCurrency(e.target.value)
}
  return (
    <>
      <div className="currency-convertor">
        <div className="box"></div>
          <div className="data">
            <h1>Currency Converter</h1>
            <div className="input-container">
              <label htmlFor="amt">Amount:</label>
              <input type="number"id='amt' value={amount} onChange={handleAmountChange}/>
            </div>
            <div className="input-container">
              <label htmlFor="fromCurrency">From Currency</label>
              <select name="" id="fromCurrency" value={fromCurrency} onChange={handleFromCurrencyChange}>
                <option value="USD">USD-United States Dollar</option>
                <option value="EUR">EUR-Euro</option>
                <option value="GBP">GBP-British Pound</option>
                <option value="JPY">JPY-Japanese Yen</option> 
                <option value="AUD">AUD-Australian Dollar</option>
                <option value="CAD">CAD-Canadian Dollar</option>
                <option value="CHF">CHF-Swiss Franc</option>
                <option value="CNY">CNY-Chinese Yuan</option>
                <option value="HKD">HKD-Hong Kong Dollar</option>
                <option value="MXN">MXN-Mexican Peso</option>
                <option value="NZD">NZD-New Zealand Dollar</option>
                <option value="SGD">SGD-Singapore Dollar</option>
                <option value="THB">THB-Thai Bath</option>
                <option value="INR">  INR-Indian Rupees</option>
              </select>
            </div>
            <div className="input-container">
              <label htmlFor="toCurrency">To Currency</label>
              <select name="" id="toCurrency" value={toCurrency} onChange={handleToCurrencyChange}>
                <option value="USD">USD-United States Dollar</option>
                <option value="EUR">EUR-Euro</option>
                <option value="GBP">GBP-British Pound</option>
                <option value="JPY">JPY-Japanese Yen</option> 
                <option value="AUD">AUD-Australian Dollar</option>
                <option value="CAD">CAD-Canadian Dollar</option>
                <option value="CHF">CHF-Swiss Franc</option>
                <option value="CNY">CNY-Chinese Yuan</option>
                <option value="HKD">HKD-Hong Kong Dollar</option>
                <option value="MXN">MXN-Mexican Peso</option>
                <option value="NZD">NZD-New Zealand Dollar</option>
                <option value="SGD">SGD-Singapore Dollar</option>
                <option value="THB">THB-Thai Bath</option>
                <option value="INR">  INR-Indian Rupees</option>
              </select>
            </div>
          </div>
        <div className="result">
            <p>{amount} {fromCurrency} is equal to {convertedAmount} {toCurrency} </p>
        </div>
        
      </div>
    </>
  )
}

export default App
