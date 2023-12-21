import { useState } from 'react';
import './App.css';
import LifeCycleFunc from './components/LifeCycleFunc'
import LifeCycleClass from './components/LifeCycleClass'

function App() {
  const [number, setNumber] = useState(0)
  const [isShow, setIsShow] = useState(true)


  return (
    <div>
      <button onClick={()=>{
        setNumber(number+1)
      }}>Plus</button>
      <button onClick={()=>setIsShow(!isShow)}>{isShow ? "OFF" : "ON"}</button>
      {/* {isShow && <LifeCycleFunc number={number} />} */}

      {isShow && <LifeCycleClass number={number}/>}
    </div>
  );
}

export default App;
