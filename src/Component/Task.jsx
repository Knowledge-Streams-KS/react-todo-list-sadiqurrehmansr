import React from 'react'
import { useState } from 'react'
export default function Task() {
    const  [count, setCount] = useState(0)
    handleDecriment=()=>{
        setCount(count+1)
    }    
  return (
    <div className='container'>
        <div className="first">
            <h1>COUNTER: {count}</h1>
            <input type="text" />
            <p>
            </p>
            {/* <button  className='btn btn-danger m-1' onclick={handleIncrement}>INCREMENT</button>
            <button className='btn btn-danger m-1' onclick={handleDecriment}>INCREMENT</button>
            <button className='btn btn-danger m-1' onclick={handleClertex}>INCREMENT</button> */}

        </div>
    </div>
  )
}
