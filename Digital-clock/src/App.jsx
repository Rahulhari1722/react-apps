import {useState ,useEffect} from 'react'

import './App.css'

function App() {
  const [currentTime,setCurentTime]=useState(new Date())
useEffect(() =>{
  const timer = setInterval(() =>{ setCurentTime(new Date())
  },1000)
  return () => clearInterval(timer)  // cleanup function to stop the timer when the component unmounts 
},[])

  const formatTime=(num)=>{
    return num < 10 ? `0${num}` : num
  }
const formatHour=(hour)=>{
  return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour
}
const formatDate=(date)=>{
  const option={weekday:"long",year:"numeric" ,month:"long",date:"numeric"}
  return date.toLocaleDateString(undefined,option)
}

  return (
    <>
      <div className="digital-clock">
        <h1>Digital Clock</h1>
        <div className="time">{formatTime(formatHour(currentTime.getHours() ))}:{formatTime(currentTime.getMinutes())}:{formatTime(currentTime.getSeconds())
        } {currentTime.getHours()>=12? " PM":" AM"}</div>
      
        <div className="date">{formatDate(currentTime)}</div>
      </div>
    </>
  )
}

export default App
