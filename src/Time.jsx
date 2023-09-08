import { useState } from "react"

export default function Time() {
  const [time,setTime] =useState(11)
  const handle = () =>{
    const newTime = time + 1
    setTime(newTime)
  };
  const handleClick = () =>{
      setTime(time -1)
  
}
   const TimeStyle = {
    border:'2px solid green',
    margin:'10px',
    padding:'15px',
    borderRadius:'15px'
   }
    return(
       <div style={TimeStyle}>
        <h2>Players:{time}</h2>
        <button onClick={handle}>Add Player</button>
        <button onClick={handleClick}>Add a nont Player</button>
       </div>
    )
}