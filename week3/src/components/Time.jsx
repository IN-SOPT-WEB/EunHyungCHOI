import React from 'react'
import { useState } from 'react'

export default function Time() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    }, 1000)

  return (
    <div>
        <h1>지금 시간은</h1>
        <p>{time}</p>
    </div>
  )
}
