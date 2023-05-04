import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [arr, setArr] = useState(["a","b","c","d"]);
  console.log(1);
  
  return (
    <>
        {arr.map((v,i) => {
          return <Child key={i} v={v} i={i} setArr={setArr} />
        })}
        {/* {arr.map((v, i) => {
            return <div className="">
                <div className="">value : {v}</div>
                <div className="">index : {i}</div>
                <button onClick={() => setArr(prev => prev.filter((v2, i2) => v2 !== v) )}>delete</button>
            </div>
        })} */}
    </>
  )
}

type props = {
  setArr: React.Dispatch<React.SetStateAction<string[]>>
  v : string 
  i : number
}

function Child({v, i , setArr} : props) {

  const [val, setVal] = useState("initialized value");
  return <>
            <div className="">
                <div className="">value : {v}</div>
                <div className="">index : {i}</div>
                <div className="">{val}</div>
                <button onClick={() => setArr(prev => prev.filter((v2, i2) => v2 !== v) )}>delete</button>
                <button onClick={() => setVal(Math.random().toString())}>change value</button>
            </div>
  </>
}
export default App
