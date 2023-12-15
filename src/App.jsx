import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  
  function decrementBtn() {
    setCount((count) => count - 1)
  }
  function incrementBtn() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    setCount(10);
  }, []);

  return (
    <>
      <h1>Teste de Estágio em React</h1>
      <h3>Questão 2</h3>
      <div className="card">
        <button onClick={decrementBtn}>-1</button>
        <button onClick={incrementBtn}>+1</button>
        <div className="contador">{count}</div>
      </div>
    </>
  )
}

export default App
