import { useEffect, useState } from 'react'
// import Proptypes from 'proptypes'

import './App.css'
import clearIcon from './assets/weather2.png'
import rainyIcon from"./assets/weather3.png"
import snowIcon from"./assets/weather4.jpeg"
import cloudIcon from"./assets/weather 5.jpeg"
import searchIcon from"./assets/search.png"
import humidityIcon from"./assets/humidity.png"
import windIcon from"./assets/weather6.png"


const WeatherDetails=({icon,temp,city,country,lat,log,humidity,wind})=>{
  return(
    <>
    <div className='image'>
        <img src={icon} alt="" />
    </div>
    <div className="temp">{temp}°C</div>
    <div className="location">{city}</div>
    <div className="country">{country}</div>
    <div className="cord">
      <div>
        <span className='lat'>latitude</span>
        <span>{lat}</span>
      </div>
      <div>
        <span className='log'>logitude</span>
        <span>{log}</span>
      </div>
    </div>
    <div className="data-container">
      <div className="element">
        <img src={humidityIcon} className='icon' alt="" />
        <div className="humidity-percent">{humidity}%</div>
        <div className="text">Humidity</div>
      </div>
      <div className="element">
        <img src={windIcon} className='icon' alt="" />
        <div className="wind-percent">{wind}km/hr</div>
        <div className="text">Wind-Speed</div>
      </div>
    </div>
    
    
  </>
  )
}
// WeatherDetails.Proptypes={
//   icon:Proptypes.string.isRequired,
//   temp:Proptypes.number.isRequired,
//   city:Proptypes.string.isRequired,
//   country:Proptypes.string.isRequired,
//   lat:Proptypes.number.isRequired,
//   log:Proptypes.number.isRequired,
//   humidity:Proptypes.number.isRequired,
//   wind:Proptypes.number.isRequired,
// }

function App() {
  let api_key = "b563d54053142224b12e897f1638cab5"
  const [text,setText] = useState("") 

  const[icon,setIcon]=useState(snowIcon)
  const[temp,setTemp]=useState(0)
  const[city,setCity]=useState("")
  const[country,setCountry]=useState("")
  const[lat,setlat]=useState(0)
  const[log,setlog]=useState(0)
  const[humidity,setHumidity]=useState(0)
  const[wind,setWind]=useState(0)
  const[cityNotFound,setCityNotFound]=useState(false)
  const[loading,setLoading]=useState(false)
  const[error,setError]=useState(null)

  // const weatherIconMap={
  //   "01d":clearIcon,
  //   "01n":clearIcon,
  //   "02d":cloudIcon,
  //   "02n":cloudIcon,
  //   "03d":drizzleIcon,
  //   "03n":drizzleIcon,
  //   "04d":drizzleIcon,
  //   "04n":drizzleIcon,
  //   "09d":rainyIcon,
  //   "09n":rainyIcon,
  //   "10d":rainyIcon,
  //   "10n":rainyIcon,
  //   "13d":snowIcon,
  //   "13n":snowIcon,
  // }

  const search=async()=>{
    setLoading(true)
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`
    try{
      let res = await fetch(url)    
      let data = await res.json()
      if(data.cod===404){
        setCityNotFound(true)
        setLoading(false)
        return
      }
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      setTemp(Math.floor(data.main.temp))
      setCity(data.name)
      setCountry(data.sys.country)
      setlat(data.coord.lat)
      setlog(data.coord.lon)
      
      const weatherIconCode=data.weather[0].icon
      setIcon(weatherIconMap[weatherIconCode]||clearIcon)

      setCityNotFound(false)
    }catch (error){
      console.log("an error occurred while",error.message)
     setError('An error occurred while fetching the data')
    }finally{
      setLoading(false)
    }

  }
  const handlecity=(e)=>{
    setText(e.target.value)
  }
  const handleKeyDown=(e)=>{
    if(e.key==='Enter'){
      search()
    }
  }
  useEffect(function()

  {
    search()
  },[]
  )
  return (
    <>
      <div className='container'>
        <div className='input-container'>
          <input type='text'
           placeholder='Enter city name' className='cityInput'
           onChange={handlecity} 
           value={text}
           onKeyDown={handleKeyDown}/>
          <div className='search-icon'>
          <img src={searchIcon} 
          alt='Search'
          onClick={()=>search()} />
          </div>
        </div>
        {!loading && !cityNotFound && <WeatherDetails icon={icon} temp={temp}city={city} country={country} lat={lat} log={log} humidity={humidity} wind={wind} />}
        {loading&&<div className='loading-message'>
         loading...
        </div>}
        {error&&<div className='error-message'>{error}</div>}
        {cityNotFound&& <div className='city-not-found'>City not found</div>}
        <p className="copyright">Designed by <span>Rahul Hari</span></p>
      </div>
       
    </>
  )
}

export default App
