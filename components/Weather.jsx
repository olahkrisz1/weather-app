import Image from 'next/image'
import React from 'react'

const Weather = ({data}) => {
    console.log(data)
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300'>
        <div>
            <div>
                <Image 
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                alt="/" 
                width='100'
                height='100'
                />
                <p>{data.weather[0].main}</p>
            </div>
            <p>{data.main.temp.toFixed(0)}&#176;</p>
        </div>
    </div>
  )
}

export default Weather