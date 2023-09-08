import { useState } from "react"

export default function Counter() {
    const [count,setCount] = useState(0)
    const handel = () =>{
    const newCount = count + 1
       setCount(newCount)    

    }
    const handel2 = () =>{
        const newCount = count - 1
       setCount(newCount) 
    }
    return(
        <div style={{border: '2px solid orange'}}>
            <h2>Counter:{count} </h2>
            <button onClick={handel} >Is Added</button>
            <button onClick={handel2} >Is Not Added</button>
        </div>
        
    )
}