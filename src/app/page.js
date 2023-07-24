'use client'
import Image from 'next/image'
import axios from "axios";
import { useState } from "react";
import { BsSearch } from 'react-icons/bs'
import Weather from '../../components/Weather';
import Spinner from '../../components/Spinner'

export default function Home() {
  
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState({}) 
  const [loading, setLoading] = useState(false)

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=643ea4a08ab5b7c89bbc8d9ca131953e`
  
  const fetchWeather = (e) => {
    e.preventDefault()
    if (!city) return;
    setLoading(true)
    axios.get(url).then((response) => {
      setWeather(response.data)
      // console.log(response.data)
    })
    setCity('')
    setLoading(false)
  }

  if(loading) {
    return <Spinner />
  } else {
    return (
    <div>
      <div className='absolute top-0 left-0 bottom-0 bg-black/40 z-[1]' />
      <Image 
        src='https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_1280.jpg' 
        alt='weather'
        fill={true}
        className='object-cover'
      />

      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10 '>
        <form onSubmit={fetchWeather} className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl '>
          <div>
            <input
            onChange={(e)=> setCity(e.target.value)}
            className='bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-white' type="text" placeholder='Search city'/>
          </div>
          <button onClick={fetchWeather}><BsSearch size={20}/></button>
        </form>
      </div>

      {/* Weather */}
      
       {weather.main && <Weather data={weather} />}

    </div>
    );
  }
}

