
import './App.css'
import Counter from './Counter'
import Time from './Time'
import User from './User'
import Nasir from './Nasir'
function App() {

    function onClick() {
      alert('I am Nasir hossin')
    }
  const onClick2 =() =>{
    alert('not allwoy')
  } 

  const add =(num)=>{
   alert(num + 2)
  }
  return (
    <>

      <h2>React concepts </h2>
      <Nasir></Nasir>
      <User></User>
      <Time></Time>
      <Counter></Counter>
      <button onClick={onClick} >On Click</button>
      <button onClick={onClick2} >On To Click</button>
      <button onClick={() =>{ alert('tryagin')}} >On Third Click</button>
      <button onClick={() =>add(5)} >Submit</button>
    </>
  )
}


export default App
