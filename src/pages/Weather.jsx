import React from 'react'

const Weather = ({setPage}) => {
    const handleClick=()=>{
        setPage('ToDoList');
    }
  return (
    <div>
        <h1>Weather App</h1>
        <button onClick={()=>{handleClick()}} >Next</button>
    </div>
  )
}

export default Weather