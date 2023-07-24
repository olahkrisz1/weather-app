'use client'
import axios from "axios";
import { useState } from "react";
import { BsSearch } from 'react-icons/bs'

export default function Home() {
  
  const [city, setcity] = useState('')
  const [weather, setWeather] = useState({}) 
  const [loading, setLoading] = useState(false)

  const url=`https://api.openweathermap.org/data/2.5/weather?q=dubai&units=metric&appid=643ea4a08ab5b7c89bbc8d9ca131953e`

  const fetchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((response) => {
      setWeather(response.data)
      console.log(response.data)
    })
    setcity('')
    setLoading(false)
  }

  return (
    <div>
    <main>
      <h1>Hello world</h1>
      <button onClick={fetchWeather}>Fetch data</button>
    </main>
    </div>
  )
}
