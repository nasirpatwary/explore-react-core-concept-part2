import { useEffect, useState } from 'react'
import './Nasir.css'
import Friend from './Friend'
export default function Nasir() {
    const [nasir,setNasir] = useState([])

    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res =>res.json())
        .then(data =>setNasir(data))
    },[])
    return(
        <div className='box'>
            <h2>Nasir:{nasir.length} </h2>
            {
              nasir.map(friend =><Friend friend={friend} ></Friend>)
            }
        </div>
    )
}